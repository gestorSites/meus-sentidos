import { useEffect } from "react"
import { especialidades } from "../data/especialidades"
import Reveal from "../components/Reveal"

export default function EspecialidadesPage() {

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
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-20">
      <h1 className="text-4xl font-bold text-center text-[#1177E3] mt-10 lg:mt-0">
        Especialidades
      </h1>
      {Object.entries(especialidades).map(([slug, especialidade], index) => {

        const imagemDireita = index % 2 === 0

        return (

          <section
            key={slug}
            id={slug}
            className="scroll-mt-20 grid md:grid-cols-2 gap-12 items-center"
          >

            {/* TEXTO */}
            <div className={`min-w-0 ${imagemDireita ? "" : "md:order-2"}`}>

              <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  {especialidade.titulo}
                </h2>
              </Reveal>

              {especialidade.subtitulo && (
                <Reveal delay={0.2}>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                    {especialidade.subtitulo}
                  </h3>
                </Reveal>
              )}

              <p className="text-gray-700 leading-relaxed mb-6">
                {especialidade.descricao}
              </p>

              {especialidade.beneficios && (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {especialidade.beneficios.map((beneficio, i) => (
                    <li key={i}>{beneficio}</li>
                  ))}
                </ul>
              )}

            </div>

            {/* IMAGENS */}
            <div className={`grid ${imagemDireita ? "" : "md:order-1"}`}>
              {especialidade.imagens.map((img, i) => (
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

      <div className="w-full flex justify-center">
        <a
          href="https://wa.me/5516992832613"
          target="_blank"
          className="justify-center mx-auto uppercase items-center gap-3 mt-8 px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Fale com nossa equipe
        </a>
      </div>

    </div>
  )
}