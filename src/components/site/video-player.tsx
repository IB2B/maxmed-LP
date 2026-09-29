"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useI18n } from "@/i18n/provider";
import {
  ArrowUpLeftIcon,
  MaximizeIcon,
  MinimizeIcon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  Volume2Icon,
  VolumeXIcon,
  XIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

// Minimal typings for the parts of the YouTube IFrame API we use.
type YTPlayer = {
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  mute(): void;
  unMute(): void;
  setVolume(volume: number): void;
  getCurrentTime(): number;
  getDuration(): number;
  destroy(): void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer;
      PlayerState: { ENDED: 0; PLAYING: 1; PAUSED: 2; BUFFERING: 3 };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;
function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve();
  apiPromise ??= new Promise<void>((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });
  return apiPromise;
}

function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function VideoPlayer({ videoId, title }: { videoId: string; title: string }) {
  const t = useI18n().dict.video;
  const anchorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(100);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  // Mini-player: float in the corner while playing and scrolled out of view.
  const [offscreen, setOffscreen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const el = anchorRef.current;
    if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      const visible = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
      const out = visible < r.height * 0.3;
      setOffscreen(out);
      // Back in view: the video returns to its place and can float again later.
      if (!out) {
        setDismissed(false);
        setPinned(false);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  // Create the player only once the viewer asks to watch.
  useEffect(() => {
    if (!started || !mountRef.current) return;
    let cancelled = false;
    loadYouTubeApi().then(() => {
      if (cancelled || !mountRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(mountRef.current, {
        videoId,
        host: "https://www.youtube-nocookie.com",
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            setReady(true);
            setDuration(e.target.getDuration());
            e.target.playVideo();
          },
          onStateChange: (e: { data: number }) => {
            setPlaying(e.data === 1 || e.data === 3);
            setEnded(e.data === 0);
          },
        },
      });
    });
    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [started, videoId]);

  // Track progress while playing.
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      setCurrent(p.getCurrentTime());
      if (!duration) setDuration(p.getDuration());
    }, 250);
    return () => clearInterval(id);
  }, [playing, duration]);

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), 2500);
  }, []);

  const togglePlay = useCallback(() => {
    const p = playerRef.current;
    if (!started) return setStarted(true);
    if (!p) return;
    // Pausing inside the mini-player keeps it open instead of snapping back.
    if (offscreen) setPinned(true);
    if (ended) {
      p.seekTo(0, true);
      p.playVideo();
    } else if (playing) {
      p.pauseVideo();
    } else {
      p.playVideo();
    }
    showControls();
  }, [started, ended, playing, showControls, offscreen]);

  const closeMini = () => {
    playerRef.current?.pauseVideo();
    setDismissed(true);
  };

  const backToVideo = () => {
    anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const seek = (seconds: number) => {
    const p = playerRef.current;
    if (!p) return;
    const t = Math.min(Math.max(seconds, 0), duration);
    p.seekTo(t, true);
    setCurrent(t);
  };

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p) return;
    if (muted || volume === 0) {
      p.unMute();
      if (volume === 0) {
        p.setVolume(50);
        setVolume(50);
      }
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };

  const changeVolume = (v: number) => {
    const p = playerRef.current;
    if (!p) return;
    p.setVolume(v);
    setVolume(v);
    if (v > 0 && muted) {
      p.unMute();
      setMuted(false);
    }
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else containerRef.current?.requestFullscreen();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if ((e.target as HTMLElement).tagName === "INPUT" && e.key !== " ") return;
    const actions: Record<string, () => void> = {
      " ": togglePlay,
      k: togglePlay,
      ArrowRight: () => seek(current + 5),
      ArrowLeft: () => seek(current - 5),
      m: toggleMute,
      f: toggleFullscreen,
    };
    const action = actions[e.key];
    if (action) {
      e.preventDefault();
      action();
      showControls();
    }
  };

  const progress = duration ? (current / duration) * 100 : 0;
  const barVisible = started && ready && (controlsVisible || !playing);
  const silent = muted || volume === 0;
  const floating =
    started && ready && offscreen && !dismissed && !ended && !fullscreen && (playing || pinned);

  return (
    // The anchor keeps the video's space in the page while it floats.
    <div ref={anchorRef} className="relative aspect-video w-full bg-ink">
    {floating && (
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute inset-0 grid place-items-center text-sm tracking-[-0.01em] text-white/60 hover:text-white"
      >
        {t.floating}
      </button>
    )}
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label={`${t.region}: ${title}`}
      onKeyDown={onKeyDown}
      onMouseMove={started ? showControls : undefined}
      onMouseLeave={() => playing && setControlsVisible(false)}
      className={cn(
        "group overflow-hidden bg-ink outline-none focus-visible:ring-2 focus-visible:ring-link",
        floating
          ? "animate-pip-in fixed right-4 bottom-4 z-50 aspect-video w-[min(360px,calc(100vw-32px))] rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] ring-1 ring-black/10"
          : "absolute inset-0",
        started && playing && !controlsVisible && "cursor-none"
      )}
    >
      {/* The iframe overflows the box top and bottom: YouTube letterboxes the
          video into the middle, pushing its title bar and logo out of view. */}
      {started && (
        <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 [&>iframe]:size-full">
          <div ref={mountRef} />
        </div>
      )}

      {started && ready && !playing && !ended && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/25">
          <span className="grid size-16 place-items-center rounded-full bg-white text-ink shadow-sm">
            <PlayIcon className="size-6 translate-x-0.5 fill-current" />
          </span>
        </div>
      )}

      {/* Click layer: keeps YouTube's own UI from reacting to the cursor. */}
      {started && (
        <button
          type="button"
          aria-label={playing ? t.pause : t.play}
          onClick={togglePlay}
          onDoubleClick={toggleFullscreen}
          className="absolute inset-0 cursor-[inherit]"
        />
      )}

      {!started && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={`${t.playVideo}: ${title}`}
          className="absolute inset-0 grid place-items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            onError={() => setPoster(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)}
            className="absolute inset-0 size-full scale-[1.03] object-cover"
          />
          <span className="absolute inset-0 bg-black/20" />
          <span className="relative flex items-center gap-3 rounded-full bg-white py-2 pr-5 pl-2 text-base font-medium text-ink shadow-sm transition-transform group-hover:scale-[1.03]">
            <span className="grid size-10 place-items-center rounded-full bg-ink text-white">
              <PlayIcon className="size-4 translate-x-px fill-current" />
            </span>
            {t.watchWalkthrough}
          </span>
        </button>
      )}

      {started && !ready && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="size-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        </div>
      )}

      {ended && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/40">
          <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink">
            <RotateCcwIcon className="size-4" /> Replay
          </span>
        </div>
      )}

      {floating && (
        <div className="absolute top-2 right-2 z-10 flex gap-1.5">
          <button
            type="button"
            onClick={backToVideo}
            aria-label={t.backToVideo}
            className="grid size-7 place-items-center rounded-md bg-black/55 text-white backdrop-blur-sm hover:bg-black/75"
          >
            <ArrowUpLeftIcon className="size-4" />
          </button>
          <button
            type="button"
            onClick={closeMini}
            aria-label={t.closeMini}
            className="grid size-7 place-items-center rounded-md bg-black/55 text-white backdrop-blur-sm hover:bg-black/75"
          >
            <XIcon className="size-4" />
          </button>
        </div>
      )}

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white transition-opacity duration-200",
          floating ? "px-2.5 pt-10 pb-1.5" : "px-4 pt-16 pb-3",
          barVisible ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <input
          type="range"
          aria-label={t.seek}
          min={0}
          max={duration || 0}
          step={0.1}
          value={current}
          onChange={(e) => seek(Number(e.target.value))}
          className="video-range mb-2 w-full"
          style={{ "--fill": `${progress}%` } as React.CSSProperties}
        />
        <div className="flex items-center gap-3 text-sm tracking-normal">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? t.pause : t.play}
            className="grid size-8 place-items-center rounded-md hover:bg-white/15"
          >
            {playing ? (
              <PauseIcon className="size-4 fill-current" />
            ) : ended ? (
              <RotateCcwIcon className="size-4" />
            ) : (
              <PlayIcon className="size-4 fill-current" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={silent ? t.unmute : t.mute}
              className="grid size-8 place-items-center rounded-md hover:bg-white/15"
            >
              {silent ? <VolumeXIcon className="size-4" /> : <Volume2Icon className="size-4" />}
            </button>
            <input
              type="range"
              aria-label={t.volume}
              min={0}
              max={100}
              value={silent ? 0 : volume}
              onChange={(e) => changeVolume(Number(e.target.value))}
              className={cn("video-range hidden w-20", !floating && "sm:block")}
              style={{ "--fill": `${silent ? 0 : volume}%` } as React.CSSProperties}
            />
          </div>

          <span className={cn("font-mono text-xs text-white/80 tabular-nums", floating && "hidden")}>
            {formatTime(current)} / {formatTime(duration)}
          </span>

          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={fullscreen ? t.exitFullScreen : t.fullScreen}
            className="ml-auto grid size-8 place-items-center rounded-md hover:bg-white/15"
          >
            {fullscreen ? <MinimizeIcon className="size-4" /> : <MaximizeIcon className="size-4" />}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
