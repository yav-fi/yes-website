import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/events",
    "/join",
    "/partners",
    "/programs",
    "/team",
    "/programs/yale-hacker-house/apply",
  ];

  const programRoutes = programs.map((program) => `/programs/${program.slug}`);
  const urls = [...staticRoutes, ...programRoutes];
  const lastModified = new Date();

  return urls.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
  }));
}
