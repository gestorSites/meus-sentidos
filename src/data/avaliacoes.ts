export type Avaliacao = {
  titulo: string
  descricao: string
  imagens: string[]
}

export type AvaliacaoSlug = string
import edfisica from "../assets/locais/ED_FISICA.webp"

export const avaliacoes: Record<AvaliacaoSlug, Avaliacao> = {
  avaliacao_neuropsicologica: {
    titulo: "Avaliação Neuropsicológica",
    descricao:
      "Processo estruturado que investiga funções cognitivas como atenção, memória, linguagem e funções executivas, auxiliando no diagnóstico e direcionamento terapêutico.",
    imagens: [
      edfisica
    ]
  },

  avaliacao_sensorial: {
    titulo: "Avaliação Sensorial",
    descricao:
      "Avalia como o paciente processa estímulos sensoriais, identificando dificuldades na modulação e integração sensorial.",
    imagens: [
      edfisica
    ]
  },
}