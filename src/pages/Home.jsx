import { CallBook } from '../cmps/CallBook'
import { Hero } from '../cmps/Hero'
import { OurOffer } from '../cmps/OurOffer'
import { TheTeam } from '../cmps/TheTeam'

export const Home = () => {
  return (
    <main className='home-page'>
      <Hero />
      {/* <TheTeam />  */}
      <OurOffer />
      <CallBook />
    </main>
  )
}
