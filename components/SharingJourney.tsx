import React from "react";
import GaleryCard from "./GaleryCard";
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
            {Array.from({ length: 9 }).map((_, index) => (
              <GaleryCard />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
