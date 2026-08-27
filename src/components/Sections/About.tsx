import clinicImg1 from "../../assets/historia/his-1.webp"
import clinicImg2 from "../../assets/historia/his-2.webp"
import clinicImg3 from "../../assets/historia/his-3.webp"
import clinicImg4 from "../../assets/historia/his-4.webp"
import clinicImg5 from "../../assets/historia/his-5.webp"
import clinicImg6 from "../../assets/historia/his-6.webp"
import clinicImg7 from "../../assets/historia/his-7.webp"
import clinicImg8 from "../../assets/historia/his-8.webp"
import clinicImg9 from "../../assets/historia/his-9.webp"
import clinicImg10 from "../../assets/historia/his-10.webp"
import clinicImg11 from "../../assets/historia/his-11.webp"
import clinicImg12 from "../../assets/historia/his-12.webp"

import ImageCarousel from "../ImageCarousel"
export default function About() {
  const imgList = [
    { src: clinicImg1, alt: "Fachada da Clínica Meus Sentidos, com a placa da clínica e o jardim na entrada." },
    { src: clinicImg2, alt: "Recepção ampla e iluminada, com pé-direito alto, escada e poltronas de espera." },
    { src: clinicImg3, alt: "Sala de espera com poltronas de couro caramelo e divisória de vidro." },
    { src: clinicImg4, alt: "Sala de atividades com parede colorida, painel de comunicação alternativa e armários." },
    { src: clinicImg5, alt: "Sala de reunião com mesa de madeira, poltronas e quadros na parede." },
    { src: clinicImg6, alt: "Balanços da sala de Integração Sensorial: plataforma, balanço-barco, rede e pneu suspensos sobre o tatame azul.", foco: "50% 72%" },
    { src: clinicImg7, alt: "Sala de terapias com bolas suíças, espaldar e equipamentos de reabilitação." },
    { src: clinicImg8, alt: "Quadra externa de grama sintética vista do jardim, com palmeiras e canteiros floridos ao redor." },
    { src: clinicImg9, alt: "Área da piscina, com deck em pedra e cerca de proteção." },
    { src: clinicImg10, alt: "Sala de atendimento com parede colorida, mesa e cadeiras de madeira." },
    { src: clinicImg11, alt: "Copa com mesa, cadeiras amarelas e armários planejados." },
    { src: clinicImg12, alt: "Sala de atendimento com mesa, cadeiras e piso azul." }
  ]
  return (
    <section id="sobre" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOPO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1177E3] mb-4">
            Nossa História
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma trajetória construída com propósito, acolhimento e desenvolvimento.
          </p>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* IMAGEM */}
          <div className="min-w-0" >
            <ImageCarousel images={imgList} />
          </div>

          {/* TEXTO ESTRUTURADO */}
          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-[#1177E3] mb-3">
                Um propósito que nasceu do cuidado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fundada há 10 anos por Francielly Caroline, terapeuta ocupacional,
                a Clínica Meus Sentidos surgiu com o desejo genuíno de acolher
                famílias e oferecer um cuidado verdadeiramente integral,
                enxergando cada paciente em sua singularidade.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1177E3] mb-3">
                Atendimento integrado em um só lugar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reunimos diferentes especialidades que dialogam entre si,
                favorecendo um atendimento alinhado, eficaz e acolhedor,
                fortalecendo vínculos e proporcionando um ambiente seguro
                e previsível para o desenvolvimento.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1177E3] mb-3">
                Crescimento com essência
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ao longo dos anos crescemos em estrutura e conhecimento,
                mas mantivemos nossa essência: desenvolvimento é presença,
                escuta, amor e ciência caminhando juntas.
              </p>
            </div>

          </div>
        </div>

        {/* FRASE FINAL DE IMPACTO */}
        <div className="mt-20 text-center">
          <p className="text-2xl font-semibold text-[#1177E3] max-w-3xl mx-auto">
            A Clínica Meus Sentidos é mais do que um espaço terapêutico.
            É um lugar de acolhimento e desenvolvimento.
          </p>
        </div>

      </div>
    </section>
  )
}