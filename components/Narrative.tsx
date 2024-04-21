import React from 'react'
import Container from './Container';
import MissionCard from './MissionCard';

export default function Narrative() {
  return (
    <section className="py-8 md:py-16 bg-tt-cream/10">
      <Container>
        <div className="grid grid-cols-3 gap-8">
          <MissionCard
            title={"Mission"}
            text={
              "To Raise Individuals to their Full Potential through Functional Participatory Education of Learners with an Interactive Approach"
            }
          />
          <MissionCard
            title={"vision"}
            text={
              "To see Ugandan young people develop into self-reliant individuals"
            }
          />
          <MissionCard
            title={"Discipline"}
            text={
              "Our students uphold discipline so as to become fruitful and responsible citizens. Above all, self-confidence is built in our students"
            }
          />
        </div>
      </Container>
    </section>
  );
}
