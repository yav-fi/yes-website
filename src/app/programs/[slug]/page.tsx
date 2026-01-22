import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { programs } from "@/data/programs";
import ProgramDetail from "@/components/sections/programs/ProgramDetail";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) {
    return {
      title: "Program",
    };
  }

  return {
    title: program.name,
    description: program.oneLiner || program.description,
    alternates: {
      canonical: `/programs/${program.slug}`,
    },
    openGraph: {
      title: program.name,
      description: program.oneLiner || program.description,
      url: absoluteUrl(`/programs/${program.slug}`),
      type: "article",
    },
  };
}

export default async function ProgramLaunchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return notFound();

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: program.name,
    description: program.description,
    provider: {
      "@type": "Organization",
      name: "Yale Entrepreneurial Society",
      url: absoluteUrl("/"),
    },
    url: absoluteUrl(`/programs/${program.slug}`),
  };

  return (
    <section className="py-16">
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
        />
        <ProgramDetail program={program} />
      </Container>
    </section>
  );
}
