export type Profissional = {
  nome: string
  cargo: string
  foto: string
  area: string
  curriculo: string[]
}
import person from "../assets/profissionais/person.webp"
import camilaFer from "../assets/profissionais/CAMILA-FERNANDES.webp"
import camilaPolo from "../assets/profissionais/CAMILLA-POLO.webp"
import eduardo from "../assets/profissionais/EDUARDO.webp"
import gabriela from "../assets/profissionais/GABRIELLA.webp"
import leticiaBri from "../assets/profissionais/LETICIA-BRITO.webp"
import mariaFla from "../assets/profissionais/MARIA-FLAVIA.webp"
import ruth from "../assets/profissionais/RUTH.webp"
import tiffany from "../assets/profissionais/TIFFANY.webp"
import rafael from "../assets/profissionais/RAFAEL_MUSICOTERAPEUTA.webp"
import leticiaLirian from "../assets/profissionais/LETICIA_LIRIAN_BATISTA.webp"
import francielly from "../assets/profissionais/FRANCIELLY_CAROLINE.webp"
import natalia from "../assets/profissionais/NATALIA_SILVA_GARCIA.webp"
import camilaBusqueiro from "../assets/profissionais/CAMILA_BUSQUEIRO.webp"
import rafaella from "../assets/profissionais/RAFAELLA_ORLANDO.webp"
import alexia from "../assets/profissionais/ALEXIA_VITORIA.webp"
import leonara from "../assets/profissionais/LEONARA.webp"
import anaLivia from "../assets/profissionais/ANA_LIVIA_OLIVEIRA.webp"
import josiane from "../assets/profissionais/JOSIANE.webp"


export const profissionais: Record<string, Profissional> = {

  francielly_caroline: {
    nome: "Francielly Caroline",
    cargo: "Terapeuta Ocupacional e Diretora Clínica",
    foto: francielly,
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
    foto: natalia,
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

  ruth_oliveira_roque: {
    nome: "Ruth Oliveira Roque",
    cargo: "Terapeuta Ocupacional",
    foto: ruth,
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

  leticia_brito_mota: {
    nome: "Leticia Brito Mota",
    cargo: "Neuropsicopedagoga e Aplicadora ABA",
    foto: leticiaBri,
    area: "Neuropsicopedagogia",
    curriculo: [
      "Pós-graduada em Neuropsicopedagogia pela FAMEESP – Faculdade Metropolitana do Estado de São Paulo",
      "Licenciada em Pedagogia pela FAPESF – Faculdade Pestalozzi de Franca",
      "Aperfeiçoamento em Desenvolvimento Cognitivo e Psicomotor na Infância pela FAMEESP – Faculdade Metropolitana do Estado de São Paulo",
      "Formação em Psicomotricidade como Ferramenta para a Aprendizagem pela FAPESF – Faculdade Pestalozzi de Franca",
      "Aperfeiçoamento em Metodologia Reggio Emilia pela Aprimore",
      "Experiência da Educação Infantil (Berçário) ao Ensino Fundamental II"
    ]
  },

  camilla_da_silva_polo: {
    nome: "Camilla da Silva Polo",
    cargo: "Neuropsicopedagoga",
    foto: camilaPolo,
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
    foto: eduardo,
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
    foto: mariaFla,
    area: "Fisioterapia",
    curriculo: [
      "Fisioterapeuta formada pelo Centro Universitário Claretiano",
      "Pós-graduação em Fisioterapia Ortopédica, Traumatológica e Desportiva",
      "Formação em Adequação Postural e Prescrição de Cadeira de Rodas",
      "Formação em Pilates Clínico e Funcional",
      "Formação em Kinesio Taping",
      "Formação Internacional Therasuit Method",
      "Formação em Psicomotricidade"
    ]
  },

  alexia_vitoria: {
    nome: "Aléxia Vitória",
    cargo: "Fonoaudióloga",
    foto: alexia,
    area: "Fonoaudiologia",
    curriculo: [
      "Informações a serem preenchidas"
    ]
  },

  josiane_teixeira: {
    nome: "Josiane Teixeira",
    cargo: "Fonoaudióloga",
    foto: josiane,
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
    foto: leonara,
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
    foto: rafaella,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pela Universidade Municipal de Franca (Uni-FACEF)",
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
    foto: tiffany,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pela Universidade Municipal de Franca (Uni-FACEF)",
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
    foto: camilaFer,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pela Universidade Municipal de Franca (Uni-FACEF)",
      "Neuropsicóloga pela FAPSI",
      "Pós-graduação em ABA para TEA",
      "Certificação Aplicadora ABA pelo CBI of Miami"
    ]
  },

  leticia_lirian_batista: {
    nome: "Leticia Lirian Batista",
    cargo: "Psicóloga",
    foto: leticiaLirian,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pela Universidade de Franca",
      "Pós-graduanda em Terapia ABA aplicada ao TEA"
    ]
  },

  camila_busqueiro: {
    nome: "Camila Busqueiro",
    cargo: "Psicóloga",
    foto: camilaBusqueiro,
    area: "Psicologia",
    curriculo: [
      "Psicóloga pela Universidade Municipal de Franca (Uni-FACEF)",
      "Formação como Acompanhante Terapêutica",
      "Aplicadora ABA"
    ]
  },

  ana_livia_oliveira: {
    nome: "Ana Livia Oliveira",
    cargo: "Psicóloga",
    foto: anaLivia,
    area: "Psicologia",
    curriculo: [
      "Psicóloga com Bacharel pela Unifran – Universidade de Franca",
      "Pós-graduanda em Análise do Comportamento Aplicada (ABA) para TEA pela Faculdade Metropolitana",
      "Pós-graduanda em PBE Terapias Cognitivas Comportamentais – Fernanda Landeiro"
    ]
  },

  gabriella_karla_de_souza: {
    nome: "Gabriella Karla de Souza",
    cargo: "Psicóloga",
    foto: gabriela,
    area: "Psicologia",
    curriculo: [
      "Graduada em Psicologia pela Universidade Municipal de Franca (Uni-FACEF)",
      "Aplicadora ABA pelo Instituto Neuro"
    ]
  },

  rafael: {
    nome: "Rafael",
    cargo: "Musicoterapeuta",
    foto: rafael,
    area: "Musicoterapia",
    curriculo: [
      "Musicoterapia pela Faculdade Metropolitana de Ribeirão Preto",
      "Licenciando em Música pelo Conservatório Brasileiro de Música",
      "Aplicador ABA pelo CBI of Miami",
      "Professor particular de canto e piano"
    ]
  }

}