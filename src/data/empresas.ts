import analiseErgonomica from "../assets/empresas/ANALISE_ERGONOMICA.webp"
import assessoriaErgonomia from "../assets/empresas/ASSESSORIA_ERGONOMIA.webp"
import projetosPlanos from "../assets/empresas/PROJETOS_PLANOS_ACAO.webp"
import palestrasTreinamentos from "../assets/empresas/PALESTRAS_TREINAMENTOS.webp"
import inclusaoPcd from "../assets/empresas/INCLUSAO_PCD.webp"

export type Subcategoria = {
  titulo: string
  descricao: string
}

export type ServicoEmpresa = {
  titulo: string
  descricao: string
  imagem?: string
  etapas?: string[]
  beneficiarios?: {
    titulo: string
    itens: string[]
  }
  subcategorias?: Subcategoria[]
}

export const empresas: Record<string, ServicoEmpresa> = {
  analise_ergonomica: {
    titulo: "Análise Ergonômica",
    imagem: analiseErgonomica,
    descricao:
      "A Análise Ergonômica visa identificar os principais problemas do ambiente de trabalho por meio de avaliação qualitativa e quantitativa, permitindo a elaboração de um Plano de Ação voltado à prevenção de riscos, à promoção da saúde ocupacional e à melhoria das condições laborais, em conformidade com a NR17 e seu Manual de Aplicação, com validade técnica e legal.",
    etapas: [
      "Análise da Demanda",
      "Análise Global da Empresa",
      "Análise da Tarefa",
      "Análise da Atividade",
      "Formulação do Pré-Diagnóstico e Diagnóstico",
      "Recomendações e cronograma de implementações",
    ],
  },

  assessoria_ergonomia: {
    titulo: "Assessoria em Ergonomia",
    imagem: assessoriaErgonomia,
    descricao:
      "Oferecemos assessoria técnica especializada em Ergonomia, acompanhando a implementação dos preceitos legais e orientando as áreas envolvidas, como saúde, engenharia e segurança do trabalho. Atuamos de forma personalizada e integrada à realidade de cada empresa, com serviços que incluem Análise Ergonômica do Trabalho, treinamentos, estruturação do processo ergonômico, elaboração e acompanhamento de planos de ação, com monitoramento contínuo por indicadores.",
  },

  projetos_planos_acao: {
    titulo: "Projetos / Planos de Ação",
    imagem: projetosPlanos,
    descricao:
      "Desenvolvemos projetos personalizados de acordo com as necessidades humanas, fundamentados no estudo da biomecânica dos movimentos, da antropometria, da tecnologia e do fluxo de produção, com o objetivo de promover a correta implementação de sistemas, equipamentos e métodos de trabalho.",
  },

  palestras_treinamentos: {
    titulo: "Palestras e Treinamentos",
    imagem: palestrasTreinamentos,
    descricao:
      "Os treinamentos ministrados por nós são desenvolvidos de acordo com as necessidades da empresa e do público-alvo, estando alinhados e constantemente atualizados em função das novas tecnologias, pesquisas e avanços do conhecimento.",
  },

  inclusao_pcd: {
    titulo: "Inclusão da Pessoa com Deficiência: Contratação e Desenvolvimento",
    imagem: inclusaoPcd,
    descricao:
      "Apoiamos empresas no cumprimento da Lei de Cotas para Pessoas com Deficiência, oferecendo suporte especializado para acolhimento, integração e desenvolvimento desses profissionais. Nossa atuação une uma abordagem humana e estratégica, garantindo uma inclusão efetiva, produtiva e sustentável, que vai além do simples cumprimento legal.",
    beneficiarios: {
      titulo: "Quem pode se beneficiar desse serviço?",
      itens: [
        "Empresas que precisam cumprir a Lei de Cotas",
        "Líderes que desejam contratar com mais consciência e menor risco",
        "Organizações que buscam fortalecer sua reputação em Diversidade, Equidade e Inclusão (DE&I)",
      ],
    },
    subcategorias: [
      {
        titulo: "Conscientização e Letramento",
        descricao:
          "Promover a disseminação de informações de forma clara e acessível, com o objetivo de formar, sustentar e fortalecer equipes para a construção e consolidação de uma cultura verdadeiramente inclusiva.",
      },
      {
        titulo: "Acessibilidade",
        descricao:
          "Identificar, avaliar e orientar melhorias arquitetônicas, digitais, tecnológicas e comunicacionais, assegurando condições adequadas para a participação plena e produtiva de pessoas com deficiência.",
      },
      {
        titulo: "Carreira",
        descricao:
          "Apoiar o desenvolvimento profissional de pessoas com deficiência, favorecendo trajetórias estruturadas, autonomia, desempenho e crescimento ao longo de sua jornada.",
      },
      {
        titulo: "Capacitação",
        descricao:
          "Atuar no desenvolvimento de competências técnicas e comportamentais de pessoas com deficiência, possibilitando a ampliação de habilidades, a qualificação contínua e o acesso a posições estratégicas e de liderança.",
      },
    ],
  },
}
