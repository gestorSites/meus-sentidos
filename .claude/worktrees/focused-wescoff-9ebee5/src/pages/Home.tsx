import Header from "../components/Header";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Services from "../components/Sections/Services";
import FAQ from "../components/Sections/Faq";
import TeamCarousel from "../components/Sections/TeamCarousel";
import ContactSection from "../components/Sections/ContactSection";

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-16">
                <Hero />
                <About />
                <TeamCarousel />
                <Services />
                <FAQ />
                <ContactSection />
            </main>
        </>
    )
}
