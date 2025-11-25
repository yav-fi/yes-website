import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { partners } from "@/data/partners";

export default function PartnersPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Partners"
          title="Partner with Yale’s builders."
          desc="Sponsor programs, recruit exceptional talent, and support founder outcomes."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-xl font-semibold">Recruit</div>
            <p className="mt-2 text-white/70">
              Get in front of builders who can ship, iterate, and execute.
            </p>
          </Card>
          <Card>
            <div className="text-xl font-semibold">Sponsor</div>
            <p className="mt-2 text-white/70">
              Support events and programs that create real student outcomes.
            </p>
          </Card>
          <Card>
            <div className="text-xl font-semibold">Mentor</div>
            <p className="mt-2 text-white/70">
              Office hours and talks that give students operator-grade guidance.
            </p>
          </Card>
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="Supporters" title="Current partners" />
          <div className="grid gap-4 md:grid-cols-2">
            {partners.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="mt-2 text-white/70">{p.blurb}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Button href="/join" variant="secondary">
            Contact / Sponsor (placeholder)
          </Button>
        </div>
      </Container>
    </section>
  );
}