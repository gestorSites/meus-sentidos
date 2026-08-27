import clinicImg from "../../assets/FAIXADA-CLINICA.jpeg"
import Reveal from "../Reveal"


import banner1 from "../../assets/BANNER_1.webp"
import banner2 from "../../assets/BANNER_2.webp"
import HeroCarousel from "./HeroCarousel"

const banners = [
  {
    src: banner1,
    alt: "Criança sorrindo ao lado de fotos das salas da clínica, com o texto: Uma clínica completa para você e sua família — acompanhamento terapêutico individualizado para cada fase do desenvolvimento.",
  },
  {
    src: banner2,
    alt: "Fachada da Clínica Meus Sentidos, com a placa das especialidades, e o texto: Onde o desenvolvimento ganha forma e o cuidado faz sentido.",
  },
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
                Cuidado especializado para o desenvolvimento e bem-estar
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-gray-700">
                A Clínica Meus Sentidos oferece atendimento humanizado, individualizado e
                fundamentado em evidências científicas. Nosso cuidado é voltado para pessoas em
                diferentes fases da vida, considerando suas necessidades, particularidades e promovendo
                autonomia e qualidade de vida.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <a
                href="https://wa.me/5516992832613"
                target="_blank"
                className="inline-flex uppercase items-center gap-3 mt-8 px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Fale com nossa equipe
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
