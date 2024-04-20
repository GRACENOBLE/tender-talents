import Container from "@/components/Container";
import FlexContainer from "@/components/FlexContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionCard from "@/components/MissionCard";
import Nurturing from "@/components/LegacySection";
import Partners from "@/components/Partners";
import SharingJourney from "@/components/SharingJourney";
import StudentGrowth from "@/components/StudentGrowth";
import WhoWeAre from "@/components/WhoWeAre";
import LegacySection from "@/components/LegacySection";
import GalleryGrid from "@/components/GalleryGrid";

export default function HomePage() {

  const photoCollection = [
    {
      image: 1,
      caption: "string",
    },
    {
      image: 2,
      caption: "string",
    },
    {
      image: 3,
      caption: "string",
    },
    {
      image: 4,
      caption: "string",
    },
    {
      image: 5,
      caption: "string",
    },
    {
      image: 6,
      caption: "string",
    },
    {
      image: 7,
      caption: "string",
    },
    {
      image: 8,
      caption: "string",
    },
    {
      image: 9,
      caption: "string",
    },
    {
      image: 10,
      caption: "string",
    },
    {
      image: 11,
      caption: "string",
    },
    {
      image: 12,
      caption: "string",
    }
  ];


  return (
    <main>
      <Hero />
      <WhoWeAre />

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

    <LegacySection/>

      <Partners />
      <GalleryGrid photo_collection={photoCollection}/>
      {/* <StudentGrowth />
      <SharingJourney /> */}
    </main>
  );
}
