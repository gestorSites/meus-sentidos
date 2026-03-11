import { useParams } from "react-router-dom"
import { profissionais } from "../data/profissionais"
import Reveal from "../components/Reveal"
import NavigateButton from "../components/NavigateButton"
import { useEffect } from "react"

export default function ProfissionalPage() {

  const { slug } = useParams()

  const profissional =
    slug ? profissionais[slug as keyof typeof profissionais] : undefined

  if (!profissional) {
    return <div className="p-10 text-center">Profissional não encontrado</div>
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <div className="pt-24">
      <NavigateButton />
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">


          <Reveal>
            <img
              src={profissional.foto}
              alt={profissional.nome}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </Reveal>

          {/* TEXTO */}

          <div>

            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold mb-2">
                {profissional.nome}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-xl text-gray-600 mb-6">
                {profissional.cargo}
              </h2>
            </Reveal>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {profissional.curriculo.map((item, i) => (
                <Reveal key={i} delay={0.3 + i * 0.05}>
                  <li className="list-disc list-inside">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </div>
  )
}