import { CallBook } from '../cmps/CallBook'
import { Hero } from '../cmps/Hero'
// import { OurOffer } from '../cmps/OurOffer'
import { OurPhilosophy } from '../cmps/OurPhilosophy'
import { QandA } from '../cmps/QandA'
import { SocialMediaMarketing } from '../cmps/SocialMediaMarketing'
// import { TheTeam } from '../cmps/TheTeam'
import { WhatWeOffer } from '../cmps/WhatWeOffer'
import { WhyChooseUs } from '../cmps/WhyChooseUs'

export const Home = () => {
  return (
    <main className='home-page'>
      <Hero />
      <OurPhilosophy />
      <WhatWeOffer />
      <SocialMediaMarketing />
      {/* <OurOffer /> */}
      {/* <OurProjects /> */}
      <WhyChooseUs />
      <QandA />
      {/* <TheTeam /> */}
      <CallBook />
    </main>
  )
}
