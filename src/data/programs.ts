export type Program = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  intensity: 1 | 2 | 3;
  stage: "Explore" | "Build" | "Scale";
  duration: string;
  tags: string[];
  outcomes: string[];
  timeline: { label: string; detail: string }[];
  faq: { q: string; a: string }[];
};

export const programs: Program[] = [
  {
    slug: "launch",
    name: "YES Launch",
    oneLiner: "A fast, founder-first sprint from idea to MVP.",
    description:
      "A structured program designed to help you validate an idea, build an MVP, and get real user feedback quickly.",
    intensity: 3,
    stage: "Build",
    duration: "6 weeks",
    tags: ["Beginner-friendly", "Team-based", "Mentorship", "Weekly demos"],
    outcomes: ["A shipped MVP", "User feedback loop", "Pitch-ready narrative"],
    timeline: [
      { label: "Week 1", detail: "Idea selection + problem interviews" },
      { label: "Week 2", detail: "MVP scope + prototype testing" },
      { label: "Week 3", detail: "Build sprint + first users" },
      { label: "Week 4", detail: "Iteration + distribution" },
      { label: "Week 5", detail: "Pitch + metrics" },
      { label: "Week 6", detail: "Demo night" },
    ],
    faq: [
      { q: "Do I need a team?", a: "Not required. We can help you find one." },
      {
        q: "Do I need to code?",
        a: "No — but technical builders get extra leverage.",
      },
    ],
  },
  {
    slug: "builders",
    name: "Builders Guild",
    oneLiner: "A crew for technical builders who ship every week.",
    description:
      "Weekly build nights, micro-sprints, and a community of people who actually execute.",
    intensity: 2,
    stage: "Build",
    duration: "Ongoing",
    tags: ["Technical", "Shipping cadence", "Peer feedback"],
    outcomes: ["Portfolio projects", "Collaborators", "Momentum"],
    timeline: [
      { label: "Weekly", detail: "Build night + demos" },
      { label: "Monthly", detail: "Mini-hack + showcase" },
    ],
    faq: [
      { q: "What if I’m new?", a: "We’ll pair you with builders at your level." },
    ],
  },
  {
    slug: "office-hours",
    name: "Mentor Office Hours",
    oneLiner: "Fast feedback from alumni and operators.",
    description:
      "Sign up for high-signal 20-minute sessions on product, growth, fundraising, and technical strategy.",
    intensity: 1,
    stage: "Scale",
    duration: "Rolling",
    tags: ["Alumni", "Operators", "Focused feedback"],
    outcomes: ["Decision clarity", "Warm intros (sometimes)", "Tighter strategy"],
    timeline: [{ label: "Rolling", detail: "Sign-ups open throughout the term" }],
    faq: [
      {
        q: "Who are the mentors?",
        a: "Alumni founders, VCs, and experienced operators.",
      },
    ],
  },
];