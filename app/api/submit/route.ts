import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'
import { generateHash } from '@/lib/utils'
import { OpenAI } from 'openai'

const resend = new Resend('re_qkdUE5AZ_Gk9Bj3ktnqiCRtXUN6UQTFqF')
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request: Request) {
  try {
    console.log('1. Iniciando processamento')
    const body = await request.json()
    const { email, nicho, descricao, site_link = '' } = body
    
    console.log('2. Dados recebidos:', { email, nicho, descricao, site_link })

    // Gerar hash único para a URL
    const hash = generateHash()
    const page_url = `/plano/${hash}`
    console.log('3. URL gerada:', page_url)

    // Gerar plano usando GPT-4
    console.log('4. Iniciando chamada OpenAI')
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Você é um especialista em SEO, treinado para criar mapas de autoridade temática para websites. 
          Seu objetivo é ajudar na organização de conteúdo, dividindo um nicho principal em subnichos estratégicos 
          e subtemas que cubram completamente o assunto, de forma a maximizar relevância e visibilidade em motores de busca.

          REGRAS IMPORTANTES:
          1. Crie EXATAMENTE 10 páginas-pilar (subnichos principais)
          2. Para cada página-pilar, crie EXATAMENTE 5 subtemas
          3. Não repita subtemas ou tópicos
          4. Use linguagem precisa e específica, evitando termos genéricos
          5. Garanta que cada tópico siga as boas práticas de SEO semântico
          6. Adapte todo o conteúdo ao nicho e descrição fornecidos

          O plano deve ser estruturado em JSON com os seguintes campos:
          {
            "analise_nicho": "Análise estratégica do nicho, incluindo oportunidades de mercado e análise de concorrência",
            "paginas_pilar": [
              {
                "titulo": "Título específico e otimizado para SEO da página pilar",
                "url": "url-amigavel-com-palavras-chave",
                "descricao": "Descrição detalhada do propósito e conteúdo da página (150-200 caracteres)",
                "subtemas": [
                  {
                    "titulo": "Título específico do subtema",
                    "url": "url-amigavel-subtema",
                    "descricao": "Descrição detalhada do subtema (100-150 caracteres)",
                    "palavras_chave": ["palavra1", "palavra2", "palavra3", "frase chave"]
                  }
                ]
              }
            ],
            "recomendacoes_tecnicas": [
              "Lista detalhada de recomendações técnicas de SEO específicas para este nicho"
            ]
          }

          IMPORTANTE: Certifique-se que:
          1. Cada URL seja única e otimizada para SEO
          2. Cada título seja específico e direcionado
          3. Cada descrição seja informativa e única
          4. As palavras-chave sejam relevantes e específicas do subtema
          5. As recomendações técnicas sejam práticas e aplicáveis`
        },
        {
          role: 'user',
          content: `Gere um plano de conteúdo para um site sobre ${nicho} cuja descrição é: ${descricao}. ${site_link ? `Site atual: ${site_link}` : 'Site novo em desenvolvimento.'}`
        }
      ],
      temperature: 0.7,
      max_tokens: 7000
    })
    console.log('5. Resposta OpenAI recebida')

    try {
      const plano = JSON.parse(completion.choices[0].message.content || '{}')
      console.log('6. JSON parseado com sucesso')

      // Salvar no banco de dados
      console.log('7. Iniciando salvamento no Supabase')
      const { error: dbError } = await supabase
        .from('users_growthgrid')
        .insert([
          {
            email,
            nicho,
            descricao,
            site_link: site_link || null,
            page_url,
            plano
          }
        ])

      if (dbError) {
        console.error('8. Erro Supabase:', dbError)
        throw dbError
      }
      console.log('8. Dados salvos no Supabase')

      // Enviar email
      console.log('9. Iniciando envio de email')
      await resend.emails.send({
        from: 'Growth Grid - Webinhood <contato@webinhood.com.br>',
        to: email,
        subject: 'Seu Mapa de Autoridade Temática está pronto! 🎯',
        html: `
          <h1>Olá!</h1>
          <p>Seu mapa de autoridade temática para ${nicho} está pronto!</p>
          <p>Acesse seu plano completo aqui: <a href="https://growthgrid.webinhood.com.br${page_url}">Ver meu plano</a></p>
          <br>
          <p>Principais benefícios do seu mapa:</p>
          <ul>
            <li>Estrutura completa de conteúdo otimizada para SEO</li>
            <li>Palavras-chave estratégicas para cada página</li>
            <li>Recomendações técnicas para melhor ranqueamento</li>
          </ul>
          <br>
          <p>Comece a implementar hoje mesmo e veja seu site crescer nos resultados do Google!</p>
          <br>
          <p>Abraços,<br>Equipe Webinhood</p>
        `
      })
      console.log('10. Email enviado')

      return NextResponse.json({ success: true, url: page_url })
    } catch (parseError) {
      console.error('Erro ao processar resposta da OpenAI:', completion.choices[0].message.content)
      throw parseError
    }
  } catch (error) {
    console.error('Erro geral:', error)
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação' },
      { status: 500 }
    )
  }
}
