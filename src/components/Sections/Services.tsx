import {
  Brain,
  MessageCircle,
  Sparkles,
  Activity,
  Dumbbell,
} from "lucide-react"

const specialties = [
  {
    title: "Desenvolvimento e Comportamento",
    icon: Brain,
    items: ["Psicologia", "ABA", "Acompanhamento Terapêutico"],
  },
  {
    title: "Comunicação e Aprendizagem",
    icon: MessageCircle,
    items: ["Fonoaudiologia", "Neuropsicopedagogia", "Reforço Escolar"],
  },
  {
    title: "Terapias Integrativas",
    icon: Sparkles,
    items: [
      "Terapia Ocupacional",
      "Integração de Ayres",
      "Fisioterapia",
      "Pilates",
      "Terapia Aquática",
    ],
  },
  {
    title: "Recursos Terapêuticos",
    icon: Activity,
    items: ["Laserterapia", "Neuromodulação", "Musicoterapia"],
  },
  {
    title: "Movimento e Saúde",
    icon: Dumbbell,
    items: ["Educação Física", "Musculação"],
  },
]

export default function Services() {
  return (
    <section id="especialidades" className="bg-blue-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#1177E3] mb-16">
          Especialidades
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-[#1177E3] flex items-center justify-center text-center">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-center items-center">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="mt-1 w-1.5 h-1.5 bg-[#1177E3] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}