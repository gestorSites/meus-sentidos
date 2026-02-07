import { Target, Eye, Heart } from "lucide-react"

const items = [
  {
    title: "Missão",
    description:
      "Promover saúde, bem-estar e inclusão por meio de práticas ergonômicas e atendimentos humanizados.",
    icon: Target,
  },
  {
    title: "Visão",
    description:
      "Ser referência em ergonomia e inclusão, reconhecida pela excelência técnica e cuidado com as pessoas.",
    icon: Eye,
  },
  {
    title: "Valores",
    description:
      "Ética, empatia, respeito à diversidade, responsabilidade social e compromisso com resultados.",
    icon: Heart,
  },
]

export default function MissionVisionValues() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1177E3] mb-12">
          Missão, Visão e Valores
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="
                p-6 rounded-xl border
                shadow-sm hover:shadow-md
                transition bg-gray-50
              "
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
                <Icon size={22} />
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
