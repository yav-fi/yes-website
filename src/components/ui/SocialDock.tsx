import { socials } from "@/data/site";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  instagram: <Instagram size={18} />,
  linkedin: <Linkedin size={18} />,
  x: <Twitter size={18} />,
};

export default function SocialDock() {
  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-3">
        {socials.map((s) => (
          <a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <span className="text-white/70 group-hover:text-white">
              {iconMap[s.key] ?? "↗"}
            </span>
            <span className="hidden sm:inline">{s.label}</span>
            <span className="text-white/40">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}