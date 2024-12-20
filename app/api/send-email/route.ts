import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend('re_qkdUE5AZ_Gk9Bj3ktnqiCRtXUN6UQTFqF')

export async function POST(request: Request) {
  try {
    const { email, page_url } = await request.json()
    
    console.log('Tentando enviar email para:', email)
    console.log('URL do plano:', page_url)

    const data = await resend.emails.send({
      from: 'Growth Grid <contato@webinhood.com.br>',
      to: email,
      subject: 'Sua estratégia personalizada de conteúdo está pronta! 📊',
      html: `
        <h1>Sua estratégia personalizada de conteúdo está pronta!</h1>
        <p>Olá!</p>
        <p>Acabamos de gerar seu mapa de autoridade temática personalizado, com uma análise completa do seu nicho e recomendações estratégicas de SEO.</p>
        <p>Neste plano você encontrará:</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>✓ Análise detalhada do seu nicho</li>
          <li>✓ 10 páginas-pilar estratégicas</li>
          <li>✓ 100 subtemas organizados</li>
          <li>✓ Recomendações técnicas de SEO</li>
        </ul>
        <p>Clique no botão abaixo para acessar seu mapa completo:</p>
        <a href="${page_url}" style="display: inline-block; background-color: #805AD5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 16px 0;">
          Acessar meu mapa de conteúdo
        </a>
        <p>Se o botão não funcionar, copie e cole este link no seu navegador:</p>
        <p>${page_url}</p>
        <p>Sucesso na sua estratégia de conteúdo!</p>
        <p>Equipe Growth Grid</p>
      `
    })

    console.log('Resposta do Resend:', data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json({ 
      error: 'Erro ao enviar email',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 })
  }
}
