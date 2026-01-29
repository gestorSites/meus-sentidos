import Header from "../components/Header";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import { Services } from "../components/Sections/Services";
import { Highlights } from "../components/Sections/Highlights";
import { FAQ } from "../components/Sections/Faq";
import { CTA } from "../components/Sections/Cta";

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
