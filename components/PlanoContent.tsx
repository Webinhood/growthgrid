'use client'

import { Box, Container, Heading, Text, VStack, Grid, GridItem, Card, CardBody, Badge, List, ListItem, Divider, Link, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import EducationalCarousel from '@/components/EducationalCarousel'

type PlanoContentProps = {
  planoData: any
}

export default function PlanoContent({ planoData }: PlanoContentProps) {
  const plano = planoData.plano

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        {/* Cabeçalho */}
        <Box textAlign="center" mb={8}>
          <Heading size="2xl" mb={4}>Seu plano personalizado</Heading>
          <Text fontSize="xl" color="gray.500">
            Estratégia completa de SEO e autoridade temática
          </Text>
        </Box>

        {/* Análise do Nicho */}
        <Card>
          <CardBody>
            <Heading size="lg" mb={4}>Análise do nicho</Heading>
            <Text>{plano.analise_nicho}</Text>
          </CardBody>
        </Card>

        {/* Páginas Pilar */}
        <Box>
          <Heading size="lg" mb={6}>Estrutura de conteúdo</Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
            {plano.paginas_pilar.map((pagina: any, index: number) => (
              <GridItem key={index}>
                <Card height="100%">
                  <CardBody>
                    <Accordion allowToggle>
                      <AccordionItem border="none">
                        <AccordionButton 
                          p={4} 
                          bg="gray.950" 
                          borderRadius="md"
                          _hover={{ bg: 'gray.900' }}
                          mb={2}
                        >
                          <Box flex="1" textAlign="left">
                            <Heading size="md">{pagina.titulo}</Heading>
                            <Text color="gray.500" fontSize="sm">
                              URL: /{pagina.url}
                            </Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Text mb={4}>{pagina.descricao}</Text>
                          <Divider mb={4} />
                          
                          <Box>
                            <Heading size="sm" mb={3}>Subtemas</Heading>
                            <Accordion allowToggle>
                              {pagina.subtemas.map((subtema: any, subIndex: number) => (
                                <AccordionItem key={subIndex} border="none">
                                  <AccordionButton 
                                    p={4} 
                                    bg="gray.900" 
                                    borderRadius="md"
                                    _hover={{ bg: 'gray.800' }}
                                    mb={2}
                                  >
                                    <Box flex="1" textAlign="left">
                                      <Heading size="xs">{subtema.titulo}</Heading>
                                      <Text fontSize="sm" color="gray.300">
                                        /{subtema.url}
                                      </Text>
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                  <AccordionPanel pb={4} px={4} bg="gray.950" borderRadius="md">
                                    <Text fontSize="sm" mb={4}>{subtema.descricao}</Text>
                                    <Box>
                                      {subtema.palavras_chave.map((palavra: string, palavraIndex: number) => (
                                        <Badge
                                          key={palavraIndex}
                                          px={3}
                                          py={1}
                                          mr={2}
                                          mb={2}
                                          borderRadius="full"
                                          backgroundColor="purple.500"
                                          color="white"
                                          fontSize="xs"
                                          fontWeight="medium"
                                          textTransform="lowercase"
                                          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
                                          _hover={{
                                            backgroundColor: "purple.400",
                                            transform: "translateY(-1px)",
                                            boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
                                          }}
                                          transition="all 0.2s ease-in-out"
                                        >
                                          {palavra}
                                        </Badge>
                                      ))}
                                    </Box>
                                  </AccordionPanel>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* Recomendações Técnicas */}
        <Card>
          <CardBody>
            <Heading size="lg" mb={4}>Recomendações Técnicas de SEO</Heading>
            <List spacing={3}>
              {plano.recomendacoes_tecnicas.map((rec: string, index: number) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <Box as="span" mr={2}>•</Box>
                  <Text>{rec}</Text>
                </ListItem>
              ))}
            </List>
          </CardBody>
        </Card>

        {/* Link do Site */}
        {planoData.site_link && (
          <Card>
            <CardBody>
              <Heading size="md" mb={4}>Site de Referência</Heading>
              <Link href={planoData.site_link} isExternal color="purple.500">
                {planoData.site_link} <ExternalLinkIcon mx="2px" />
              </Link>
            </CardBody>
          </Card>
        )}

        {/* Carrossel Educacional */}
        <Box mt={8}>
          <Heading size="lg" mb={6} textAlign="center">
            Como implementar seu mapa de autoridade temática
          </Heading>
          <EducationalCarousel />
        </Box>
      </VStack>
    </Container>
  )
}
