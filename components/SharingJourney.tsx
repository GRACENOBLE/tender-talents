import React from "react";
import GaleryCard from "./GalleryCard";
import Container from "./Container";

export default function SharingJourney() {
  return (
    <section className="bg-tt-cream">
      <Container>
        <div className="flex justify-center text-[90px] uppercase font-bold text-tt-red">
          <h1>SHARING THE JOURNEY</h1>
        </div>

        <div className="w-full">
          <div className="flex  flex-wrap grid-cols-3 gap-5 w-full">
            <GaleryCard image={"/Images/baking.png"} />
            <GaleryCard image={"/Images/football.png"} />
            <GaleryCard image={"/Images/netball.png"} />
            <GaleryCard image={"/Images/students.png"} />
            <GaleryCard image={"/Images/solderingFocused.png"} />
            <GaleryCard image={"/Images/mask.png"} />
          </div>
        </div>
      </Container>
    </section>
  );
}
