/** Shared "big number + label" trust-stat treatment, reused anywhere a real, sourced figure is shown (hero, about). */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold text-charcoal font-heading sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs sm:text-sm text-steel">{label}</p>
    </div>
  );
}