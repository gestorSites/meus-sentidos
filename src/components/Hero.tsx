export default function Hero() {
  return (
    <section id="home" className="bg-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Cuidado especializado para crianças e adolescentes com TEA
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            A Clínica Meus Sentidos oferece atendimento humanizado, individualizado
            e baseado em evidências.
          </p>

          <a
            href="https://wa.me/55XXXXXXXXX"
            target="_blank"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="hidden md:block">
          {/* imagem ilustrativa ou foto da clínica */}
          <img
            src="/hero-clinica.jpg"
            alt="Clínica Meus Sentidos"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}
