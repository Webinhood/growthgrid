'use client'

import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Select,
  Textarea,
  useToast,
  FormControl,
  FormLabel,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Checkbox,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { UserSubmission } from '@/types'
import { LoadingMessages } from './LoadingMessages'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
  email: z.string().email(),
  nicho: z.string().min(3),
  descricao: z.string().min(10),
  site_link: z.string().min(3),
  aceite_email: z.boolean(),
})

export default function SignupForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const toast = useToast()
  const { register, handleSubmit, formState: { errors } } = useForm<UserSubmission>({
    resolver: zodResolver(formSchema),
  })

  const textColor = '#fff'
  const subtitleColor = 'whiteAlpha.800'
  const inputBg = 'gray.900'
  const inputBorder = 'whiteAlpha.50'
  const cardBg = 'gray.900'

  const [formData, setFormData] = useState<UserSubmission>({
    email: '',
    nicho: '',
    descricao: '',
    site_link: '',
    aceite_email: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = async (data: UserSubmission) => {
    setLoading(true)

    try {
      // Validar dados antes de enviar
      formSchema.parse(data)

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const dataResponse = await response.json()

      if (!response.ok) {
        // Mostrar erros específicos de validação
        if (dataResponse.errors) {
          const errorMessages = dataResponse.errors
            .map((err: { field: string; message: string }) => err.message)
            .join('\n')
          throw new Error(errorMessages)
        }
        throw new Error(dataResponse.error || 'Erro ao enviar formulário')
      }

      // Enviar email com o link
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          page_url: dataResponse.pageUrl.startsWith('http') ? dataResponse.pageUrl : `${window.location.origin}${dataResponse.pageUrl}`
        }),
      })

      const emailData = await emailResponse.json()
      
      if (!emailResponse.ok) {
        throw new Error(emailData.details || emailData.error || 'Erro ao enviar email')
      }

      setSuccess(true)
    } catch (error) {
      toast({
        title: 'Erro',
        description: error instanceof Error ? error.message : 'Erro ao processar sua solicitação',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <VStack spacing={8} py={10}>
        <Box 
          as="span" 
          className="loading-spinner"
          w="50px"
          h="50px"
          display="inline-block"
          borderWidth="4px"
          borderStyle="solid"
          borderColor="purple.500"
          borderBottomColor="transparent"
          borderRadius="full"
          animation="spin 1s linear infinite"
          sx={{
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' }
            }
          }}
        />
        <LoadingMessages />
      </VStack>
    )
  }

  if (success) {
    return (
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        bg={cardBg}
        borderWidth="1px"
        borderColor={inputBorder}
        borderRadius="md"
      >
        <AlertIcon boxSize="40px" mr={0} color="purple.400" />
        <AlertTitle mt={4} mb={1} fontSize="lg" color={textColor}>
          Plano gerado com sucesso!
        </AlertTitle>
        <AlertDescription maxWidth="sm" color={subtitleColor}>
          Enviamos um email com o seu plano personalizado. 
          Verifique sua caixa de entrada.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <VStack spacing={6} align="stretch">
      <Box textAlign="left">
        <Heading color={textColor} size="lg" mb={2}>
          Comece agora
        </Heading>
        <Text color={subtitleColor}>
        Preencha o formulário abaixo e receba uma estratégia completa de conteúdo, projetado para posicionar sua empresa como autoridade no seu nicho. Totalmente grátis.
        </Text>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel color={textColor}>URL do seu site</FormLabel>
            <Input
              {...register('site_link')}
              value={formData.site_link}
              onChange={handleChange}
              placeholder="Ex: www.seusite.com.br"
              bg={inputBg}
              borderColor={inputBorder}
              color={textColor}
              _placeholder={{ color: 'whiteAlpha.500' }}
            />
            {errors.site_link && <Text color="red.500">{errors.site_link.message}</Text>}
          </FormControl>

          <FormControl isRequired>
            <FormLabel color={textColor}>Nicho principal</FormLabel>
            <Input
              {...register('nicho')}
              value={formData.nicho}
              onChange={handleChange}
              placeholder="Ex: Agência de viagens, nutrição, saúde..."
              bg={inputBg}
              borderColor={inputBorder}
              color={textColor}
              _placeholder={{ color: 'whiteAlpha.500' }}
            />
            {errors.nicho && <Text color="red.500">{errors.nicho.message}</Text>}
          </FormControl>

          <FormControl isRequired>
            <FormLabel color={textColor}>Descrição do negócio</FormLabel>
            <Textarea
              {...register('descricao')}
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Descreva seu negócio, produtos/serviços principais e público-alvo. Quanto mais detalhes, melhor será seu plano de conteúdo..."
              bg={inputBg}
              borderColor={inputBorder}
              color={textColor}
              _placeholder={{ color: 'whiteAlpha.500' }}
              maxLength={500}
            />
            {errors.descricao && <Text color="red.500">{errors.descricao.message}</Text>}
          </FormControl>

          <FormControl isRequired>
            <FormLabel color={textColor}>Email</FormLabel>
            <Input
              {...register('email')}
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              bg={inputBg}
              borderColor={inputBorder}
              color={textColor}
              _placeholder={{ color: 'whiteAlpha.500' }}
              type="email"
            />
            {errors.email && <Text color="red.500">{errors.email.message}</Text>}
          </FormControl>

          <FormControl isRequired>
            <Checkbox
              {...register('aceite_email')}
              name="aceite_email"
              onChange={handleChange}
              color={textColor}
              isRequired
            >
              Aceito receber e-mails informativos da Webinhood
            </Checkbox>
            {errors.aceite_email && <Text color="red.500">{errors.aceite_email.message}</Text>}
          </FormControl>

          <Button
            type="submit"
            colorScheme="purple"
            size="lg"
            fontSize="md"
            w="full"
            isLoading={loading}
          >
            Gerar minha estratégia
          </Button>
        </VStack>
      </form>
    </VStack>
  )
}
