"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/partners", label: "Partners" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
  className,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "relative text-sm font-semibold tracking-wide transition",
        "text-white/75 hover:text-signal-cyan",
        "hover:[text-shadow:0_0_18px_rgba(56,232,255,0.55)]",
        active ? "text-white" : "",
        className ?? "",
      ].join(" ")}
    >
      {label}
      <span
        className={[
          "pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full rounded-full transition",
          active ? "bg-signal-cyan/70" : "bg-transparent",
        ].join(" ")}
      />
    </Link>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/yes-logo.png"
            alt="Yale Entrepreneurial Society"
            width={54}
            height={54}
            className="opacity-95"
            priority
          />
          <div className="leading-tight min-w-0">
  <div className="text-[13px] font-semibold truncate sm:text-sm">
    Yale Entrepreneurial Society
  </div>
  <div className="hidden text-xs text-white/55 -mt-0.5 sm:block">
    Building since 1999
  </div>
</div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              active={pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/join"
            className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition border border-signal-cyan/40 bg-signal-cyan/10 hover:bg-signal-cyan/20"
          >
            Join
          </Link>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex h-full flex-col"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-6 py-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/brand/yes-logo.png"
                    alt="YES"
                    width={44}
                    height={44}
                    className="opacity-95"
                  />
                  <div className="text-sm font-semibold">Yale Entrepreneurial Society</div>
                </div>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center px-6 pb-12">
                <div className="flex w-full max-w-sm flex-1 flex-col items-center justify-evenly text-center text-3xl font-semibold">
                  {links.map((l) => (
                    <NavLink
                      key={l.href}
                      href={l.href}
                      label={l.label}
                      active={pathname === l.href || pathname.startsWith(l.href)}
                      onClick={() => setOpen(false)}
                      className="w-full text-3xl tracking-normal text-center"
                    />
                  ))}

                  <Link
                    href="/join"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-lg font-semibold transition border border-signal-cyan/40 bg-signal-cyan/10 hover:bg-signal-cyan/20"
                  >
                    Join
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
