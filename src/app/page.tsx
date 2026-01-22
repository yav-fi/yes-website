import type { Metadata } from "next";
import HomeGate from "@/components/sections/home/HomeGate";

export const metadata: Metadata = {
  title: "Yale Entrepreneurial Society (YES)",
  description:
    "Yale Entrepreneurial Society (YES) is the student entrepreneurship hub at Yale University, connecting builders, founders, and innovators through programs, events, and community.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeGate />;
}
