const highlights = [
  "Equipe especializada em TEA",
  "Atendimento humanizado",
  "Planos terapêuticos individualizados",
  "Ambiente acolhedor e seguro",
]

export default function Highlights() {
  return (
    <section id="destaques" className="py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1177E3] mb-12">
          Por que escolher a Meus Sentidos?
        </h2>

        <ul className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-gray-700"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
