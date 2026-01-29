const services = [
  "Análise do Comportamento Aplicada (ABA)",
  "Terapia Ocupacional",
  "Fonoaudiologia",
  "Psicologia",
  "Acompanhamento individualizado",
]

export function Services() {
  return (
    <section id="servicos" className="bg-gray-50 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Nossos Serviços
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
