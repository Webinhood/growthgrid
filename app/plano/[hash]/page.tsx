import { supabase } from '@/lib/supabase'
import { Container, Heading, Text } from '@chakra-ui/react'
import PlanoContent from '@/components/PlanoContent'
import Header from '@/components/Header'

export default async function PlanoPage({ params }: { params: { hash: string } }) {
  const { data: planoData } = await supabase
    .from('users_growthgrid')
    .select('*')
    .eq('page_url', `/plano/${params.hash}`)
    .single()

  if (!planoData) {
    return (
      <>
        <Header />
        <Container maxW="container.xl" py={10}>
          <Heading>Plano não encontrado</Heading>
          <Text>O plano que você está procurando não existe ou foi removido.</Text>
        </Container>
      </>
    )
  }

  return (
    <>
      <Header />
      <PlanoContent planoData={planoData} />
    </>
  )
}