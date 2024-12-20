'use client'

import { VStack, HStack, Text, Icon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

interface FeaturesListProps {
  textColor: string
}

export function FeaturesList({ textColor }: FeaturesListProps) {
  const features = [
    'Apareça mais nas buscas do Google',
    'Descubra os temas mais importantes do seu nicho',
    'Planejamento de conteúdo para o ano inteiro',
    'Posicione-se como referência para seus clientes',
    'Geramos o plano, você só precisa colocar em prática'
  ]

  return (
    <VStack spacing={3} align="start">
      {features.map((feature, index) => (
        <HStack key={index} spacing={3}>
          <Icon as={CheckCircleIcon} boxSize={5} color="purple.400" />
          <Text color={textColor} fontSize="xl">{feature}</Text>
        </HStack>
      ))}
    </VStack>
  )
}
