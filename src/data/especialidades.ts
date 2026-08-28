export type Especialidade = {
  titulo: string
  descricao: string
  imagens: string[]
  /** object-position da foto, quando o corte padrao (centro) nao serve */
  foco?: string
  subtitulo?: string
  beneficiosTitulo?: string
  beneficios?: string[]
}
import edfisica from "../assets/locais/ED_FISICA.webp"
import fisio from "../assets/locais/FISIOTERAPIA.webp"
import fono from "../assets/locais/FONOAUDIOLOGIA.webp"
import music from "../assets/locais/MUSICOTERAPIA.webp"
import neuroMus from "../assets/locais/NEUROMODULACAO.webp"
import neuroPs from "../assets/locais/NEUROPSICOPEDAGOGIA.webp"
import pilates from "../assets/locais/PILATES.webp"
import psico from "../assets/locais/PSICOLOGIA.webp"
import terapAq from "../assets/locais/TERAPIA_AQUATICA.webp"
import terapOq from "../assets/locais/TERAPIA_OCUPACIONAL.webp"
import teraS from "../assets/locais/THERASUIT.webp"
import aba from "../assets/locais/ABA.webp"
import laser from "../assets/locais/LASERTERAPIA.webp"
import reforco from "../assets/locais/REFORCO_ESCOLAR.webp"
import integracao from "../assets/locais/INTEGRACAO_SENSORIAL.webp"
import musculacao from "../assets/locais/MUSCULACAO.webp"

