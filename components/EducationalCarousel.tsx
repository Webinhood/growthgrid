'use client'

import React from 'react'
import { Box, Text, Heading, VStack, UnorderedList, ListItem } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const slides = [
  {
    title: "O que é um mapa de autoridade temática?",
    content: (
      <VStack spacing={4} align="start">
        <Text>
          Um mapa de autoridade temática é uma estratégia de organização de conteúdo para um site. A ideia é criar um guia completo sobre um nicho específico, cobrindo todos os tópicos relevantes de forma lógica e estruturada.
        </Text>
        <Text>
          Imagine que seu site é uma biblioteca e você quer ser a biblioteca mais confiável e completa sobre um assunto. Para isso, você precisa organizar as informações em seções principais e subtópicos detalhados.
        </Text>
      </VStack>
    )
  },
  {
    title: "Por que é importante?",
    content: (
      <VStack spacing={4} align="start">
        <Box>
          <Text fontWeight="bold">1) Melhora sua posição nos motores de busca (SEO):</Text>
          <UnorderedList>
            <ListItem>Sites que cobrem um assunto de forma completa têm mais chance de aparecer no topo das buscas.</ListItem>
            <ListItem>Google gosta de sites que respondem todas as dúvidas do usuário sobre um tema.</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontWeight="bold">2) Atrai mais visitantes:</Text>
          <UnorderedList>
            <ListItem>Ao cobrir vários tópicos dentro de um nicho, você atinge mais palavras-chave.</ListItem>
            <ListItem>Mais páginas relevantes = mais tráfego orgânico.</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontWeight="bold">3) Constrói confiança e autoridade:</Text>
          <UnorderedList>
            <ListItem>Se você é o "especialista" em um assunto, as pessoas voltarão ao seu site.</ListItem>
            <ListItem>Isso aumenta o tempo que as pessoas passam no site, algo que o Google valoriza.</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontWeight="bold">4) Facilita a navegação no site:</Text>
          <UnorderedList>
            <ListItem>Uma estrutura clara ajuda os visitantes a encontrar o que precisam.</ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    )
  },
  {
    title: "Como começar um mapa de autoridade temática",
    content: (
      <VStack spacing={4} align="start">
        <Box>
          <Text fontWeight="bold">1. Escolha um nicho principal</Text>
          <Text>Pense no tema principal do seu site ou negócio.</Text>
          <Text>Exemplo: Se você é nutricionista, o nicho pode ser "alimentação saudável".</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">2. Divida o nicho em subnichos (páginas-pilar)</Text>
          <Text>Que grandes temas existem dentro do nicho?</Text>
          <Text>Exemplo para "alimentação saudável":</Text>
          <UnorderedList>
            <ListItem>Receitas saudáveis</ListItem>
            <ListItem>Alimentos funcionais</ListItem>
            <ListItem>Dicas de nutrição para crianças</ListItem>
            <ListItem>Dietas para perda de peso</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontWeight="bold">3. Crie subtemas para cada subnicho</Text>
          <Text>Exemplo para "Receitas Saudáveis":</Text>
          <UnorderedList>
            <ListItem>Receitas veganas</ListItem>
            <ListItem>Receitas low carb</ListItem>
            <ListItem>Sobremesas saudáveis</ListItem>
            <ListItem>Receitas para marmitas</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontWeight="bold">4. Planeje a estrutura do site</Text>
          <Text>Organize as informações como um menu hierárquico.</Text>
        </Box>
      </VStack>
    )
  },
  {
    title: "Dica: Pesquise o que as pessoas estão procurando",
    content: (
      <VStack spacing={4} align="start">
        <Text>
          Use ferramentas como Google Trends, Ubersuggest, ou SEMrush para encontrar as dúvidas mais comuns no seu nicho.
        </Text>
        <Text>
          Exemplo: "Como fazer pão sem glúten?" pode ser um tópico importante para "Receitas Saudáveis".
        </Text>
      </VStack>
    )
  },
  {
    title: "Dica: Use palavras-chave de forma estratégica",
    content: (
      <VStack spacing={4} align="start">
        <Text>
          Cada página deve focar em um tema específico e incluir as palavras que as pessoas pesquisam.
        </Text>
        <Text>
          Exemplo: Para "Benefícios do Ômega 3", inclua palavras como "benefícios", "ômega 3", "peixes ricos em ômega 3".
        </Text>
      </VStack>
    )
  },
  {
    title: "Dica: Evite duplicar ideias",
    content: (
      <VStack spacing={4} align="start">
        <Text>
          Cada página deve abordar um único tópico. Se for parecido, divida em dois conteúdos.
        </Text>
        <Text>
          Exemplo: Não misture "Receitas Veganas" com "Receitas Sem Glúten" na mesma página.
        </Text>
      </VStack>
    )
  },
  {
    title: "Dica: Atualize sempre",
    content: (
      <VStack spacing={4} align="start">
        <Text>
          O que é relevante hoje pode mudar amanhã. Volte aos seus conteúdos e atualize-os com novidades do mercado.
        </Text>
      </VStack>
    )
  },
  {
    title: "Links Internos são Ouro",
    content: (
      <VStack spacing={4} align="start">
        <Text>
          Conecte suas páginas usando links. Isso ajuda o Google a entender como o conteúdo está relacionado.
        </Text>
        <Text>
          Exemplo: Na página "Receitas Low Carb", inclua um link para "Dietas para Perda de Peso".
        </Text>
      </VStack>
    )
  }
]

export default function EducationalCarousel() {
  return (
    <Box
      maxW="800px"
      mx="auto"
      p={4}
      bg="gray.900"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
    >
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
        stopOnHover={true}
      >
        {slides.map((slide, index) => (
          <Box key={index} p={8} textAlign="left" minH="400px">
            <Heading as="h3" size="lg" mb={6} color="white">
              {slide.title}
            </Heading>
            <Box color="whiteAlpha.900">
              {slide.content}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}
