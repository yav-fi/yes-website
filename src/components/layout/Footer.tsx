import Container from "@/components/ui/Container";
import SocialDock from "@/components/ui/SocialDock";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold tracking-tight">
            Yale Entrepreneurial Society
          </div>
          <p className="mt-2 text-sm text-white/70">
            Built by students. Powered by builders.
          </p>
          <p className="mt-4 text-xs text-white/45">
            © {new Date().getFullYear()} YES
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Social</div>
          <div className="mt-3">
            <SocialDock />
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Newsletter</div>
          <p className="mt-2 text-sm text-white/70">
            One email a week. Zero fluff.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none focus:border-signal-cyan/60"
              placeholder="you@yale.edu"
            />
            <button className="rounded-lg border border-signal-cyan/40 bg-signal-cyan/10 px-3 py-2 text-sm font-semibold hover:bg-signal-cyan/20">
              Join
            </button>
          </div>
          <p className="mt-2 text-xs text-white/45">
            (Hook this to Typeform/Supabase later.)
          </p>
        </div>
      </Container>
    </footer>
  );
}