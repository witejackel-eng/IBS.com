/** Shared "big number + label" trust-stat treatment, reused anywhere a real, sourced figure is shown (hero, about). */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-charcoal font-heading">{value}</p>
      <p className="mt-1 text-sm text-steel">{label}</p>
    </div>
  );
}
