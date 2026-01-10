import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { programs } from "@/data/programs";
import ProgramDetail from "@/components/sections/programs/ProgramDetail";

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
        <ProgramDetail program={program} />
      </Container>
    </section>
  );
}
