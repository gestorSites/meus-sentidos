import {
  Briefcase,
  ClipboardList,
  Presentation,
  Accessibility,
  Ruler,
} from "lucide-react"

const services = [
  {
    title: "Análise Ergonômica",
    icon: Ruler,
  },
  {
    title: "Assessoria em Ergonomia",
    icon: Briefcase,
  },
  {
    title: "Projetos / Planos de Ação",
    icon: ClipboardList,
  },
  {
    title: "Palestras e Treinamentos",
    icon: Presentation,
  },
  {
    title: "Inclusão da Pessoa com Deficiência",
    icon: Accessibility,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-red-50 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1177E3] mb-12">
          Nossos Serviços
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="
                bg-white p-6 rounded-xl shadow
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
                flex items-center gap-4
              "
            >
              {/* ÍCONE */}
              <div
                className="
                  flex items-center justify-center
                  w-12 h-12 rounded-full
                  bg-blue-100 text-blue-700
                  shrink-0
                "
              >
                <Icon size={22} />
              </div>

              {/* TEXTO */}
              <p className="font-medium text-gray-800 leading-snug">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