export const especialidades: Record<string, Especialidade> = {
  psicologia: {
    titulo: "Psicologia",
    descricao: `
A Psicologia é a ciência que estuda o comportamento humano e os processos mentais. 
Na Clínica Meus Sentidos, atua na promoção da saúde emocional, no desenvolvimento de 
habilidades socioemocionais e no manejo de demandas comportamentais e psíquicas.

O atendimento é fundamentado em abordagens científicas, com intervenções individualizadas
que visam fortalecer autonomia, autoestima, regulação emocional e qualidade de vida,
sempre em parceria com a família.
`,
    imagens: [
      psico
    ]
  },

  aba: {
    titulo: "ABA – Análise do Comportamento Aplicada",
    descricao: `
A Análise do Comportamento Aplicada é uma ciência baseada em evidências que estuda
a relação entre comportamento e ambiente.

Na prática clínica, a ABA é utilizada para desenvolver habilidades sociais,
comunicativas, acadêmicas e funcionais, além de reduzir comportamentos que possam
interferir na aprendizagem e na participação social.

As intervenções são planejadas a partir de avaliação funcional criteriosa,
com metas individualizadas e monitoramento contínuo de resultados.
`,
    imagens: [
      aba
    ]
  },

  fonoaudiologia: {
    titulo: "Fonoaudiologia",
    descricao: `
A Fonoaudiologia é a área da saúde responsável pela avaliação e intervenção
nos aspectos relacionados à comunicação humana e às funções orofaciais.

Atua em linguagem oral e escrita, fala, voz, fluência, motricidade orofacial
e disfagia.

Na clínica, os atendimentos são direcionados à promoção da funcionalidade
comunicativa, ampliando as possibilidades de expressão, interação social e
desempenho acadêmico e profissional.
`,
    imagens: [
      fono
    ]
  },

  laserterapia: {
    titulo: "Laserterapia",
    descricao: `
A Laserterapia é um recurso terapêutico que utiliza luz de baixa intensidade
para promover efeitos analgésicos, anti-inflamatórios e bioestimuladores.

É amplamente utilizada como recurso complementar em diferentes áreas da saúde,
contribuindo para cicatrização tecidual, modulação da dor e melhora funcional,
sempre com aplicação segura e respaldada por critérios técnicos.
`,
    imagens: [
      laser
    ]
  },

  neuromodulacao: {
    titulo: "Neuromodulação",
    descricao: `
A Neuromodulação consiste na utilização de recursos tecnológicos que atuam na
modulação da atividade do sistema nervoso central.

Pode contribuir para melhora de atenção, regulação emocional, desempenho
cognitivo e comportamental.

Na Clínica Meus Sentidos, é aplicada mediante avaliação criteriosa, como
recurso complementar ao plano terapêutico individualizado.
`,
    imagens: [
      neuroMus
    ]
  },

  neuropsicopedagogia: {
    titulo: "Neuropsicopedagogia",
    descricao: `
A Neuropsicopedagogia integra conhecimentos da neurociência, psicologia e
pedagogia, com foco nos processos de aprendizagem.

Atua na identificação e intervenção de dificuldades escolares, transtornos de
aprendizagem e alterações cognitivas.

O trabalho é direcionado ao desenvolvimento de estratégias que potencializem
habilidades, respeitando o perfil neurocognitivo de cada paciente.
`,
    imagens: [
      neuroPs
    ],
    foco: "50% 65%"
  },

  "reforco-escolar": {
    titulo: "Reforço Escolar",
    subtitulo: "Suporte estruturado ao aprendizado",
    descricao: `
O Reforço Escolar oferece suporte estruturado às demandas acadêmicas,
promovendo organização, estratégias de estudo, compreensão de conteúdos
e autonomia frente ao processo de aprendizagem.

O objetivo é fortalecer o desempenho escolar e a autoconfiança.
`,
    imagens: [
      reforco
    ]
  },

  "terapia-ocupacional": {
    titulo: "Terapia Ocupacional",
    descricao: `
A Terapia Ocupacional é a área da saúde que promove autonomia e funcionalidade
nas atividades do cotidiano.

Atua no desenvolvimento de habilidades motoras, sensoriais, cognitivas e de
vida diária, favorecendo independência e participação ativa nos diferentes
contextos sociais.

O plano terapêutico é construído de forma individualizada, considerando as
demandas e objetivos de cada paciente.
`,
    imagens: [
      terapOq,
    ],
    foco: "50% 70%"
  },

  "integracao-sensorial": {
    titulo: "Integração Sensorial de Ayres®",
    descricao: `
Baseada nos estudos de A. Jean Ayres, a abordagem de Integração Sensorial
de Ayres® é direcionada à organização e modulação das respostas aos
estímulos sensoriais.

O objetivo é melhorar o processamento sensorial, favorecendo
autorregulação, planejamento motor, atenção e desempenho funcional
nas atividades do dia a dia.
`,
    imagens: [
      integracao
    ],
    foco: "50% 68%"
  },

  fisioterapia: {
    titulo: "Fisioterapia",
    descricao: `
A Fisioterapia atua na prevenção, avaliação e reabilitação de alterações
do movimento e da funcionalidade.

Trabalha força muscular, equilíbrio, coordenação, mobilidade e
condicionamento físico, promovendo independência e qualidade de vida.

Os atendimentos são pautados em avaliação individualizada e metas
terapêuticas claras.
`,
    imagens: [
      fisio
    ]
  },

  therasuit: {
    titulo: "Therasuit",
    descricao: `
O Método TheraSuit é uma abordagem de fisioterapia intensiva voltada para o desenvolvimento e aprimoramento das habilidades motoras. Utiliza uma roupa terapêutica com elásticos, que auxilia no alinhamento do corpo, na estabilização das articulações e na melhora da percepção corporal.

Durante as sessões, são realizados exercícios funcionais e específicos, que estimulam força, equilíbrio, coordenação e controle postural. O método também pode utilizar equipamentos terapêuticos que oferecem suporte seguro para a prática dos movimentos.

O objetivo do Método TheraSuit é promover maior organização motora, melhorar a funcionalidade e ampliar a independência do paciente nas atividades do dia a dia, sempre respeitando as necessidades individuais de cada paciente.
`,
    imagens: [
      teraS
    ]
  },

  pilates: {
    titulo: "Pilates",
    descricao: `
O Pilates terapêutico é um método de condicionamento físico que enfatiza
controle postural, fortalecimento muscular, alongamento e consciência
corporal.

Adaptado às necessidades clínicas, contribui para melhora da postura,
estabilidade, coordenação e funcionalidade global.
`,
    imagens: [
      pilates
    ]
  },

  "terapia-aquatica": {
    titulo: "Terapia Aquática",
    descricao: `
A Terapia Aquática utiliza as propriedades físicas da água, como
flutuação, resistência e pressão hidrostática, para potencializar
ganhos motores, respiratórios e sensoriais. O ambiente aquático
favorece movimentos com menor impacto, promovendo relaxamento,
fortalecimento muscular e ampliação das habilidades funcionais.
`,
    imagens: [
      terapAq
    ]
  },

  "educacao-fisica": {
    titulo: "Educação Física",
    descricao: `
A Educação Física na clínica é voltada para promoção da saúde,
desenvolvimento físico e funcionalidade.

Os programas são planejados de forma individualizada, respeitando
as condições clínicas e objetivos de cada paciente, com foco em
qualidade de vida e autonomia.
`,
    imagens: [
      edfisica
    ]
  },

  musculacao: {
    titulo: "Musculação",
    descricao: `
A Musculação terapêutica é utilizada como estratégia para ganho
de força, resistência, coordenação e condicionamento físico.

A prescrição é personalizada e supervisionada, garantindo
segurança e eficácia no processo de treinamento.
`,
    imagens: [
      musculacao
    ],
    foco: "50% 75%"
  },

  musicoterapia: {
    titulo: "Musicoterapia",
    descricao: `
A Musicoterapia é uma prática terapêutica reconhecida que utiliza
a música e seus elementos — ritmo, melodia, harmonia e som —
como instrumentos de intervenção.

Atua na estimulação cognitiva, comunicação, expressão emocional,
interação social e regulação comportamental.

O trabalho é estruturado a partir de objetivos terapêuticos
individualizados, promovendo desenvolvimento e fortalecimento
de vínculos por meio da experiência musical.
`,
    imagens: [
      music
    ],
    foco: "50% 67%"
  }
}
export type EspecialidadeSlug = keyof typeof especialidades