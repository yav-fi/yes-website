import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join the Yale Entrepreneurial Society (YES) community and stay connected with Yale founders and builders.",
  alternates: {
    canonical: "/join",
  },
};

export default function JoinPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex min-h-[45vh] items-center justify-center text-center">
          <p className="text-xl text-white/80">
            General applications to YES are closed at this time.
          </p>
        </div>
      </Container>
    </section>
  );
}
