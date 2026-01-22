import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Yale Entrepreneurial Society (YES) and our mission to build Yale's entrepreneurship community.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <Wrench className="h-6 w-6 text-white/80" aria-hidden />
          </div>
          <div className="text-2xl font-semibold">We're still building this page.</div>
        </div>
      </Container>
    </section>
  );
}
