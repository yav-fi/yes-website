import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";
import { events } from "@/data/events";

function formatLong(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function EventsPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Events"
          title="Momentum, weekly."
          desc="Talks, workshops, founder dinners, and showcases — designed to keep the culture high-signal."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {events.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between gap-2">
                <Chip tone="cyan">{e.tag}</Chip>
                <div className="text-xs text-white/60">{formatLong(e.date)}</div>
              </div>
              <div className="mt-3 text-xl font-semibold">{e.title}</div>
              <div className="mt-1 text-sm text-white/70">{e.location}</div>
              <p className="mt-3 text-white/70">{e.desc}</p>

              <div className="mt-5 text-sm font-semibold text-white/80">
                RSVP (coming soon) <span className="text-white/40">↗</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}