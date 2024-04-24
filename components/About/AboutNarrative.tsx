import React from "react";
import Container from "../Container";
import MissionCard from "../MissionCard";

export default function AboutNarrative() {
  return (
    <section className=" bbg-tt-cream/10 py-10">
      <Container>
        <div className=" flex justify-center items-center gap-2">
          <MissionCard
            title="Mission"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis veniam doloremque quam pariatur eaque illum dolore."
          />
          <MissionCard
            title="Vision"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis veniam doloremque quam pariatur eaque illum dolore."
          />
          <MissionCard
            title="Objectives"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis veniam doloremque quam pariatur eaque illum dolore."
          />
        </div>
      </Container>
    </section>
  );
}
