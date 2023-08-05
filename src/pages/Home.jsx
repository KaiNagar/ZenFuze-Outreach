import { CallBook } from "../cmps/CallBook"
import { Hero } from "../cmps/Hero"
import { OurOffer } from "../cmps/OurOffer"

export const Home = () => {
    return (
        <section className="home-page">
            <Hero />
            <OurOffer />
            <CallBook />
        </section>
    )
}