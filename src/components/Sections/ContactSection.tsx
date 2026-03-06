import ContactForm from "../ContactForm"

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-red-50">
      <h2 className="text-3xl font-bold text-center text-[#1177E3] mb-12">
        Contato
      </h2>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">

          {/* LADO ESQUERDO (ROXO) */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-12 text-white flex items-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <h2 className="text-3xl font-semibold mb-6 leading-snug">
                Dê o primeiro passo para a evolução da sua criança
              </h2>

              <p className="text-white/90 mb-4">
                Preencha o formulário para agendar uma conversa inicial sem compromisso.
              </p>

              <p className="text-white/80 text-sm leading-relaxed">
                Vamos entender suas necessidades e mostrar como a Meus Sentidos
                pode fazer a diferença no futuro da sua família.
              </p>
            </div>
          </div>

          {/* LADO DIREITO (FORMULÁRIO) */}
          <div className="bg-gray-50 p-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Vamos começar
            </h3>

            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}