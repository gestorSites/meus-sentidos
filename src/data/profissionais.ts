export type Profissional = {
  nome: string
  cargo: string
  foto: string
  /** object-position da foto. So tem efeito no recorte 1:1 (o circulo do
      carrossel da Home); no grid 4:5 da Equipe a foto ja aparece inteira. */
  foco?: string
  area: string
  curriculo: string[]
}
import camilaFer from "../assets/profissionais/CAMILA-FERNANDES.webp"
import camilaPolo from "../assets/profissionais/CAMILLA-POLO.webp"
import eduardo from "../assets/profissionais/EDUARDO.webp"
import gabriela from "../assets/profissionais/GABRIELLA.webp"
import leticiaBri from "../assets/profissionais/LETICIA-BRITO.webp"
import mariaFla from "../assets/profissionais/MARIA-FLAVIA.webp"
import ruth from "../assets/profissionais/RUTH.webp"
import tiffany from "../assets/profissionais/TIFFANY.webp"
import leticiaLirian from "../assets/profissionais/LETICIA_LIRIAN_BATISTA.webp"
import francielly from "../assets/profissionais/FRANCIELLY_CAROLINE.webp"
import natalia from "../assets/profissionais/NATALIA_SILVA_GARCIA.webp"
import camilaBusqueiro from "../assets/profissionais/CAMILA_BUSQUEIRO.webp"
import rafaella from "../assets/profissionais/RAFAELLA_ORLANDO.webp"
import alexia from "../assets/profissionais/ALEXIA_VITORIA.webp"
import leonara from "../assets/profissionais/LEONARA.webp"
import anaLivia from "../assets/profissionais/ANA_LIVIA_OLIVEIRA.webp"
import josiane from "../assets/profissionais/JOSIANE.webp"
import jhonny from "../assets/profissionais/JHONNY_ALMEIDA.webp"
import brenda from "../assets/profissionais/BRENDA_ALMEIDA.webp"
import lara from "../assets/profissionais/LARA_MARRA.webp"
import carolina from "../assets/profissionais/CAROLINA_CANTARINO.webp"
import paula from "../assets/profissionais/PAULA_ANGELA_MENEGHETTI.webp"
import thatiane from "../assets/profissionais/THATIANE_DANIELLY_SANTOS.webp"


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
    foco: "50% 5%",
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
    foco: "50% 0%",
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

  brenda_almeida: {
    nome: "Brenda Almeida",
    cargo: "Terapeuta Ocupacional",
    foto: brenda,
    area: "Terapia Ocupacional",
    curriculo: [
      "Terapeuta Ocupacional graduada pela Universidade Federal do Triângulo Mineiro (UFTM)",
      "Pós-graduação em andamento em Integração Sensorial no Desenvolvimento Infantil (Sensory Educacional)",
      "Curso em Integração Sensorial: raciocínio clínico aplicado ao TEA (Sensory Educacional)",
      "Curso em Motricidade Fina no Desenvolvimento Infantil e na Vida Diária (Inclusão Eficiente)",
      "Curso em Integração Sensorial de Ayres: do conceito à intervenção (Miriam Arvelino)",
      "Formação Básica e Avançada no Método Therapy Taping (Therapy Taping Association)"
    ]
  },

  lara_marra: {
    nome: "Lara Marra",
    cargo: "Terapeuta Ocupacional",
    foto: lara,
    area: "Terapia Ocupacional",
    curriculo: [
      "Terapeuta Ocupacional formada pela Universidade Federal do Triângulo Mineiro (UFTM)",
      "Extensão no ambulatório de pediatria, no projeto de estimulação precoce",
      "Participante do Congresso Brasileiro de Terapia Ocupacional 2025"
    ]
  },

  leticia_brito_mota: {
    nome: "Leticia Brito Mota",
    cargo: "Neuropsicopedagoga e Aplicadora ABA",
    foto: leticiaBri,
    foco: "50% 0%",
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
    foco: "50% 0%",
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
    foco: "50% 7%",
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
    foco: "50% 0%",
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

  carolina_cantarino: {
    nome: "Carolina Cantarino",
    cargo: "Fisioterapeuta",
    foto: carolina,
    area: "Fisioterapia",
    curriculo: [
      "Fisioterapeuta formada pela Universidade de Franca (Unifran)",
      "Pós-graduação em andamento em Neurofuncional Adulto e Infantil (Unifran)",
      "Fisioterapia em Home Care (Ibraesp)",
      "Capacitação em Comunicação Alternativa e Aumentativa"
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
    foco: "50% 0%",
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
    foco: "50% 0%",
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
    foco: "50% 4%",
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
    foco: "50% 1%",
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

  jhonny_almeida: {
    nome: "Jhonny Almeida",
    cargo: "Psicólogo",
    foto: jhonny,
    foco: "50% 0%",
    area: "Psicologia",
    curriculo: [
      "Psicólogo pela Universidade de Franca (Unifran)",
      "Treinamento em Acompanhamento Terapêutico no ambiente escolar",
      "Pós-graduação em andamento em ABA – Análise do Comportamento Aplicada (FAVENI)"
    ]
  },

  paula_angela_meneghetti: {
    nome: "Paula Angela Meneghetti",
    cargo: "Nutricionista",
    foto: paula,
    area: "Nutrição",
    curriculo: [
      "Nutricionista graduada pela Universidade de Franca (Unifran)",
      "Pós-graduada em Nutrição Materno-Infantil (Centro de Nutrição Funcional – VP)",
      "Pós-graduação em andamento em Nutrição Funcional e Terapia Alimentar no Autismo e TDAH (Academia do Autismo)",
      "Formação em ABA e Estratégias Naturalistas (Instituto Singular)",
      "MBA em Administração pela Faculdade de Economia, Administração e Contabilidade de Ribeirão Preto (USP)"
    ]
  },

  thatiane_danielly_santos: {
    nome: "Thatiane Danielly Santos",
    cargo: "Nutricionista",
    foto: thatiane,
    area: "Nutrição",
    curriculo: [
      "Nutricionista formada pela Universidade de Franca (Unifran)",
      "Mestre em Saúde da Criança e do Adolescente pela FMRP/USP"
    ]
  }

}