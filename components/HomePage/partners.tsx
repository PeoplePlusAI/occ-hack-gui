import React from 'react'
import { Box, Flex, Image, Heading, Center, VStack } from '@chakra-ui/react'

interface Partner {
  name: string
  logo: string
}

const partners: Partner[] = [
  { name: 'Jarvislabs AI', logo: '/FrontendAssets/Providers/Jarvislabs_logo1.svg' },
  { name: 'Vigyanlabs', logo: '/FrontendAssets/Providers/VLLogo.png' },
  // { name: 'Partner 3', logo: '/logos/partner3.png' },
]

export default function OCCPartners() {
  return (
    <Flex as="section" align="center" alignSelf='center' py={12} bg="black">
      <VStack w="full" spacing={12}>
        <Heading as="h2" alignItems="center" color="white" textAlign="center" size="xl">
          OCC PARTNERS
        </Heading>
        <Flex align="center" justify="center" w="full" px={4}>
          {partners.map((partner) => (
            <Box key={partner.name} w={["33%", "25%", "20%"]} maxW="800px" mx={5}>
              <Image
                w="100%"
                h={["160px", "180px"]}
                objectFit="contain"
                alt={`${partner.name} logo`}
                fallbackSrc="/placeholder.png"
                src={partner.logo}
              />
              <Center fontSize={"2xl"}>{partner.name}</Center>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Flex>
  )
}