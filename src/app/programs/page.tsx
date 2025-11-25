import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramsGrid from "@/components/sections/programs/ProgramsGrid";

export default function ProgramsPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="Programs for every kind of builder."
          desc="Explore, build, and scale with real cadence and real people."
        />
        <ProgramsGrid />
      </Container>
    </section>
  );
}