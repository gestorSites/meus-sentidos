import clinicImg from "../../assets/clinic.jpg"
import ImageCarousel from "../ImageCarousel"
export default function About() {
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
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGEM */}
          <div>
            <ImageCarousel images={[clinicImg, clinicImg, clinicImg]} height="300px" />
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