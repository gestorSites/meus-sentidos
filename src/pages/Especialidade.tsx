import { useParams } from "react-router-dom"
import { especialidades } from "../data/especialidades"


export default function EspecialidadePage() {

  const { slug } = useParams()

  const especialidade =
    slug ? especialidades[slug as keyof typeof especialidades] : null

  if (!especialidade) {
    return <div className="p-10 text-center">Especialidade não encontrada</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      {/* SEÇÃO 1 */}

      <section className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {especialidade.titulo}
          </h1>

          <h2 className="text-xl text-gray-600 mb-6">
            {especialidade.subtitulo}
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {especialidade.descricao}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {especialidade.imagens.map((img, i) => (
            <img
              key={i}
              src={img}
              loading="lazy"
              className="rounded-xl object-cover h-40 w-full"
            />
          ))}
        </div>

      </section>

      {/* SEÇÃO 2 */}

      <section>

        <h3 className="text-3xl font-semibold mb-6">
          {especialidade.beneficiosTitulo}
        </h3>

        <ul className="space-y-3 list-disc list-inside text-gray-700">
          {especialidade.beneficios.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

      </section>

    </div>
  )
}