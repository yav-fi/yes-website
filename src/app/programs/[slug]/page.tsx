import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";
import Reveal from "@/components/ui/Reveal";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramLaunchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return notFound();

  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Chip tone="blue">{program.stage}</Chip>
              <Chip>{program.duration}</Chip>
              <Chip>Intensity {program.intensity}/3</Chip>
            </div>

            <Button href="/join" variant="primary">
              Apply / Interest
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 space-y-4">
          <Reveal>
            <SectionHeading
              eyebrow="Program"
              title={program.name}
              desc={program.description}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="text-white/70">{program.oneLiner}</div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">Who it’s for</div>
              <ul className="mt-3 space-y-2 text-white/70">
                {program.tags.map((t) => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">Outcomes</div>
              <ul className="mt-3 space-y-2 text-white/70">
                {program.outcomes.map((o) => (
                  <li key={o}>• {o}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">FAQ</div>
            <div className="mt-4 space-y-4">
              {program.faq.map((f) => (
                <div key={f.q}>
                  <div className="font-semibold">{f.q}</div>
                  <div className="mt-1 text-white/70">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex gap-3">
            <Button href="/programs" variant="secondary">
              Back to programs
            </Button>
            <Button href="/join" variant="primary">
              Join / Apply
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
