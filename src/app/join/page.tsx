import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function JoinPage() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Join"
            title="Get involved."
            desc="Choose your path: founder, builder, operator, or curious explorer."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Students",
              copy: "Join programs, build nights, and meet collaborators.",
              button: { label: "Interest form ↗", variant: "primary" as const },
            },
            {
              title: "Founders",
              copy: "Apply to Launch, get mentorship, and demo what you ship.",
              button: { label: "Apply ↗", variant: "secondary" as const },
            },
            {
              title: "Partners",
              copy: "Sponsor events, meet talent, and support outcomes.",
              button: { label: "Partner ↗", variant: "secondary" as const },
            },
          ].map((block, i) => (
            <Reveal key={block.title} delay={0.04 * i}>
              <Card>
                <div className="text-xl font-semibold">{block.title}</div>
                <p className="mt-2 text-white/70">{block.copy}</p>
                <div className="mt-5">
                  <Button href="#" variant={block.button.variant}>
                    {block.button.label}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
