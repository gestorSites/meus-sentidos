import { useEffect } from "react"
import { avaliacoes } from "../data/avaliacoes"
import Reveal from "../components/Reveal"

export default function AvaliacoesPage() {

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")

    if (hash) {
      const el = document.getElementById(hash)

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:py-24 space-y-20">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1177E3]">
        Avaliações
      </h1>

      {Object.entries(avaliacoes).map(([slug, avaliacao], index) => {

        const imagemDireita = index % 2 === 0

        return (
          <section
            key={slug}
            id={slug}
            className="scroll-mt-32 grid md:grid-cols-2 gap-10 md:gap-12 items-center"
          >

            {/* TEXTO */}
            <div className={`min-w-0 ${imagemDireita ? "" : "md:order-2"}`}>

              <Reveal>
                <h2 className="inline-block bg-[#1177E3] text-white px-4 py-2 rounded-lg text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                  {avaliacao.titulo}
                </h2>
              </Reveal>

              <p className="text-gray-700 leading-relaxed">
                {avaliacao.descricao}
              </p>

            </div>

            {/* IMAGENS */}
            <div className={`grid ${imagemDireita ? "" : "md:order-1"}`}>
              {avaliacao.imagens.map((img, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <img
                    src={img}
                    loading="lazy"
                    className="rounded-xl object-cover w-full transition-all duration-300 hover:scale-105"
                  />
                </Reveal>
              ))}
            </div>

          </section>
        )
      })}

    </div>
  )
}