'use client'
import { Box, Container, SimpleGrid, VStack, Heading, Text, Card, CardBody, Image, useColorModeValue } from '@chakra-ui/react'
import SignupForm from '@/components/SignupForm'
import { FeaturesList } from '@/components/FeaturesList'

export default function Home() {
  const bgColor = useColorModeValue('#000', '#000')
  const cardBg = useColorModeValue('gray.950', 'gray.950')
  const borderColor = useColorModeValue('whiteAlpha.50', 'whiteAlpha.50')
  const textColor = useColorModeValue('#fff', '#fff')
  const subtitleColor = 'whiteAlpha.800'

  return (
    <Box 
      bg={bgColor} 
      minH="100vh" 
      py={20}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: `
          radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), 
          radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        bgPosition: '0 0, 10px 10px',
        opacity: 0.3,
        pointerEvents: 'none',
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex="1" py={20}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="start">
          {/* Lado Esquerdo - Apresentação */}
          <VStack spacing={12} align="start" py={0}>
            <Card 
              bg={bgColor} 
              borderWidth="0px" 
              borderColor={borderColor}
              w="full"
            >
              <CardBody p={8}>
                <Image
                  src="/img/growth-gridAtivo.png"
                  alt="Growth Grid Logo"
                  width={300}
                  height="auto"
                  mb={4}
                />
                <Heading
                  as="h1"
                  fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                  fontWeight="extrabold"
                  lineHeight="shorter"
                  mb={4}
                >
                  Comece a ranquear no Google agora!
                </Heading>
                <Text fontSize="3xl" color={subtitleColor} mb={8}>
                  Comece a ranquear no Google com a nossa ferramenta gratuita que gera uma estratégia personalizada para o seu negócio em poucos minutos:
                </Text>
                <FeaturesList textColor={textColor} />
              </CardBody>
            </Card>
          </VStack>

          {/* Lado Direito - Formulário */}
          <Box position="relative">
            <Card 
              bg={cardBg} 
              borderWidth="1px" 
              borderColor={borderColor}
              w="full"
            >
              <CardBody>
                <SignupForm />
              </CardBody>
            </Card>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
