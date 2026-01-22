import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramsGrid from "@/components/sections/programs/ProgramsGrid";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Yale Entrepreneurial Society programs for founders, builders, and innovators at Yale University.",
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgramsPage() {
  return (
    <section className="py-16">
      <Container>
        <Reveal immediate>
          <SectionHeading
            eyebrow="Programs"
            title="Programs for every stage."
            desc=""
          />
        </Reveal>
        <Reveal immediate>
          <ProgramsGrid />
        </Reveal>
      </Container>
    </section>
  );
}
