export default function LeadsLoading() {
  return (
    <div className="flex flex-col gap-4" aria-busy="true" aria-live="polite">
      <div className="h-6 w-40 animate-pulse rounded bg-secondary" />
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="h-10 w-full animate-pulse bg-secondary/60" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 w-full border-t border-border p-4">
            <div className="h-4 w-1/3 animate-pulse rounded bg-secondary" />
          </div>
        ))}
      </div>
    </div>
  );
}
