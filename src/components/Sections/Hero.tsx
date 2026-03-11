import clinicImg from "../../assets/clinic.jpg"
import Reveal from "../Reveal"


import banner1 from "../../assets/banner.png"
import HeroCarousel from "./HeroCarousel"

const banners = [
  { src: banner1, alt: "Clínica Meus Sentidos" },
  { src: banner1, alt: "Atendimento infantil especializado" },
  { src: banner1, alt: "Equipe multidisciplinar" },
]

export default function Hero() {
  return (
    <>
      <section id="home" className="bg-blue-50 pb-20">
        <HeroCarousel images={banners} />
        <div className="max-w-6xl mx-auto px-6 pt-10 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <Reveal>
              <h1 className="text-xl md:text-2xl font-bold text-[#1177E3] leading-tight">
                Cuidado especializado para crianças e adolescentes com TEA
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-gray-700">
                A Clínica Meus Sentidos oferece atendimento humanizado,
                individualizado e baseado em evidências.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <a
                href="https://wa.me/5516992832613"
                target="_blank"
                className="inline-flex uppercase items-center gap-3 mt-8 px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Falar com nossa equipe agora
              </a>
            </Reveal>
          </div>

          <div className="hidden md:block">
            <img
              src={clinicImg}
              alt="Clínica Meus Sentidos"
              loading="lazy"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>
    </>
  )
}
