import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";
import { events } from "@/data/events";
import Reveal from "@/components/ui/Reveal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Yale Entrepreneurial Society events including talks, workshops, founder dinners, and showcases.",
  alternates: {
    canonical: "/events",
  },
};

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
  const eventSchema = {
    "@context": "https://schema.org",
    "@graph": events.map((event) => ({
      "@type": "Event",
      name: event.title,
      startDate: event.date,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: event.location,
      },
      description: event.desc,
      organizer: {
        "@type": "Organization",
        name: "Yale Entrepreneurial Society",
        url: absoluteUrl("/"),
      },
    })),
  };

  return (
    <section className="py-16">
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <Reveal>
          <SectionHeading
            eyebrow="Events"
            title="Momentum, weekly."
            desc="Talks, workshops, founder dinners, and showcases — designed to keep the culture high-signal."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={0.04 * i}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
