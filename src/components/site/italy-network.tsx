import Image from "next/image";
import DottedMap from "dotted-map";

import { cn } from "@/lib/utils";
import { Divider, Frame } from "@/components/site/frame";
import { CountUp } from "@/components/site/count-up";
import { IS_SAMPLE, networkCities, networkStats } from "@/data/network";
import { format, getDictionary, type Locale } from "@/i18n/config";

// Computed once on the server; visitors only receive the finished SVG.
const MAP_HEIGHT = 70;
const map = new DottedMap({ height: MAP_HEIGHT, grid: "diagonal", countries: ["ITA"] });
const dots = map.getPoints();
const width = Math.max(...dots.map((d) => d.x)) + 1;
const height = MAP_HEIGHT;

// Snap each city to the nearest dot so pins sit exactly on the grid.
const pins = networkCities.map((city) => {
  const pin = new DottedMap({ height: MAP_HEIGHT, grid: "diagonal", countries: ["ITA"] });
  pin.addPin({ lat: city.lat, lng: city.lng });
  const point = pin.getPoints().find((p) => "lat" in p) ?? { x: 0, y: 0 };
  return { ...city, x: point.x, y: point.y };
});

// Real figures only: until src/data/network.ts holds real data (IS_SAMPLE = false),
// production shows no pins and lists product facts instead of numbers.
// Local dev previews the sample data, tagged, so the layout can be reviewed.
const isPreview = IS_SAMPLE && process.env.NODE_ENV === "development";
const showData = !IS_SAMPLE || isPreview;

// Icons for the stat rows (networkStats, then the city count) and the fact rows,
// in the same order as network.stats and network.facts in the dictionaries.
const statIcons = [...networkStats.map((s) => s.icon), "cityscape"];
const statValues = [...networkStats.map((s) => s.value), String(networkCities.length)];
const factIcons = ["hospital", "health-worker", "video-camera", "flag-italy"];

export function ItalyNetwork({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).network;
  const rows = [...t.stats, t.cities].map((label, i) => ({ label, value: statValues[i], icon: statIcons[i] }));
  const facts = t.facts.map((fact, i) => ({ ...fact, icon: factIcons[i] }));
  return (
    <section id="network" className="scroll-mt-[68px]">
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-[640px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          {showData ? t.titleData : t.titleFacts}
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[17px] leading-7 tracking-normal text-balance text-body">
          {showData ? t.subtitleData : t.subtitleFacts}
        </p>
      </Frame>

      <Divider />
      <Frame>
        <div className="grid lg:grid-cols-[1fr_450px]">
          <div className="grid place-items-center px-6 py-12 sm:px-10 lg:border-r lg:border-hairline">
            <div
              className="relative w-full max-w-[420px]"
              style={{ aspectRatio: `${width} / ${height}` }}
            >
              <svg
                viewBox={`0 0 ${width} ${height}`}
                className="absolute inset-0 size-full"
                role="img"
                aria-label={
                  showData ? format(t.mapLabelData, { count: networkCities.length }) : t.mapLabel
                }
              >
                {dots.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r={0.28} fill="#d4d4d4" />
                ))}
                {showData && pins.map((p, i) => (
                  <g key={p.name}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={0.55}
                      fill="#e5533d"
                      className="map-ping"
                      style={{ animationDelay: `${((i * 7) % 12) * 0.23}s` }}
                    />
                    <circle cx={p.x} cy={p.y} r={0.55} fill="#e5533d" />
                  </g>
                ))}
              </svg>

              {/* Hover targets and labels, positioned over the SVG. */}
              {showData && pins.map((p) => (
                <div
                  key={p.name}
                  className="group absolute size-5 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${(p.x / width) * 100}%`, top: `${(p.y / height) * 100}%` }}
                >
                  <span
                    className={cn(
                      "pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 rounded-[5px] px-2 py-1 text-xs font-medium tracking-[-0.01em] whitespace-nowrap transition-opacity",
                      p.label
                        ? "bg-white text-ink shadow-[0_1px_3px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group-hover:bg-ink group-hover:text-white"
                        : "bg-ink text-white opacity-0 group-hover:opacity-100"
                    )}
                  >
                    {p.name}
                    <span className="hidden group-hover:inline"> · {p.facilities} {t.facilities}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <dl className="order-first grid divide-y divide-hairline border-b border-hairline lg:order-none lg:grid-rows-4 lg:border-b-0">
            {showData ? rows.map((row) => (
              <div key={row.label} className="flex items-center gap-5 px-5 py-8 sm:px-9">
                <Image
                  src={`/icons/${row.icon}.svg`}
                  alt=""
                  width={48}
                  height={48}
                  className="-m-1 size-12 shrink-0"
                />
                <div className="flex flex-col-reverse">
                  <dt className="mt-1.5 text-[15px] tracking-[-0.01em] text-body">{row.label}</dt>
                  <dd className="text-[40px] leading-none font-semibold tracking-[-0.045em] text-ink tabular-nums">
                    <CountUp value={row.value} />
                  </dd>
                </div>
              </div>
            )) : facts.map((fact) => (
              <div key={fact.title} className="flex items-center gap-5 px-5 py-8 sm:px-9">
                <Image
                  src={`/icons/${fact.icon}.svg`}
                  alt=""
                  width={48}
                  height={48}
                  className="-m-1 size-12 shrink-0"
                />
                <div>
                  <dt className="text-lg leading-7 font-semibold tracking-[-0.02em] text-ink">{fact.title}</dt>
                  <dd className="mt-0.5 text-[15px] leading-6 tracking-[-0.005em] text-body">{fact.text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Frame>
      <Divider />
    </section>
  );
}
