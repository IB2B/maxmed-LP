export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="grid size-7 place-items-center rounded-md bg-ink text-white">
        <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
          <path d="M6 1h4v5h5v4h-5v5H6v-5H1V6h5z" fill="currentColor" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.03em] text-ink">
        MaxMed
      </span>
    </span>
  );
}
