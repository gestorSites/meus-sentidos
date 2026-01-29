import Accordion from "./Accordion"

export function FAQ() {
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
    <section id="faq" className="bg-gray-50 py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((item) => (
            <Accordion key={item.title} title={item.title}>
              <p>{item.content}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
