export type Program = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  cardCtaLabel?: string;
  ctas?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" }[];
  sections?: {
    title: string;
    body?: string;
    items?: string[];
    links?: { label: string; href?: string }[];
  }[];
};

export const programs: Program[] = [
  {
    slug: "high-school-fellowship",
    name: "High School Fellowship",
    oneLiner: "A fellowship for ambitious high school founders. Details coming soon.",
    description: "Program description coming soon.",
    cardCtaLabel: "Learn more",
    sections: [
      {
        title: "Applications",
        links: [
          { label: "Application (coming soon)" },
          { label: "Become an ambassador (coming soon)" },
        ],
      },
    ],
  },
  {
    slug: "signal-dinner-series",
    name: "Signal Dinner Series",
    oneLiner:
      "Off-record dinners connecting Yale's highest-momentum builders with leading founders.",
    description:
      "Signal is an off-record dinner series that brings together Yale's highest-momentum student builders with leading founders, investors, and operators in a candid setting. For builders, it offers first-hand context from the people shaping technology and the chance to ask the questions that directly inform what they're building. For guests, it is an opportunity to guide builders who are just a few steps behind where they were, while forming early relationships with the next generation of category-defining founders.",
    cardCtaLabel: "Learn more",
    ctas: [
      {
        label: "Apply to attend",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdWD6LRvrTga_ZsK_Wb0qdosIY72gAOa807nmC61w4kiUTXNQ/viewform?usp=header",
        variant: "primary",
      },
      {
        label: "View calendar",
        href: "https://luma.com/calendar/cal-KBJ4GfUNku5BJ53",
        variant: "secondary",
      },
      {
        label: "Signal website",
        href: "https://signal.community/",
        variant: "secondary",
      },
    ],
    sections: [
      {
        title: "Past attendees",
        items: [
          "Cory Levy (Z Fellows)",
          "Harris Stolzenberg (Pear VC)",
          "Kathryn Guarini (IBM)",
          "Ranjit Bindera (Cybrexa)",
          "David Brillembourg (Dune VC)",
          "Ann Muira-Ko (Floodgate)",
          "Arthur Horwich",
          "Bary Nalebuff (Honest Tea Founder)",
          "Tom Lee (Galileo)",
          "Nick Chirls (Asylum VC)",
          "George Yancopoulos (Regeneron Founder)",
          "David Lucchino (Frequency Therapeutics)",
          "Seth Goldman (Honest Tea Founder)",
          "Miles Lasater (Founder of Yale Entrepreneurial Society)",
        ],
      },
      {
        title: "Contact",
        body: "Do you think you would be a cool guest? Contact us:",
        links: [
          { label: "Leia.ryan@yale.edu", href: "mailto:Leia.ryan@yale.edu" },
          { label: "Jasmine.garry@yale.edu", href: "mailto:Jasmine.garry@yale.edu" },
          { label: "Soleil.Wizman@yale.edu", href: "mailto:Soleil.Wizman@yale.edu" },
        ],
      },
    ],
  },
  {
    slug: "yale-hacker-house",
    name: "Yale's First Hacker House - Summer 2026",
    oneLiner: "A 10-week, live-in SF house for 12 Yale technical founders.",
    description:
      "This Summer 2026, YES is creating Yale's First Hacker House in SF - a 10-week, live-in environment for 12 of Yale's top technical student founders to build seriously, learn from world-class operators, and plug directly into the SF ecosystem. This is just the beginning. Join us.",
    cardCtaLabel: "Apply",
    ctas: [
      {
        label: "Apply",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSeNNhvuHI3ALUosGiLUh0cWQQMVC_z9pcvINWT9yIKb41kDoA/viewform?usp=header",
        variant: "primary",
      },
    ],
    sections: [
      {
        title: "How it works",
        body:
          "Rather than enforcing a rigid curriculum, we're designing the house around the founders we select. The house will combine intense building with the opportunity to gain real context: intimate dinners, technical deep-dives, and targeted mentor sessions - all designed to inform what founders are building and how they build it.",
      },
      {
        title: "Why it matters",
        body:
          "For founders, the house provides the space to develop and pressure-test ideas before taking the leap to build full-time. For our partners, it offers early access to founders as they transition from early teams into ventures that we hope will define the next wave of technology.",
      },
      {
        title: "Partner inquiries",
        body: "Interested in becoming a partner? Contact us:",
        links: [{ label: "Leia.ryan@yale.edu", href: "mailto:Leia.ryan@yale.edu" }],
      },
    ],
  },
];
