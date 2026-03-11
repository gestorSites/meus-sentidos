import { useParams } from "react-router-dom"
import { especialidades, type EspecialidadeSlug } from "../data/especialidades"
import Reveal from "../components/Reveal"


export default function EspecialidadePage() {

  const { slug } = useParams<{ slug: EspecialidadeSlug }>()

  const especialidade = slug ? especialidades[slug] : undefined

  if (!especialidade) {
    return <div className="p-10 text-center">Especialidade não encontrada</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

      {/* SEÇÃO 1 */}

      <section className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {especialidade.titulo}
          </h1>

          {especialidade.subtitulo && (
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              {especialidade.subtitulo}
            </h2>
          )}

          <p className="text-gray-700 leading-relaxed">
            {especialidade.descricao}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {especialidade.imagens.map((img, i) => (
            <Reveal key={slug} delay={i * 0.06}>
              <img
                key={i}
                src={img}
                loading="lazy"
                className="rounded-xl object-cover h-40 w-full"
              />
            </Reveal>
          ))}
        </div>

      </section>

      {/* SEÇÃO 2 */}

      {especialidade.beneficios && (
        <section>
          <h2 className="text-3xl font-bold mb-6">
            {especialidade.beneficiosTitulo || "Benefícios"}
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {especialidade.beneficios.map((beneficio, i) => (
              <li key={i}>{beneficio}</li>
            ))}
          </ul>
        </section>
      )}

    </div>
  )
}