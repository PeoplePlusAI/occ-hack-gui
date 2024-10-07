/* eslint-disable chakra-ui/require-specific-component */
/* eslint-disable chakra-ui/props-shorthand */
/* eslint-disable chakra-ui/props-order */


import React from 'react'
import { Box, Flex, Image, Heading, Center, VStack,SimpleGrid } from '@chakra-ui/react'


const contributors = [
  { name: 'John Doe', photo: '/FrontendAssets/Contributors/human.jpg',role:'Developer' },
  { name: 'John Doe', photo: '/FrontendAssets/Contributors/human.jpg',role:'Developer' },
  { name: 'John Doe', photo: '/FrontendAssets/Contributors/human.jpg',role:'Developer' },
  { name: 'John Doe', photo: '/FrontendAssets/Contributors/human.jpg',role:'Developer' },
  { name: 'John Doe', photo: '/FrontendAssets/Contributors/human.jpg',role:'Developer' },
  { name: 'John Doe', photo: '/FrontendAssets/Contributors/human.jpg',role:'Developer' },
  { name: 'John Doe', photo: '/FrontendAssets/Contributors/human.jpg',role:'Developer' },
  { name: 'John Doe', photo: '/FrontendAssets/Contributors/human.jpg',role:'Developer' },
  // { name: 'Partner 3', logo: '/logos/partner3.png' },
]

export default function Contributors() {
  return (
    <Box as="section" py={12} bg="black" display="flex" alignItems="center" alignSelf='center'>
      <VStack spacing={12} width="full">
        <Heading as="h2" size="xl" textAlign="center" color="white" alignItems="center">
        Team Members
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={24} >
          {contributors.map((contributor) => (
            <Box key={contributor.name} maxWidth="800px" mx={2} my={4}>
              <Image
                src={contributor.photo}
                alt={`${contributor.name} logo`}
                objectFit="strech"
                width="200px"
                height="200px"
                borderRadius="full"
                fallbackSrc="/placeholder.png"
              />
              <Center fontSize={"28px"} mt={4}>{contributor.name}</Center>
              <Center fontSize={"18px"}>{contributor.role}</Center>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}