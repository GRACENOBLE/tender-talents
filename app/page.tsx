import Container from "@/components/Container";

import Hero from "@/components/Hero";
import MissionCard from "@/components/MissionCard";

import Partners from "@/components/Partners";

import WhoWeAre from "@/components/WhoWeAre";
import LegacySection from "@/components/LegacySection";
import GalleryGrid from "@/components/GalleryGrid";
import Narrative from "@/components/Narrative";

export default function HomePage() {
  

  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Narrative />
      <LegacySection />
      <Partners />
      <GalleryGrid/>
    </main>
  );
}
