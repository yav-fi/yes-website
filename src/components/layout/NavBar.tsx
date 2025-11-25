import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-lg font-semibold tracking-wide">YES</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link className="text-white/80 hover:text-white" href="/programs">Programs</Link>
          <Link className="text-white/80 hover:text-white" href="/events">Events</Link>
          <Link className="text-white/80 hover:text-white" href="/about">About</Link>
          <Link className="text-white/80 hover:text-white" href="/team">Team</Link>
          <Link className="text-white/80 hover:text-white" href="/partners">Partners</Link>
        </nav>

        <Link
          href="/join"
          className="rounded-full border border-electric-blue/40 bg-electric-blue/10 px-4 py-2 text-sm font-semibold hover:bg-electric-blue/20"
        >
          Join
        </Link>
      </div>
    </header>
  );
}