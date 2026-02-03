export type ProgramSection = {
  title: string;
  body?: string;
  items?: string[];
  links?: { label: string; href?: string }[];
  actions?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" }[];
  subsections?: ProgramSection[];
};

export type Program = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  cardCtaLabel?: string;
  ctas?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" }[];
  sections?: ProgramSection[];
};

export const programs: Program[] = [
  {
    slug: "high-school-fellowship",
    name: "YES High School Fellowship",
    oneLiner: "Begin your entrepreneurial journey today!",
    description:
      "An 8-week program designed to give aspiring high school entrepreneurs the tools, mindset, and community to build a startup idea from scratch (or level up one they already have). You'll learn directly from Yale School of Management guest speakers, Yale undergraduate entrepreneurs, and experienced mentors while collaborating with ambitious students from around the world.",
    cardCtaLabel: "Apply",
    ctas: [
      {
        label: "Application for high schoolers",
        href: "https://forms.gle/VSN1KPsPi5Gzben88",
        variant: "primary",
      },
      {
        label: "Application for financial aid",
        href: "https://forms.gle/QRuvaxxPZGRmRkJL8",
        variant: "secondary",
      },
      {
        label: "Application for Yale students",
        href: "https://forms.gle/UauNG18MQ3u387WVA",
        variant: "primary",
      },

    ],
    sections: [
      {
        title: "High school students",
        body: "Are you a high school student? Become a YES High School Fellow.",
        actions: [
          {
            label: "General Application",
            href: "https://forms.gle/VSN1KPsPi5Gzben88",
            variant: "primary",
          },
       {
        label: "Financial Aid",
        href: "https://forms.gle/QRuvaxxPZGRmRkJL8",
        variant: "secondary",
      },
        ],
        subsections: [
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
              "February 7 - April 11, 2026",
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
            title: "Cost",
            items: [
              "Full program cost for one 8-week session: $400",
              "YES offers need-based financial aid that can cover the full cost for domestic and international students",
            ],
          },
        ],
      },
      {
        title: "Yale students",
        body: "Are you a Yale student? Join the YES HS Fellowship Operations Team.",
        actions: [
          {
            label: "Yale Mentors Application",
            href: "https://forms.gle/UauNG18MQ3u387WVA",
            variant: "primary",
          },
        ],
        subsections: [
          {
            title: "What you'll do",
            items: [
              "Help develop an engaging curriculum to teach high school entrepreneurs",
              "Mentor a cohort of 10-15 high school fellows",
              "Gain leadership skills for your resume",
            ],
          },
        ],
      },
    ],
  },
    {
    slug: "launch-camp-yale",
    name: "LAUNCH",
    oneLiner:
      "Camp Yale First-Year Pre-orientation Program focused on impact and entrepreneurship",
    description:
      "LAUNCH is focused on helping incoming students make the biggest impact with their lives through entrepreneurship. At LAUNCH, you will hear from legendary founders, meet the alums and students who've built Yale's entrepreneurship community, and engage in collaborative workshops at Yale's Tsai CITY and entrepreneurial hubs around New Haven. But, this isn’t just entrepreneurship; during LAUNCH, you’ll find your peers on a day hike and beach trip, enjoy movie night at the Beinecke, and get to know campus through a late-night scavenger hunt.",
    sections: [
      {
        title: "For Pre-frosh",
        body:
          "What is Launch? Why launch? tldr: LAUNCH is focused on helping incoming students make the biggest impact with their lives through entrepreneurship. At LAUNCH, you will hear from legendary founders, meet the alums and students who've built Yale's entrepreneurship community, and engage in collaborative workshops at Yale's Tsai CITY and entrepreneurial hubs around New Haven. But, this isn’t just entrepreneurship; during LAUNCH, you’ll find your peers on a day hike and beach trip, enjoy movie night at the Beinecke, and get to know campus through a late-night scavenger hunt. LAUNCH is for everyone who wants to change the world – through arts, startups, non-profits, or social impact organizations. No prior entrepreneurial experience is required, only a desire to make a difference, grow and get involved with some of Yale’s coolest people. See you in August!",
      },
      {
        title: "For Student Leaders",
        body: "Helping to mold the next generation of yale entrepreneurs.",
        subsections: [
          {
            title: "What is LAUNCH?",
            body:
              "LAUNCH is a Camp Yale Program focused on helping incoming students develop the skills for successful innovation and entrepreneurship. Now, we're hiring student leaders to help run it! LAUNCH programming will include collaborative workshops, exciting alumni speakers, and bonding activities. Last year, LAUNCH featured Max Mullen of Instacart, Michael Seibel of Twitch and YCombinator, Anne Wojcicki of 23andMe, and many others! Students will explore all of the resources available to them at Yale, such as the Tsai Center for Innovative Thinking at Yale (Tsai CITY) and the Center for Engineering Innovation and Design (CEID). You'll help new first-year students discover ways in which they can be disruptive, change-making, and innovative, all while building a more inclusive entrepreneurial community.",
          },
          {
            title: "Responsibilities",
            items: [
              "Attend a few mandatory training sessions",
              "Guide first-years through LAUNCH curriculum",
              "Lead student bonding activities",
              "Share meals and attend exclusive speaker events",
              "Get students excited about entrepreneurship @ Yale!",
            ],
          },
          {
            title: "Compensation",
            body:
              "All student leaders will be paid a stipend and have room and board from the time they arrive for training until the residences open.",
          },
          {
            title: "Key Dates (Fall 2026)",
            items: [
              "August 22 (estimated): Move in",
"August 23: Leaders training excursion ",
"August 24: First-year move in",
"August 26-30: Orientation programs run",
            ],
          },
          {
            title: "Availability",
            body: "The availability all counselors must have hasn't been announced yet.",
          },
          {
            title: "Application deadline",
            body:
              "The application deadline is Feb 20th 2026 at 11:59 PM EST.",
          },
        ],
      },
    ],
  },
  {
    slug: "yale-inspire",
    name: "Yale INSPIRE",
    oneLiner: "Innovation Series Promoting Inspiration, Research, and Entrepreneurship",
    description:
      "Yale INSPIRE is a partnership between the Yale Entrepreneurial Society and the Tsai Center for Innovative Thinking at Yale, dedicated to hosting esteemed founders and entrepreneurially-minded speakers from diverse industries and backgrounds and fostering a culture of innovation on campus.",
    sections: [
      {
        title: "Featured speakers",
        items: [
          "Linda Rottenberg — Founder, Endeavor (April 2024)",
          "Joe Tsai — Founder, Alibaba",
          "Jenny Fleiss — Founder, Rent the Runway (February 2024)",
          "Kevin Ryan — Founder, DoubleClick, MongoDB, Business Insider",
          "Jason Chen — Partner, Contrary",
          "Mariam Naficy — Founder, Minted",
          "Gary Stewart — Managing Director, Techstars NYC",
          "Sara Du — Co-Founder & CEO, Alloy Automation",
          "Michael Redd — Co-Founder, 22 Ventures | NBA Player",
          "Max Mullen — Co-Founder, Instacart",
          "Anne Wojcicki — Founder, 23andMe",
          "Michael Seibel — Co-Founder, Twitch | Partner, YCombinator",
        ],
      },
      {
        title: "Previous guests",
        body:
          "Below are a few amazing founders, venture capitalists, and journalists who have previously offered advice, mentorship, and/or inspiration to yalies through speaking events, dinners, LAUNCH programming, and our podcast:",
        items: [
          "April Koh — Co-Founder & CEO, Spring Health",
          "Tom Lehman — Founder & CEO, Genius",
          "Rob Chesnut — General Counsel, Chief Ethics Officer, Airbnb",
          "Gina Yoo — Head of Ventures, Entrepreneur First",
          "Laila Maidan — Investing Correspondent, Business Insider",
          "Priyanka Srinivas — Founder & CEO, The Live Green Co",
          "Issam Freiha — Co-Founder & CEO, Blank Street Coffee",
          "Sander Daniels — Founder, Thumbtack",
          "Jenny Fleiss — Co-Founder, Rent the Runway",
          "Emmett Shear — Co-Founder, Twitch",
          "Shernaz Daver — CMO, Udacity | Operating Partner, Khosla Ventures",
          "Donna Dubinsky — CEO, Palm Inc | Co-Founder, Handspring",
          "Jonathan Greechan — Co-Founder & CEO, Founder Institute",
          "Mike Hoey — Founder, Source Meridian",
          "Kevin Tan — Founder, Snackpass",
          "Alexandra Levine — Senior Writer, Forbes Magazine",
          "Ann Miura-Ko — Co-Founder & Partner, Floodgate",
          "Domm Holland — Former CEO, Fast",
          "Samantha Stokes — VC & Startups Reporter, Business Insider",
          "Craig Corbett — Co-Founder & Partner, Publicize",
          "Dan Berger — Founder, Neon Coat",
        ],
      },
      {
        title: "Speaker inquiries",
        body: "Interested in speaking to yale entrepreneurs? email seth.goldin@yale.edu",
        links: [{ label: "seth.goldin@yale.edu", href: "mailto:seth.goldin@yale.edu" }],
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
        href: "/programs/yale-hacker-house/apply",
        variant: "primary",
      },
    ],
    sections: [
      {
        title: "Apply",
        body:
          "Ready to join Yale's first hacker house? Complete the on-site application to be considered for Summer 2026.",
        actions: [
          {
            label: "Start application",
            href: "/programs/yale-hacker-house/apply",
            variant: "primary",
          },
        ],
      },
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
