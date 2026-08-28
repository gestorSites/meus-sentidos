import Accordion from "../Accordion"
import atendimento from "../../assets/faq.webp"
import Reveal from "../Reveal"

export default function FAQ() {
  const faqs = [
    {
      title: "Como funciona a primeira reunião?",
      content:
        `A primeira etapa consiste em uma escuta acolhedora junto à família, com o objetivo de compreender a história do paciente, suas queixas e necessidades. Nesse momento inicial, também apresentamos a estrutura da clínica e o funcionamento da equipe multiprofissional. A partir dessa avaliação inicial, definimos, de forma individualizada, o melhor percurso a ser seguido, incluindo a quantidade de sessões necessárias para o processo avaliativo.`,
    },
    {
      title: "Os atendimentos são individualizados?",
      content:
        `Sim. Cada paciente é único, por isso os planos terapêuticos são personalizados de acordo com suas necessidades, respeitando seu tempo, suas potencialidades e desafios.
Nossos profissionais trabalham de forma integrada, ajustando as estratégias sempre que necessário, para garantir um acompanhamento efetivo, acolhedor e alinhado com a evolução de cada paciente e sua família.`,
    },
    {
      title: "Como faço para agendar um atendimento?",
      content:
        `Você pode entrar em contato pelo WhatsApp ou telefone da clínica. Nossa equipe está preparada para te acolher, entender sua necessidade e orientar em todo o processo de agendamento.
Nosso horário de atendimento é de segunda a sexta-feira, das 07h às 17h45, e teremos prazer em encontrar o melhor horário para você e sua família.`,
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
              loading="lazy"
              src={atendimento} // coloque sua imagem na pasta public
              alt="Atendimento infantil"
              className="rounded-3xl shadow-lg object-cover w-full max-w-md"
            />
          </div>

          {/* ACCORDION */}
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <Accordion key={item.title} title={item.title}>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {item.content}
                  </p>
                </Accordion>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}