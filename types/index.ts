export interface UserSubmission {
  email: string
  nicho: string
  descricao: string
  site_link: string
  aceite_email: boolean
}

export interface GeneratedPlan {
  analise_nicho: string
  paginas_pilar: Array<{
    titulo: string
    descricao: string
    url: string
    subtemas: Array<{
      titulo: string
      descricao: string
      url: string
      palavras_chave: string[]
    }>
  }>
  recomendacoes_tecnicas: string[]
}
