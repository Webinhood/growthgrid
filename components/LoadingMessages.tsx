'use client'

import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const messages = [
  "Analisando seu nicho e mercado...",
  "Identificando oportunidades de conteúdo...",
  "Estruturando suas páginas-pilar...",
  "Mapeando subtemas estratégicos...",
  "Otimizando URLs e meta tags...",
  "Definindo palavras-chave principais...",
  "Finalizando sua estratégia de conteúdo..."
]

export function LoadingMessages() {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        // Se não for a última mensagem, avança para a próxima
        if (prev < messages.length - 1) {
          return prev + 1
        }
        // Se for a última mensagem, mantém ela
        return prev
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Text
      color="whiteAlpha.800"
      fontSize="lg"
      textAlign="center"
      animation="pulse 2s infinite"
      sx={{
        '@keyframes pulse': {
          '0%': { opacity: 0.6 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.6 }
        }
      }}
    >
      {messages[currentMessage]}
    </Text>
  )
}
