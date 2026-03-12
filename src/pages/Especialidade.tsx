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
    <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">
      <h1 className="text-4xl font-bold text-center text-[#1177E3]">
        Especialidades
      </h1>
      {Object.entries(especialidades).map(([slug, especialidade], index) => {

        const imagemDireita = index % 2 === 0

        return (

          <section
            key={slug}
            id={slug}
            className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center"
          >

            {/* TEXTO */}
            <div className={imagemDireita ? "" : "md:order-2"}>

              <Reveal>
                <h2 className="text-4xl font-bold mb-4">
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
            <div className={`grid grid-cols-2 gap-4 ${imagemDireita ? "" : "md:order-1"}`}>
              {especialidade.imagens.map((img, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <img
                    src={img}
                    loading="lazy"
                    className="rounded-xl object-cover h-44 w-full transition-all duration-300 hover:scale-105"
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