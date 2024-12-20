import { z } from 'zod'

export const formSchema = z.object({
  email: z
    .string()
    .email('Email inválido')
    .min(5, 'Email muito curto')
    .max(100, 'Email muito longo'),
  site_link: z
    .string()
    .min(3, 'URL do site muito curta')
    .max(200, 'URL do site muito longa')
    .url('URL do site inválida'),
  nicho: z
    .string()
    .min(3, 'Nicho muito curto')
    .max(100, 'Nicho muito longo')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nicho contém caracteres inválidos'),
  descricao: z
    .string()
    .min(10, 'Descrição muito curta')
    .max(500, 'Descrição muito longa')
    .regex(/^[^<>]*$/, 'Descrição contém caracteres inválidos'),
  aceite_email: z
    .boolean()
    .default(false)
})
