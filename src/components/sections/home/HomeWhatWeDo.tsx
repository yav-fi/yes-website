import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const pillars = [
  {
    title: "Launch",
    desc: "Turn a vague idea into a crisp problem and a real plan.",
  },
  {
    title: "Build",
    desc: "Ship MVPs fast. Weekly demos. Tight feedback loops.",
  },
  {
    title: "Scale",
    desc: "Mentorship, alumni, and operator-grade guidance.",
  },
  {
    title: "Community",
    desc: "Find collaborators who don’t just talk — they execute.",
  },
];

export default function HomeWhatWeDo() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="From idea → MVP → momentum."
          desc="YES creates the environment where builders meet, ship, and level up together."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <Card key={p.title} className="hover:border-white/20 transition">
              <div className="text-xl font-semibold">{p.title}</div>
              <p className="mt-2 text-white/70">{p.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}