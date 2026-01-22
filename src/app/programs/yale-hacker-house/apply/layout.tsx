import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yale Hacker House Application",
  description:
    "Apply for the Yale Entrepreneurial Society Hacker House summer program in San Francisco.",
  alternates: {
    canonical: "/programs/yale-hacker-house/apply",
  },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
