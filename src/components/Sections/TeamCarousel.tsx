import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import personImg from "../../assets/person.jpg"
import franciellyImg from "../../assets/francielly.png"

import "swiper/css"
import "swiper/css/navigation"

import TeamCard from "../TeamCard"

const team = [
  {
    name: "Francielly Caroline",
    role: "Terapeuta Ocupacional e Diretora Clínica",
    description: `Terapeuta Ocupacional graduada pela Universidade de São Paulo (USP).
Mestra pela Universidade de São Paulo – Ribeirão Preto.
Especialista em Neurociências pela Universidade Federal de São Paulo (UNIFESP).
Especialista em Reabilitação Aplicada à Neurologia pela Universidade Estadual de
Campinas (UNICAMP).
Certificação Internacional em Integração Sensorial de Ayres.
Diretora da Clínica Meus Sentidos – Terapias Integradas.
Terapeuta Ocupacional do Programa de Alta Performance do Magazine Luiza, com atuação
na inclusão e desenvolvimento de pessoas com deficiência no ambiente de trabalho.`,
    image: franciellyImg,
  },
  {
    name: "NATÁLIA SILVA GARCIA",
    role: "Terapeuta Ocupacional",
    description:
      `
    Terapeuta Ocupacional formada pela Universidade Federal do Triângulo Mineiro (UFTM).
Pós-graduação em andamento em Integração Sensorial no Desenvolvimento Infantil pela
Sensory – Integração Sensorial e Desenvolvimento Infantil.
Certificação em ABA e Estratégias Naturalistas pelo Instituto Singular.
Curso Introdutório de Integração Sensorial pela Sensory – Integração Sensorial e
Desenvolvimento Infantil.
Curso em Funções Executivas no Transtorno do Espectro Autista pela Inclusão Eficiente.
Curso “Desfralde: compreendendo o processo, identificando os sinais e criando estratégias
eficazes” pela Ludens Cursos.

    `,

    image: personImg,
  },
  {
    name: "MARIA EDUARDA FREIRE",
    role: " Terapeuta Ocupacional",
    description:
      `
      Terapeuta Ocupacional pelo Centro Universitário Claretiano.
Especialista em Neurociência pela Universidade Federal de São Paulo – Baixada Santista.
Certificação em Integração Sensorial de Ayres pela University of Southern California (USC).
Certificação em Escrita – Método PER (Programa de Ensino e Aprendizagem da Escrita
Manual) por Gustavo Reinoso.
Certificação em ABA e Estratégias Naturalistas pelo Instituto Singular.

      `,
    image: personImg
  },
  {
    name: "RUTH OLIVEIRA ROQUE",
    role: "Terapeuta Ocupacional",
    description:
      `
      Graduação em Terapia Ocupacional (Bacharelado).
Pós-graduação em andamento em Integração Sensorial no Desenvolvimento Infantil.
Workshop Terapêutico de Seletividade Alimentar.
Autismo: Inclusão e Recursos Terapêuticos.
ABA – Análise do Comportamento Aplicada.
Inclusão da Pessoa com Deficiência.

      `,
    image: personImg
  },
  {
    name: "DARLIANI GUIMARÃES",
    role: "Psicopedagoga e Terapeuta Ocupacional",
    description:
      `
      Graduada em Letras.
Graduada em Pedagogia.
Pós-graduada em Psicopedagogia.
Pós-graduada em Educação Especial Inclusiva.
Pós-graduada em Deficiência Física, Intelectual e Auditiva.
Formação como Aplicadora ABA.
Formação em Terapia Ocupacional
      `,
    image: personImg
  },
  {
    name: "LETICIA BRITO MOTA",
    role: "Neuropsicopedagoga e Aplicadora ABA",
    description:
      `
      Pós-graduada em Neuropsicopedagogia pela FAMEESP – Faculdade Metropolitana do Estado de São Paulo.
Licenciada em Pedagogia pela FAPESF – Faculdade Pestalozzi de Franca.
Aperfeiçoamento em Desenvolvimento Cognitivo e Psicomotor na Infância pela FAMEESP – Faculdade Metropolitana do Estado de São Paulo.
Formação em Psicomotricidade como Ferramenta para a Aprendizagem pela FAPESF – Faculdade Pestalozzi de Franca.
Aperfeiçoamento em Metodologia Reggio Emilia pela Aprimore.
Experiência em Educação Infantil (Berçário) ao Ensino Fundamental II.
      `,
    image: personImg
  },
  {
    name: "CAMILLA DA SILVA POLO",
    role: "Neuropsicopedagoga",
    description:
      `
      Licenciatura em Pedagogia.
Pós-graduada em Neuropsicopedagogia.
Formação em PROLEIA – Programa de Leitura, Escrita, Interpretação e Aprendizagem.
Formação em Mediação e Acompanhamento Escolar.
Formação em Terapia Analítico-Comportamental Aplicada e Alfabetização.
Ênfase em Deficiência Intelectual.
Curso “Problemas de Comportamento em Pessoas com TEA: Como Avaliar e Intervir” pela
Fundação Panda.

      `,
    image: personImg
  },
  {
    name: "EDUARDO HENRIQUE HERNANDES",
    role: "Educador Físico",
    description:
      `
      Graduado em Educação Física (Licenciatura e Bacharelado) pela Universidade de Franca.
Pós-graduado em Intervenção Motora e Inclusão em Educação e Saúde pela Faculdade
Focus.
Pós-graduando em Psicomotricidade pela Universidade de Franca.
      `,
    image: personImg
  },
  {
    name: "MARIA FLÁVIA CAZON",
    role: "Fisioterapeuta",
    description:
      `
      Fisioterapeuta, Bacharel pelo Centro Universitário Claretiano (Batatais/SP).
Pós-graduada em Fisioterapia Ortopédica, Traumatológica e Desportiva pelo Centro
Universitário Claretiano.
Formação em Introdução à Adequação Postural e Prescrição de Cadeira de Rodas.
Formação em Pilates Clínico e Funcional (Solo, Bola e Aparelhos) pelo Espaço Vida Pilates
/ Voll Pilates.
Formação Oficial em Kinesio Taping (KT1 e KT2) pela Kinesio Taping Association
International.
Formação em Reabilitação e Treinamento Funcional pelo IPES.
Formação Internacional Therasuit Method em Florianópolis.
Formação em Psicomotricidade pelo GINEAD – Instituto Nacional de Ensino à Distância.
Formação em Métodos Bad Ragaz e Halliwick de Fisioterapia Aquática pela GOKURSOS
Educação Continuada.
Formação em Deficiência Visual pela Estude sem Fronteiras – Faculdade Metropolitana.
Graduanda em Terapia Ocupacional pela Universidade de Franca (UNIFRAN / Cruzeiro do
Sul).

      `,
    image: personImg
  },

  {
    name: "MARIANO CINTRA DE CASTRO",
    role: "Fonoaudiólogo e Neuromodulador",
    description:
      `
      Graduado em Fonoaudiologia.
Especialista em Audiologia Clínica e Ocupacional.
Participação no 12º Encontro Brasileiro de Motricidade Orofacial.
Participação no I Simpósio de Neuropsiquiatria do Maranhão – LAPMA/LANI.
Participação no I COINE – Congresso Internacional de Neuroestratégias e PNL.
Curso “Tosse Crônica: Avaliação e Tratamento Fonoaudiológico”.
Participação no evento “Voz do CEV: Fonoaudiologia e seus Parceiros”.
Participação no 37º Encontro Internacional de Audiologia.
Participação no 20º Encontro Internacional de Próteses Auditivas.
Participação no Multigestos.
Oficina de Motricidade Orofacial – Hands On.
Curso sobre Ecolalia.
Participação no Congresso Clínico de Neuromodulação Não Invasiva.
Formação em Neuromodulação Não Invasiva – CDCS.

      `,
    image: personImg
  },
  {
    name: "JOSIANE TEIXEIRA",
    role: "Fonoaudióloga",
    description:
      `
      Fonoaudióloga, Bacharel pela Universidade de Franca (UNIFRAN).
Formação em Plano Terapêutico e Técnicas de Intervenção em Autismo Infantil pelo
SERFONO – CEFAC.
Pós-graduanda em Intervenção ABA aplicada ao Transtorno do Espectro Autista pela
Faculdade Metropolitana de Franca.
Formação em “Velocidade de Leitura” pelo Método das Boquinhas.
      `,
    image: personImg
  },
  {
    name: "LEONARA MARTINS",
    role: "Fonoaudióloga, Psicóloga, Supervisora Área de Fonoaudiologia,Coordenadora Clínica",
    description:
      `
      Mestra em Promoção da Saúde pela Universidade de Franca (UNIFRAN).
Pós-graduada em Análise do Comportamento Aplicada (ABA) pelas Faculdades
Conectadas.
Pós-graduada em Saúde Pública com ênfase em Saúde da Família pela Universidade de
Franca.
Bacharel em Fonoaudiologia pela Universidade de Franca.
Bacharel em Psicologia pela Universidade de Franca.
Formação em Apraxia de Fala na Infância pela Associação Brasileira de Apraxia de Fala na
Infância.
Certificação no método SCERTS® pelo Communication Crossroads.
Formação em PROAC MASTER pelo Instituto Saber Autismo.
Formação em Seletividade Alimentar pelo SERFONO – CEFAC.
Formação Internacional no Método Therasuit® para Fonoaudiólogos pelo Instituto Cecília
Cavalcanti.
Formação no método PROMPT pelo The PROMPT Institute.
Certificação Internacional PRT – Nível 1 pelo Koegel PR.
Certificação Internacional Introdutória ao PODD (Pragmatic Organisation Dynamic Display).
Formação em Laserterapia na Fonoaudiologia pelo SERFONO – CEFAC.

      `,
    image: personImg
  },
  {
    name: "RAFAELLA ORLANDO",
    role: "Psicóloga, Supervisora Áreda de Psicologia, Coordenadora Clínica",
    description:
      `
      Psicóloga, Bacharel e Licenciada pelo Uni-FACEF – Centro Universitário Municipal de
Franca.
Certificação como Aplicadora ABA pelo CBI of Miami.
Certificação no PEPI – Programa Especializado em Psicomotricidade Infantil pelo Instituto
NeuroSaber.
Formação como Acompanhante Terapêutica (A.T.).
Pós-graduada em Análise do Comportamento Aplicada (ABA) para TEA pela Faculdade
Censupeg.
Certificação no método SCERTS pelo Instituto Inclusão Eficiente.
Curso Tratamento do Autismo – Protocolo Ouro pelo CBI of Miami.
Formação em SCA – Segurança em Crises Agressivas.
Certificação Internacional PRT – Nível I pelo Koegel PRT.
Formação em MPCA – Manejo e Prevenção de Crises Agressivas.
Formação em IA para Negócios – Imersão Executiva Presencial pelo StartSe.
Atua com atendimentos clínicos, assessoria domiciliar e escolar, é supervisora clínica e
integra a gestão da Clínica Meus Sentidos – Terapias Integradas
      `,
    image: personImg
  },
  {
    name: "TIFFANY OLIVEIRA",
    role: "Psicóloga",
    description:
      `
      Psicóloga, Bacharel e Licenciada pelo Uni-FACEF – Centro Universitário Municipal de
Franca.
Pós-graduada em ABA e Estratégias Naturalísticas aplicadas ao Autismo e Atrasos no
Desenvolvimento pelo Instituto Singular.
Pós-graduada em Análise do Comportamento Aplicada (ABA) para TEA pela Faculdade
Metropolitana.
Formação como Acompanhante Terapêutica (A.T.).
Curso Atenção na Prática pelo Instituto Singular.
Curso Internacional Introdutório ImPACT – Treinamento de Comunicação Social para
Crianças com Autismo.
Minicurso em ABA para Adolescentes e Adultos pelo Instituto Fratelli.
Cursos pelo ABA Acessível:
– Como Estabelecer o Controle Instrucional;
– Procedimentos de Desfralde – Contribuições da ABA;
– Construção de Programas de Ensino.
Certificação Internacional PRT – Nível 1 pelo Koegel PRT.
Formação em MPCA – Manejo e Prevenção de Crises Agressivas.
Atua com atendimentos clínicos, assessoria domiciliar e escolar, e é Coordenadora Clínica
dos casos em Psicologia da Clínica Meus Sentidos – Terapias Integradas.

      `,
    image: personImg
  },
  {
    name: "CAMILA FERNANDES",
    role: "Psicóloga",
    description:
      `
      Psicóloga, Bacharel e Licenciada pelo Uni-FACEF – Centro Universitário Municipal de
Franca.
Neuropsicóloga pela FAPSI – Faculdade Psicolog.
Pós-graduada em Análise do Comportamento Aplicada (ABA) para TEA pela Faculdade
Metropolitana.
Certificação como Aplicadora ABA pelo CBI of Miami.
      `,
    image: personImg
  },
  {
    name: "LETICIA LIRIAN BATISTA",
    role: "Psicóloga",
    description:
      `
      Psicóloga, Bacharel pela Universidade de Franca (UNIFRAN).
Pós-graduanda em Terapia ABA aplicada ao Transtorno do Espectro Autista (TEA) pela
Faculdade Metropolitana.
      `,
    image: personImg
  },
  {
    name: "CAMILA BUSQUEIRO",
    role: "Psicóloga",
    description:
      `
      Psicóloga, Bacharel e Licenciada pelo Uni-FACEF – Centro Universitário Municipal de
Franca.
Formação como Acompanhante Terapêutica (A.T.).
Formação em ABA no TEA – Aplicadora ABA.
      `,
    image: personImg
  },
  {
    name: "GABRIELLA KARLA DE SOUZA",
    role: "Psicóloga",
    description:
      `
      Graduada em Psicologia pelo Uni-FACEF – Centro Universitário Municipal de Franca.
Aplicadora ABA pelo Instituto Neuro.

      `,
    image: personImg
  },
]

export default function TeamCarousel() {
  return (
    <section id="profissionais" className="bg-blue-50 py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold text-center text-[#1177E3] mb-12">
        Profissionais
      </h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          loop
          speed={600}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".team-next",
            prevEl: ".team-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {team.map((person, index) => (
            <SwiperSlide key={index}>
              <TeamCard {...person} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="
          team-prev
          absolute left-0 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full
          bg-white shadow-md
          flex items-center justify-center
          text-xl text-blue-600
          hover:bg-blue-600 hover:text-white
          transition-all duration-200
        "
          aria-label="Anterior"
        >
          ‹
        </button>

        <button
          className="
          team-next
          absolute right-0 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full
          bg-white shadow-md
          flex items-center justify-center
          text-xl text-blue-600
          hover:bg-blue-600 hover:text-white
          transition-all duration-200
        "
          aria-label="Próximo"
        >
          ›
        </button>
      </div>
    </section>
  )
}
