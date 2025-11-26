import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramsGrid from "@/components/sections/programs/ProgramsGrid";
import Reveal from "@/components/ui/Reveal";

export default function ProgramsPage() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Programs"
            title="Programs for every kind of builder."
            desc="Explore, build, and scale with real cadence and real people."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ProgramsGrid />
        </Reveal>
      </Container>
    </section>
  );
}
