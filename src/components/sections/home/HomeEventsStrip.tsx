import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";
import { events } from "@/data/events";

function formatShort(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

export default function HomeEventsStrip() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Momentum"
          title="This month at YES"
          desc="Active, real, and happening now."
        />

        <div className="flex gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
          {events.map((e) => (
            <a
              key={e.title}
              href="/events"
              className="min-w-[280px] rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between gap-2">
                <Chip tone="cyan">{e.tag}</Chip>
                <div className="text-xs text-white/60">{formatShort(e.date)}</div>
              </div>
              <div className="mt-3 text-lg font-semibold">{e.title}</div>
              <div className="mt-1 text-sm text-white/70">{e.location}</div>
              <p className="mt-3 text-sm text-white/70">{e.desc}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}