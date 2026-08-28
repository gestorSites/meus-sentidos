import { useEffect } from "react"
import { empresas } from "../data/empresas"
import Reveal from "../components/Reveal"
import { CheckCircle } from "lucide-react"

export default function EmpresasPage() {
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
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:py-24 space-y-24">

      <div className="text-center">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1177E3]">
            Empresas
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Soluções especializadas em saúde e desenvolvimento humano para organizações
            que valorizam o bem-estar dos seus colaboradores.
          </p>
        </Reveal>
      </div>

      {Object.entries(empresas).map(([slug, servico], index) => {
        const textoEsquerda = index % 2 === 0

        return (
          <section
            key={slug}
            id={slug}
            className="scroll-mt-32"
          >
            <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-start ${servico.subcategorias ? "" : ""}`}>

              <div className={textoEsquerda ? "" : "md:order-2"}>
                <Reveal>
                  <h2 className="inline-block bg-[#1177E3] text-white px-4 py-2 rounded-lg text-lg sm:text-xl md:text-2xl font-semibold mb-6">
                    {servico.titulo}
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    {servico.descricao}
                  </p>
                </Reveal>

                {servico.etapas && (
                  <Reveal delay={0.15}>
                    <p className="font-semibold text-gray-800 mb-3">
                      Etapas que compõem esse processo de análise:
                    </p>
                    <ul className="space-y-2">
                      {servico.etapas.map((etapa, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle size={18} className="text-[#1177E3] mt-0.5 shrink-0" />
                          {etapa}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                {servico.beneficiarios && (
                  <Reveal delay={0.15}>
                    <p className="font-semibold text-[#1177E3] mb-3 mt-2">
                      {servico.beneficiarios.titulo}
                    </p>
                    <ul className="space-y-2">
                      {servico.beneficiarios.itens.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle size={18} className="text-[#1177E3] mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}

              </div>

              <div className={textoEsquerda ? "" : "md:order-1"}>
                {servico.imagem ? (
                  <Reveal>
                    <img
                      src={servico.imagem}
                      alt={servico.titulo}
                      loading="lazy"
                      className="rounded-2xl object-cover w-full aspect-[3/2] shadow-sm transition-all duration-300 hover:scale-105"
                      style={{ objectPosition: servico.foco }}
                    />
                  </Reveal>
                ) : (
                  <div className="rounded-2xl bg-blue-50 p-10 flex items-center justify-center min-h-48">
                    <p className="text-blue-300 text-sm italic text-center">
                      Imagem a ser adicionada
                    </p>
                  </div>
                )}
              </div>
            </div>

            {servico.subcategorias && (
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {servico.subcategorias.map((sub, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                      <h3 className="inline-block bg-[#1177E3] text-white px-3 py-1 rounded-lg text-sm font-semibold mb-3">
                        {sub.titulo}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed text-justify">
                        {sub.descricao}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </section>
        )
      })}

      <div className="w-full flex justify-center">
        <a
          href="https://wa.me/5516992832613"
          target="_blank"
          className="uppercase items-center gap-3 px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Fale com nossa equipe
        </a>
      </div>

    </div>
  )
}
