/* eslint-disable chakra-ui/require-specific-component */
/* eslint-disable chakra-ui/props-shorthand */
/* eslint-disable chakra-ui/props-order */


import React from 'react'
import { Box, Flex, Image, Heading, Center, VStack } from '@chakra-ui/react'

interface Partner {
  name: string
  logo: string
}

const partners: Partner[] = [
  { name: 'Jarvis Labs', logo: '/FrontendAssets/Providers/Jarvislabs_logo1.svg' },
  { name: 'Vigyan Labs', logo: '/FrontendAssets/Providers/VLLogo.png' },
  // { name: 'Partner 3', logo: '/logos/partner3.png' },
]

export default function OCCPartners() {
  return (
    <Box as="section" py={12} bg="black" display="flex" alignItems="center" alignSelf='center'>
      <VStack spacing={12} width="full">
        <Heading as="h2" size="xl" textAlign="center" color="white" alignItems="center">
          OCC PARTNERS
        </Heading>
        <Flex justifyContent="center" alignItems="center" width="full" px={4}>
          {partners.map((partner) => (
            <Box key={partner.name} width={["33%", "25%", "20%"]} maxWidth="800px" mx={5}>
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                objectFit="contain"
                width="100%"
                height={["160px", "180px"]}
                fallbackSrc="/placeholder.png"
              />
              <Center>{partner.name}</Center>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  )
}