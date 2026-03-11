import { Link } from "react-router-dom"
import {
  Brain,
  MessageCircle,
  Sparkles,
  Activity,
  Dumbbell,
  Waves,
  Music,
  Zap,
} from "lucide-react"
import Reveal from "../Reveal"

const specialties = [
  { title: "Psicologia", slug: "psicologia", icon: Brain },
  { title: "ABA – Análise do Comportamento Aplicada", slug: "aba", icon: Activity },
  { title: "Acompanhamento Terapêutico (AT)", slug: "acompanhamento-terapeutico", icon: Zap },
  { title: "Fonoaudiologia", slug: "fonoaudiologia", icon: MessageCircle },
  { title: "Laserterapia", slug: "laserterapia", icon: Sparkles },
  { title: "Neuromodulação", slug: "neuromodulacao", icon: Zap },
  { title: "Neuropsicopedagogia", slug: "neuropsicopedagogia", icon: Brain },
  { title: "Reforço Escolar", slug: "reforco-escolar", icon: Brain },
  { title: "Terapia Ocupacional", slug: "terapia-ocupacional", icon: Activity },
  { title: "Integração Sensorial de Ayres", slug: "integracao-sensorial", icon: Activity },
  { title: "Fisioterapia", slug: "fisioterapia", icon: Activity },
  { title: "Pilates", slug: "pilates", icon: Dumbbell },
  { title: "Terapia Aquática", slug: "terapia-aquatica", icon: Waves },
  { title: "Educação Física", slug: "educacao-fisica", icon: Dumbbell },
  { title: "Musculação", slug: "musculacao", icon: Dumbbell },
  { title: "Musicoterapia", slug: "musicoterapia", icon: Music },
]

export default function Services() {
  return (
    <section id="especialidades" className="bg-blue-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#1177E3] mb-16">
          Especialidades
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map(({ title, slug, icon: Icon }, index) => (
            <Reveal key={slug} delay={index * 0.03}>
              <Link
                key={slug}
                to={`/especialidades/${slug}`}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 text-[#1177E3] flex items-center justify-center mb-4">
                  <Icon size={26} />
                </div>

                <h3 className="text-sm font-semibold text-gray-800">
                  {title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}