import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Wrench } from "lucide-react";
// import SectionHeading from "@/components/ui/SectionHeading";
// import TeamGrid from "@/components/sections/team/TeamGrid";
// import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Yale Entrepreneurial Society student team building Yale's entrepreneurship community.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <Wrench className="h-6 w-6 text-white/80" aria-hidden />
          </div>
          <div className="text-2xl font-semibold">We're still building this page.</div>
        </div>
        {/*
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
        */}
      </Container>
    </section>
  );
}
