'use client'

import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box 
      as="header" 
      py={4} 
      px={8} 
      borderBottom="1px" 
      borderColor="gray.700"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src="/img/growth-gridAtivo.png"
        alt="Growth Grid Logo"
        width={180}
        height={40}
        style={{ height: 'auto' }}
        priority
      />
    </Box>
  )
}
