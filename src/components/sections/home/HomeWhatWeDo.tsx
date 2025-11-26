import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const pillars = [
  { title: "Launch", desc: "Turn a vague idea into a crisp problem and a real plan." },
  { title: "Build", desc: "Ship MVPs fast. Weekly demos. Tight feedback loops." },
  { title: "Scale", desc: "Mentorship, alumni, and operator-grade guidance." },
  { title: "Community", desc: "Find collaborators who don’t just talk — they execute." },
];

export default function HomeWhatWeDo() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="From idea → MVP → momentum."
            desc="YES creates the environment where builders meet, ship, and level up together."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <Card>
                <div className="text-xl font-semibold">{p.title}</div>
                <p className="mt-2 text-white/70">{p.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
