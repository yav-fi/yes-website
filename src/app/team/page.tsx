import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamGrid from "@/components/sections/team/TeamGrid";

export default function TeamPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="Students who ship."
          desc="The people building the environment for founders and builders at Yale."
        />
        <TeamGrid />
      </Container>
    </section>
  );
}