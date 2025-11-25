import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition";
  const styles: Record<Variant, string> = {
    primary:
      "border border-signal-cyan/40 bg-signal-cyan/10 hover:bg-signal-cyan/20",
    secondary:
      "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10",
    ghost: "text-white/80 hover:text-white hover:bg-white/5",
  };

  return (
    <Link href={href} className={clsx(base, styles[variant], className)}>
      {children}
    </Link>
  );
}