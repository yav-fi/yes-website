export type TeamMember = {
  name: string;
  role: string;
  group: "Exec" | "Programs" | "Events" | "Tech" | "Finance" | "Community";
  bio: string;
  image?: string; // <-- add
  links?: { label: string; href: string }[];
};


export const team: TeamMember[] = [
  {
    name: "First Last",
    role: "President",
    group: "Exec",
    bio: "Building community and accelerating founders across Yale.",
    links: [{ label: "LinkedIn", href: "https://linkedin.com/" }],
  },
  {
    name: "First Last",
    role: "Head of Tech",
    group: "Tech",
    bio: "Designing and shipping the YES web experience.",
  },
  {
    name: "First Last",
    role: "Programs Lead",
    group: "Programs",
    bio: "Making programs that turn ideas into products.",
  },
  {
    name: "First Last",
    role: "Events Lead",
    group: "Events",
    bio: "Founder dinners, showcases, and speaker series.",
  },
];