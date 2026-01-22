const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://yesyale.org");

export const siteConfig = {
  name: "Yale Entrepreneurial Society",
  shortName: "YES",
  description:
    "Yale Entrepreneurial Society (YES) is the student entrepreneurship hub at Yale University, connecting builders, founders, and innovators through programs, events, and community.",
  url: siteUrl,
  ogImage: "/brand/yes-logo.png",
  keywords: [
    "Yale Entrepreneurial Society",
    "YES Yale",
    "YES at Yale",
    "Yale entrepreneurship",
    "Yale startups",
    "Yale founders",
    "Yale innovation",
    "Tsai CITY",
    "Yale entrepreneurial society",
    "student entrepreneurship",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
