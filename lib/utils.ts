import crypto from 'crypto'

/**
 * Gera um hash único para URLs
 * @returns string Hash de 16 caracteres
 */
export function generateHash(): string {
  return crypto.randomBytes(8).toString('hex')
}

/**
 * Converte uma string para um slug URL-friendly
 * @param text Texto para converter
 * @returns string Slug formatado
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}
