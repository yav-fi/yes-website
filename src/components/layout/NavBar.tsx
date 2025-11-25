import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/yes-logo.webp"
            alt="YES"
            width={34}
            height={34}
            className="opacity-90"
            priority
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">YES</div>
            <div className="text-xs text-white/60 -mt-0.5">Yale Builders</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-white/75 hover:text-white" href="/programs">
            Programs
          </Link>
          <Link className="text-white/75 hover:text-white" href="/events">
            Events
          </Link>
          <Link className="text-white/75 hover:text-white" href="/about">
            About
          </Link>
          <Link className="text-white/75 hover:text-white" href="/team">
            Team
          </Link>
          <Link className="text-white/75 hover:text-white" href="/partners">
            Partners
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/join" variant="primary">
            Join
          </Button>
        </div>
      </div>
    </header>
  );
}