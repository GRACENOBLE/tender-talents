
import React from "react";

import FlexContainer from "./FlexContainer";

export default function LegacySection() {
  return (
    <section className="bg-tt-cream/40">
      <FlexContainer
        title={"A Legacy of Success"}
        text={
          "Over the years, we've not only nurtured artistic talents, but also fostered academic excellence. Our alumni consistently achieve outstanding results, going on to pursue their dreams in a variety of fields."
        }
        dir={true}
        image={"/Images/home-images/students.webp"}
        text2={""}
        btntext="Join Us Today"
        path="/apply"
      />
    </section>
  );
}
