import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nurturing from '@/components/Nurturing'
import WhoWeAre from '@/components/WhoWeAre' 


export default function HomePage() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Nurturing/>
      <WhoWeAre/>
      <Footer/>
    </main>
  )
}

//failed to deploy - Whats the erro   one sec----> checking logs
//same old error------>failed to compile, cannot resolve "@/components/footer"
//and all other elements in @/components directory

//may have a solution-------------
//Delete the package-lock.json

//commit

//done👍