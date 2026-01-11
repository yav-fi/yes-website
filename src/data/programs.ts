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
    actions?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" }[];
  }[];
};

export const programs: Program[] = [
  {
    slug: "high-school-fellowship",
    name: "YES High School Fellowship",
    oneLiner: "Begin your entrepreneurial journey today!",
    description:
      "An 8-week program designed to give aspiring high school entrepreneurs the tools, mindset, and community to build a startup idea from scratch (or level up one they already have).",
    cardCtaLabel: "Apply",
    ctas: [
      {
        label: "Apply",
        href: "https://forms.gle/VSN1KPsPi5Gzben88",
        variant: "primary",
      },
      {
        label: "Alternate application",
        href: "https://forms.gle/QRuvaxxPZGRmRkJL8",
        variant: "secondary",
      },
    ],
    sections: [
      {
        title: "About the Fellowship",
        body:
          "You will learn directly from Yale School of Management guest speakers, Yale undergraduate entrepreneurs, and experienced mentors while collaborating with ambitious students from around the world.",
      },
      {
        title: "Are you a high school student?",
        body: "Become a YES High School Fellow.",
        actions: [
          {
            label: "Apply",
            href: "https://forms.gle/VSN1KPsPi5Gzben88",
            variant: "primary",
          },
          {
            label: "Alternate application",
            href: "https://forms.gle/QRuvaxxPZGRmRkJL8",
            variant: "secondary",
          },
        ],
      },
      {
        title: "What you'll gain",
        items: [
          "Learn from Yale School of Management professors and Yale undergraduate entrepreneurs",
          "Understand the skills and mindset needed to succeed in startups",
          "Build and present a full startup pitch deck",
          "Learn about the Yale Entrepreneurial Society and entrepreneurship culture at Yale",
          "Join a network of like-minded high school and college innovators globally",
        ],
      },
      {
        title: "Program dates",
        body: "All sessions begin at 11:00 A.M. EST.",
        items: [
          "February 7, 2026",
          "February 14, 2026",
          "February 21, 2026",
          "February 28, 2026",
          "March 7, 2026 (Masterclass)",
          "March 14, 2026 (Masterclass)",
          "March 28, 2026",
          "April 11, 2026 (Pitch Day / Finals)",
        ],
      },
      {
        title: "Pitch Day",
        body: "Pitch your idea to a panel of:",
        items: [
          "Yale School of Management entrepreneurship experts",
          "Serial entrepreneurs",
          "Startup operators and mentors",
        ],
      },
      {
        title: "Who you are",
        items: [
          "A motivated high school student excited about entrepreneurship",
          "A problem solver who loves thinking outside the box",
          "A team player ready to collaborate and grow alongside others",
        ],
      },
      {
        title: "Cost",
        items: [
          "Full program cost for one 8-week session: $400",
          "YES offers need-based financial aid that can cover the full cost for domestic and international students",
        ],
      },
      {
        title: "Apply",
        body: "Applications for the Spring 2026 cohort are now open!",
        actions: [
          {
            label: "Apply",
            href: "https://forms.gle/VSN1KPsPi5Gzben88",
            variant: "primary",
          },
          {
            label: "Alternate application",
            href: "https://forms.gle/QRuvaxxPZGRmRkJL8",
            variant: "secondary",
          },
        ],
      },
      {
        title: "Are you a Yale student?",
        body: "Join the YES HS Fellowship Operations Team.",
      },
      {
        title: "What you'll do",
        items: [
          "Help develop a fun, engaging curriculum",
          "Teach a session (or lead a cohort of 10-15 fellows)",
          "Get priority access to other YES events and opportunities",
        ],
      },
      {
        title: "Who you are (Yale team)",
        items: [
          "A Yale student with an interest in startups (experience helpful, not required)",
          "A leader excited to help younger students begin building",
          "Fun, social, and wants to be part of YES's community",
        ],
      },
      {
        title: "Apply to join the HS Fellowship Team",
        body: "Applications to join the HS Fellowship Team for Spring 2026 are open.",
        actions: [
          {
            label: "Apply to the operations team",
            href: "https://forms.gle/UauNG18MQ3u387WVA",
            variant: "primary",
          },
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
          { label: "Leia.Ryan@yale.edu", href: "mailto:Leia.Ryan@yale.edu" },
          { label: "Jasmine.Garry@yale.edu", href: "mailto:Jasmine.Garry@yale.edu" },
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
        links: [{ label: "Leia.Ryan@yale.edu", href: "mailto:Leia.Ryan@yale.edu" }],
      },
    ],
  },
];
