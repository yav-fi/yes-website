import HomeHero from "@/components/sections/home/HomeHero";
import HomeWhatWeDo from "@/components/sections/home/HomeWhatWeDo";
import HomeProgramsPreview from "@/components/sections/home/HomeProgramsPreview";
import HomeEventsStrip from "@/components/sections/home/HomeEventsStrip";
import HomeFounderStories from "@/components/sections/home/HomeFounderStories";
import HomeSplit from "@/components/sections/home/HomeSplit";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWhatWeDo />
      <HomeProgramsPreview />
      <HomeEventsStrip />
      <HomeFounderStories />
      <HomeSplit />
    </>
  );
}