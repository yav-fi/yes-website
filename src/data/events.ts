export type EventItem = {
  title: string;
  date: string; // ISO
  location: string;
  tag: "Talk" | "Workshop" | "Social" | "Office Hours" | "Showcase";
  desc: string;
};

export const events: EventItem[] = [
  {
    title: "Founder Dinner",
    date: "2025-12-03T19:00:00-05:00",
    location: "New Haven (TBA)",
    tag: "Social",
    desc: "Meet builders, founders, and operators. Low-key, high-signal.",
  },
  {
    title: "VC Office Hours",
    date: "2025-12-06T14:00:00-05:00",
    location: "Tsai City (TBA)",
    tag: "Office Hours",
    desc: "Get fast feedback on your pitch, market, and product strategy.",
  },
  {
    title: "Build Night Showcase",
    date: "2025-12-10T20:00:00-05:00",
    location: "CEID (TBA)",
    tag: "Showcase",
    desc: "Weekly demos. Ship something, show it, level up.",
  },
];