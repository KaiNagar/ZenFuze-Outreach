import { CallBook } from "../cmps/CallBook"
import { Hero } from "../cmps/Hero"

export const Home = () => {
    return (
        <section className="home-page">
            <Hero />
            <CallBook />
        </section>
    )
}