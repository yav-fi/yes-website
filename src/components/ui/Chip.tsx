import { clsx } from "clsx";

export default function Chip({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "blue" | "cyan";
}) {
  const map = {
    neutral: "border-white/15 bg-white/5 text-white/75",
    blue: "border-electric-blue/30 bg-electric-blue/10 text-white/85",
    cyan: "border-signal-cyan/30 bg-signal-cyan/10 text-white/90",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        map[tone]
      )}
    >
      {children}
    </span>
  );
}