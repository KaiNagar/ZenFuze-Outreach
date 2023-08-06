import { CallBook } from "../cmps/CallBook"
import { Hero } from "../cmps/Hero"
import { OurOffer } from "../cmps/OurOffer"

export const Home = () => {
    return (
        <main className="home-page">
            <Hero />
            <OurOffer />
            <CallBook />
        </main>
    )
}