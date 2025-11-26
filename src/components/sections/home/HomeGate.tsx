"use client";

import LoadGate from "@/components/ui/LoadGate";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeWhatWeDo from "@/components/sections/home/HomeWhatWeDo";
import HomeProgramsPreview from "@/components/sections/home/HomeProgramsPreview";
import HomeFounderStories from "@/components/sections/home/HomeFounderStories";
import HomeSplit from "@/components/sections/home/HomeSplit";

export default function HomeGate() {
  return (
    <LoadGate minMs={1400} onceKey="home-load">
      {(play) => (
        <>
          <HomeHero play={play} />
          <HomeWhatWeDo />
          <HomeProgramsPreview />
          <HomeFounderStories />
          <HomeSplit />
        </>
      )}
    </LoadGate>
  );
}
