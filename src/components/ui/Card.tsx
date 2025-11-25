import { clsx } from "clsx";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative rounded-2xl border border-white/10 bg-white/5 p-6",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-blue/10 via-transparent to-signal-cyan/10 opacity-60" />
      <div className="relative">{children}</div>
    </div>
  );
}