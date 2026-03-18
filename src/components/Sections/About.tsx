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
    clinicImg1,
    clinicImg2,
    clinicImg3,
    clinicImg4,
    clinicImg5,
    clinicImg6,
    clinicImg7,
    clinicImg8,
    clinicImg9,
    clinicImg10,
    clinicImg11,
    clinicImg12
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