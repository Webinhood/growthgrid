# Growth Grid - Mapa de Autoridade Temática

Growth Grid é uma aplicação web que gera mapas de autoridade temática personalizados para SEO, utilizando IA para criar estratégias de conteúdo sob medida para cada site.

## 🚀 Funcionalidades

### Landing Page
- Design moderno e minimalista com tema dark
- Grid de fundo animado
- Apresentação clara da proposta de valor
- Formulário de captura simplificado
- Lista de benefícios do plano

### Formulário de Cadastro
- Coleta simplificada de informações:
  - URL do site
  - Email para contato
- Feedback em tempo real
- Validação de campos

### Integração com Supabase
- Armazenamento seguro dos dados
- Geração de URLs únicas para cada plano
- Sistema de hash para URLs seguras
- Persistência do plano gerado

### Integração com OpenAI
#### Input
- Análise do site de referência
- Processamento do nicho e contexto
- Identificação de oportunidades de SEO

#### Output
- Geração de plano personalizado incluindo:
  - Análise detalhada do nicho
  - Estrutura de conteúdo completa
  - Páginas pilar com subtemas
  - Palavras-chave estratégicas
  - Recomendações técnicas de SEO

### Página do Plano
- Layout intuitivo com seções colapsáveis
- Estrutura organizada:
  - Análise do nicho
  - Estrutura de conteúdo
  - Páginas pilar e subtemas
  - Palavras-chave por tema
  - Recomendações técnicas
- Carrossel educativo com dicas de implementação
- Design responsivo e tema dark consistente

### Sistema de Emails
- Integração com Resend para envio de emails
- Template personalizado com:
  - Confirmação de geração do plano
  - Link direto de acesso
  - Principais benefícios
  - Instruções de implementação
- Rastreamento de entrega

## 🛠 Tecnologias Utilizadas

- **Frontend**: Next.js 13, Chakra UI
- **Backend**: Next.js API Routes
- **Database**: Supabase
- **AI**: OpenAI GPT-4
- **Email**: Resend
- **Estilização**: Chakra UI + CSS personalizado
- **Deploy**: Vercel

## 🔧 Variáveis de Ambiente

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_supabase
OPENAI_API_KEY=sua_chave_openai
RESEND_API_KEY=sua_chave_resend
```

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Webinhood/growthgrid.git

# Entre no diretório
cd growthgrid

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🌐 Estrutura do Projeto

```
growthgrid/
├── app/                    # Páginas e rotas da aplicação
│   ├── api/               # Endpoints da API
│   ├── plano/            # Página do plano gerado
│   └── page.tsx          # Landing page
├── components/            # Componentes reutilizáveis
├── public/               # Arquivos estáticos
└── styles/               # Estilos globais
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👥 Autores

- **Webinhood** - [Github](https://github.com/Webinhood)

## 📧 Contato

Webinhood - [Website](https://webinhood.com.br)
