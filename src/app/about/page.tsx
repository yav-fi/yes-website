import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const values = [
  { title: "Default to building", desc: "Shipping beats debating." },
  { title: "Pay it forward", desc: "Alumni help students. Students help students." },
  { title: "Operator-grade", desc: "Practical, real-world guidance." },
  { title: "High velocity", desc: "More reps. More feedback. More output." },
];

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="The Yale builder network."
            desc="YES exists to make it easier (and faster) for Yale students to build real things with real people."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm text-white/60">Members</div>
              <div className="mt-2 text-3xl font-semibold">450+</div>
              <div className="mt-2 text-white/70">Across founders, builders, operators.</div>
            </Card>
            <Card>
              <div className="text-sm text-white/60">Events / year</div>
              <div className="mt-2 text-3xl font-semibold">60+</div>
              <div className="mt-2 text-white/70">Talks, workshops, dinners, demos.</div>
            </Card>
            <Card>
              <div className="text-sm text-white/60">Outcome</div>
              <div className="mt-2 text-3xl font-semibold">Ship</div>
              <div className="mt-2 text-white/70">MVPs, teams, momentum.</div>
            </Card>
          </div>
        </Reveal>

        <div className="mt-12 space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Principles"
              title="How we operate"
              desc="A few rules that keep the culture sharp and the output real."
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.06 * i}>
                <Card className="hover:border-white/20 transition">
                  <div className="text-xl font-semibold">{v.title}</div>
                  <p className="mt-2 text-white/70">{v.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
