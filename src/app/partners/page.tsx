import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { partners } from "@/data/partners";
import Reveal from "@/components/ui/Reveal";

export default function PartnersPage() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Partners"
            title="Partner with Yale’s builders."
            desc="Sponsor programs, recruit exceptional talent, and support founder outcomes."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Recruit",
              desc: "Get in front of builders who can ship, iterate, and execute.",
            },
            {
              title: "Sponsor",
              desc: "Support events and programs that create real student outcomes.",
            },
            {
              title: "Mentor",
              desc: "Office hours and talks that give students operator-grade guidance.",
            },
          ].map((block, i) => (
            <Reveal key={block.title} delay={0.04 * i}>
              <Card>
                <div className="text-xl font-semibold">{block.title}</div>
                <p className="mt-2 text-white/70">{block.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <Reveal>
            <SectionHeading eyebrow="Supporters" title="Current partners" />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {partners.map((p, i) => (
              <Reveal key={p.id} delay={0.03 * i}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="mt-2 text-white/70">{p.blurb}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.06}>
          <div className="mt-10">
            <Button href="/join" variant="secondary">
              Contact / Sponsor (placeholder)
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
