import clsx from "clsx";

export default function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "blue" | "cyan";
  className?: string;
}) {
  const ring =
    tone === "cyan"
      ? "from-signal-cyan/50 via-white/10 to-electric-blue/40"
      : tone === "blue"
      ? "from-electric-blue/45 via-white/10 to-yale-blue/45"
      : "from-white/20 via-white/10 to-white/15";

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full p-[1px] bg-gradient-to-br",
        ring,
        className
      )}
    >
      <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
        {children}
      </span>
    </span>
  );
}
