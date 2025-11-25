export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Yale Entrepreneurial Society</div>
          <div className="mt-2 text-sm text-white/70">
            Built by students. Powered by builders.
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Social</div>
          <div className="mt-3 flex gap-3">
            {/* Replace with real links */}
            <a className="text-white/70 hover:text-white" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-white/70 hover:text-white" href="#" target="_blank" rel="noreferrer">Instagram</a>
            <a className="text-white/70 hover:text-white" href="#" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Newsletter</div>
          <div className="mt-3 flex gap-2">
            <input
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none focus:border-signal-cyan/60"
              placeholder="you@yale.edu"
            />
            <button className="rounded-lg border border-signal-cyan/40 bg-signal-cyan/10 px-3 py-2 text-sm font-semibold hover:bg-signal-cyan/20">
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}