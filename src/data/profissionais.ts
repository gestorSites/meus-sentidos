export type Profissional = {
  nome: string
  cargo: string
  foto: string
  area: string
  curriculo: string[]
}
import person from "../assets/profissionais/person.jpg"


export const profissionais: Record<string, Profissional> = {

  francielly_caroline: {
    nome: "Francielly Caroline",
    cargo: "Terapeuta Ocupacional e Diretora Clínica",
    foto: person,
    area: "Terapia Ocupacional",
    curriculo: [
      "Terapeuta Ocupacional graduada pela Universidade de São Paulo (USP)",
      "Mestra pela Universidade de São Paulo – Ribeirão Preto",
      "Especialista em Neurociências pela Universidade Federal de São Paulo (UNIFESP)",
      "Especialista em Reabilitação Aplicada à Neurologia pela Universidade Estadual de Campinas (UNICAMP)",
      "Certificação Internacional em Integração Sensorial de Ayres",
      "Diretora da Clínica Meus Sentidos – Terapias Integradas",
      "Terapeuta Ocupacional do Programa de Alta Performance do Magazine Luiza"
    ]
  },

  natalia_silva_garcia: {
    nome: "Natália Silva Garcia",
    cargo: "Terapeuta Ocupacional",
    foto: person,
    area: "Terapia Ocupacional",
    curriculo: [
      "Terapeuta Ocupacional formada pela Universidade Federal do Triângulo Mineiro (UFTM)",
      "Pós-graduação em andamento em Integração Sensorial no Desenvolvimento Infantil",
      "Certificação em ABA e Estratégias Naturalistas pelo Instituto Singular",
      "Curso Introdutório de Integração Sensorial",
      "Curso em Funções Executivas no Transtorno do Espectro Autista",
      "Curso Desfralde – estratégias eficazes"
    ]
  },

  maria_eduarda_freire: {
    nome: "Maria Eduarda Freire",
    cargo: "Terapeuta Ocupacional",
    foto: person,
    area: "Terapia Ocupacional",
    curriculo: [
      "Terapeuta Ocupacional pelo Centro Universitário Claretiano",
      "Especialista em Neurociência pela Universidade Federal de São Paulo – Baixada Santista",
      "Certificação em Integração Sensorial de Ayres pela University of Southern California (USC)",
      "Certificação em Escrita – Método PER",
      "Certificação em ABA e Estratégias Naturalistas"
    ]
  },

  ruth_oliveira_roque: {
    nome: "Ruth Oliveira Roque",
    cargo: "Terapeuta Ocupacional",
    foto: person,
    area: "Terapia Ocupacional",
    curriculo: [
      "Graduação em Terapia Ocupacional",
      "Pós-graduação em andamento em Integração Sensorial no Desenvolvimento Infantil",
      "Workshop Terapêutico de Seletividade Alimentar",
      "Autismo: Inclusão e Recursos Terapêuticos",
      "ABA – Análise do Comportamento Aplicada",
      "Inclusão da Pessoa com Deficiência"
    ]
  },

  darliani_guimaraes: {
    nome: "Darliani Guimarães",
    cargo: "Psicopedagoga e Terapeuta Ocupacional",
    foto: person,
    area: "Terapia Ocupacional",
    curriculo: [
      "Graduada em Letras",
      "Graduada em Pedagogia",
      "Pós-graduada em Psicopedagogia",
      "Pós-graduada em Educação Especial Inclusiva",
      "Pós-graduada em Deficiência Física, Intelectual e Auditiva",
      "Formação como Aplicadora ABA",
      "Formação em Terapia Ocupacional"
    ]
  },

  leticia_brito_mota: {
    nome: "Leticia Brito Mota",
    cargo: "Neuropsicopedagoga e Aplicadora ABA",
    foto: person,
    area: "Neuropsicopedagogia",
    curriculo: []
  },

  camilla_da_silva_polo: {
    nome: "Camilla da Silva Polo",
    cargo: "Neuropsicopedagoga",
    foto: person,
    area: "Neuropsicopedagogia",
    curriculo: [
      "Licenciatura em Pedagogia",
      "Pós-graduação em Neuropsicopedagogia",
      "Formação em PROLEIA",
      "Formação em Mediação e Acompanhamento Escolar",
      "Formação em Terapia Analítico-Comportamental Aplicada",
      "Ênfase em Deficiência Intelectual"
    ]
  },

  eduardo_henrique_hernandes: {
    nome: "Eduardo Henrique Hernandes",
    cargo: "Educador Físico",
    foto: person,
    area: "Educação Física",
    curriculo: [
      "Graduado em Educação Física pela Universidade de Franca",
      "Pós-graduado em Intervenção Motora e Inclusão em Educação e Saúde",
      "Pós-graduando em Psicomotricidade"
    ]
  },

  maria_flavia_cazon: {
    nome: "Maria Flávia Cazon",
    cargo: "Fisioterapeuta",
    foto: person,
    area: "Fisioterapia",
    curriculo: [
      "Fisioterapeuta pelo Centro Universitário Claretiano",
      "Pós-graduação em Fisioterapia Ortopédica, Traumatológica e Desportiva",
      "Formação em Adequação Postural e Prescrição de Cadeira de Rodas",
      "Formação em Pilates Clínico e Funcional",
      "Formação em Kinesio Taping",
      "Formação Internacional Therasuit Method",
      "Formação em Psicomotricidade"
    ]
  },

  mariano_cintra_de_castro: {
    nome: "Mariano Cintra de Castro",
    cargo: "Fonoaudiólogo e Neuromodulador",
    foto: person,
    area: "Fonoaudiologia",
    curriculo: [
      "Graduado em Fonoaudiologia",
      "Especialista em Audiologia Clínica e Ocupacional",
      "Participação no Encontro Brasileiro de Motricidade Orofacial",
      "Participação em Congresso Clínico de Neuromodulação Não Invasiva",
      "Formação em Neuromodulação Não Invasiva – CDCS"
    ]
  },

  josiane_teixeira: {
    nome: "Josiane Teixeira",
    cargo: "Fonoaudióloga",
    foto: person,
    area: "Fonoaudiologia",
    curriculo: [
      "Fonoaudióloga pela Universidade de Franca",
      "Formação em Plano Terapêutico e Técnicas de Intervenção em Autismo Infantil",
      "Pós-graduanda em Intervenção ABA aplicada ao TEA",
      "Formação em Velocidade de Leitura – Método das Boquinhas"
    ]
  },

  leonara_martins: {
    nome: "Leonara Martins",
    cargo: "Fonoaudióloga, Psicóloga e Coordenadora Clínica",
    foto: person,
    area: "Fonoaudiologia",
    curriculo: [
      "Mestra em Promoção da Saúde pela Universidade de Franca",
      "Pós-graduação em ABA",
      "Pós-graduação em Saúde Pública com ênfase em Saúde da Família",
      "Bacharel em Fonoaudiologia",
      "Bacharel em Psicologia",
      "Formação em Apraxia de Fala na Infância",
      "Certificação SCERTS®",
      "Formação no método PROMPT"
    ]
  },

  rafaella_orlando: {
    nome: "Rafaella Orlando",
    cargo: "Psicóloga e Coordenadora Clínica",
    foto: person,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pelo Uni-FACEF",
      "Certificação Aplicadora ABA pelo CBI of Miami",
      "Certificação PEPI – Psicomotricidade Infantil",
      "Formação como Acompanhante Terapêutica",
      "Pós-graduação em ABA para TEA",
      "Certificação SCERTS",
      "Certificação Internacional PRT – Nível 1"
    ]
  },

  tiffany_oliveira: {
    nome: "Tiffany Oliveira",
    cargo: "Psicóloga",
    foto: person,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pelo Uni-FACEF",
      "Pós-graduação em ABA e Estratégias Naturalísticas",
      "Pós-graduação em ABA para TEA",
      "Formação como Acompanhante Terapêutica",
      "Curso Internacional ImPACT – Comunicação Social para Autismo",
      "Certificação Internacional PRT – Nível 1"
    ]
  },

  camila_fernandes: {
    nome: "Camila Fernandes",
    cargo: "Psicóloga",
    foto: person,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pelo Uni-FACEF",
      "Neuropsicóloga pela FAPSI",
      "Pós-graduação em ABA para TEA",
      "Certificação Aplicadora ABA pelo CBI of Miami"
    ]
  },

  leticia_lirian_batista: {
    nome: "Leticia Lirian Batista",
    cargo: "Psicóloga",
    foto: person,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pela Universidade de Franca",
      "Pós-graduanda em Terapia ABA aplicada ao TEA"
    ]
  },

  camila_busqueiro: {
    nome: "Camila Busqueiro",
    cargo: "Psicóloga",
    foto: person,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pelo Uni-FACEF",
      "Formação como Acompanhante Terapêutica",
      "Aplicadora ABA"
    ]
  },

  gabriella_karla_de_souza: {
    nome: "Gabriella Karla de Souza",
    cargo: "Psicóloga",
    foto: person,
    area: "Psicologia",
    curriculo: [
      "Graduada em Psicologia pelo Uni-FACEF",
      "Aplicadora ABA pelo Instituto Neuro"
    ]
  }

}