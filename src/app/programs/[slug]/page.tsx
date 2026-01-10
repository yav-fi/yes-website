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
              {program.badge && <Chip tone="blue">{program.badge}</Chip>}
            </div>

            {program.ctas && program.ctas.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {program.ctas.map((cta, index) => (
                  <Button
                    key={cta.label}
                    href={cta.href}
                    variant={cta.variant ?? (index === 0 ? "primary" : "secondary")}
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
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
          {program.sections?.map((section, index) => (
            <Reveal key={section.title} delay={0.04 * index}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-lg font-semibold">{section.title}</div>
                {section.body && (
                  <p className="mt-3 text-white/70">{section.body}</p>
                )}
                {section.items && (
                  <ul className="mt-3 space-y-2 text-white/70">
                    {section.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
                {section.links && (
                  <ul className="mt-3 space-y-2 text-white/70">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.href ? (
                          <a
                            href={link.href}
                            className="underline decoration-white/30 underline-offset-4 transition hover:text-white"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <span>{link.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/programs" variant="secondary">
              Back to programs
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
