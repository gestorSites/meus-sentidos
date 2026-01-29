import About from "../components/About";
import { CTA } from "../components/Cta";
import { FAQ } from "../components/Faq";
import { Highlights } from "../components/Highlights";
import { Services } from "../components/Services";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-16">

                <Hero />
                <About />
                <Services />
                <Highlights />
                <FAQ />
                <CTA />
            </main>
        </>
    )
}
