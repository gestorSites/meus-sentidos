import ContactForm from "../ContactForm"

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="py-24 bg-blue-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="text-3xl font-semibold text-[#1177E3] mb-4">
              Entre em contato
            </h2>

            <p className="text-gray-600 mb-6">
              Estamos prontos para acolher você e sua família.
              Fale conosco para tirar dúvidas ou agendar uma avaliação.
            </p>

            <div className="space-y-3 text-gray-700">
              <p><strong>📍 Endereço:</strong> Rua Exemplo, 123 – Franca/SP</p>
              <p><strong>📞 Telefone:</strong> (16) 99999-9999</p>
              <p><strong>🕒 Horário:</strong> Seg a Sex – 08h às 18h</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
