import clsx from "clsx";

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
        "group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/10",
        "hover:from-signal-cyan/35 hover:via-white/10 hover:to-electric-blue/30 transition",
        className
      )}
    >
      <div className="relative rounded-2xl bg-white/[0.04] p-6 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-electric-blue/10 via-transparent to-signal-cyan/10" />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
