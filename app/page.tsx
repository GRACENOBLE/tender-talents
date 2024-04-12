import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nurturing from "@/components/Nurturing";
import Partners from "@/components/Partners";
import StudentGrowth from "@/components/StudentGrowth";
import WhoWeAre from "@/components/WhoWeAre";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Nurturing />
      <WhoWeAre />
      <Partners/>
      <StudentGrowth/>
    </main>
  );
}
