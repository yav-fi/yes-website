import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamGrid from "@/components/sections/team/TeamGrid";
import Reveal from "@/components/ui/Reveal";

export default function TeamPage() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Team"
            title="Students who ship."
            desc="The people building the environment for founders and builders at Yale."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <TeamGrid />
        </Reveal>
      </Container>
    </section>
  );
}
