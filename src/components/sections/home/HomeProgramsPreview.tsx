import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export default function HomeProgramsPreview() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Programs"
            title="Pick your lane. Then floor it."
            desc="Fellowships, dinners, and a hacker house built for Yale founders."
          />
        </Reveal>

        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {programs.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="text-lg font-semibold">{p.name}</div>
                <p className="mt-3 text-white/70">{p.oneLiner}</p>
                <div className="mt-5 text-sm font-semibold text-white/80">
                  {p.cardCtaLabel ?? "Learn more"}{" "}
                  <span className="text-white/40 group-hover:text-white/70 transition">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="mt-8">
          <Button href="/programs" variant="secondary">
            View all programs
          </Button>
        </div>
      </Container>
    </section>
  );
}
