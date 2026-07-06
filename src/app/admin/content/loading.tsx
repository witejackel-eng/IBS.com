export default function ContentLoading() {
  return (
    <div className="flex flex-col gap-6" aria-busy="true" aria-live="polite">
      <div className="h-6 w-32 animate-pulse rounded bg-secondary" />
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="h-4 w-24 animate-pulse rounded bg-secondary" />
          <div className="h-10 w-full animate-pulse rounded bg-secondary/60" />
          <div className="h-24 w-full animate-pulse rounded bg-secondary/60" />
        </div>
      ))}
    </div>
  );
}
