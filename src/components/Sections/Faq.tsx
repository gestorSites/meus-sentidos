import Accordion from "../Accordion"
import atendimento from "../../assets/atendimentoInf.jpg"

export default function FAQ() {
  const faqs = [
    {
      title: "O que é o TEA?",
      content:
        "O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento que afeta a comunicação, o comportamento e a interação social.",
    },
    {
      title: "Quais serviços a clínica oferece?",
      content:
        "Oferecemos atendimento especializado com equipe multidisciplinar, incluindo ABA, fonoaudiologia, terapia ocupacional e psicologia.",
    },
    {
      title: "Como funciona o primeiro atendimento?",
      content:
        "O primeiro atendimento é uma avaliação inicial para entender as necessidades da criança e orientar a família.",
    },
  ]

  return (
    <section id="faq" className="bg-white py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1177E3] mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Reunimos algumas das dúvidas mais comuns para ajudar você a entender
            melhor nossos atendimentos e como podemos apoiar sua família.
          </p>
        </div>

        {/* CONTEÚDO COM IMAGEM + FAQ */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* IMAGEM */}
          <div className="flex justify-center">
            <img
              src={atendimento} // coloque sua imagem na pasta public
              alt="Atendimento infantil"
              className="rounded-3xl shadow-lg object-cover w-full max-w-md"
            />
          </div>

          {/* ACCORDION */}
          <div className="space-y-4">
            {faqs.map((item) => (
              <Accordion key={item.title} title={item.title}>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </Accordion>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}