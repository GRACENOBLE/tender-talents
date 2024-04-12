import React from "react";
import Container from "./Container";
import GaleryThumbnail from "./GaleryCard";
import GaleryCard from "./GaleryCard";

export default function GaleryGrid() {
  return (
    <section className="pt-20">
      <Container>
        <div className="w-full px-24">
          <div className="flex  flex-wrap grid-cols-3 gap-5 mx-auto">
            {Array.from({ length: 20 }).map((_, index) => (
              <GaleryCard />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
