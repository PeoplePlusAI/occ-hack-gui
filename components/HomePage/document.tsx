/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Box, Heading, SimpleGrid, Text, Button, VStack, Icon, useColorModeValue, HStack,Link } from '@chakra-ui/react'
import { FaPencilAlt, FaSearch, FaFileAlt } from 'react-icons/fa'

const DocumentCard = ({ title, description,  icon, onClick }) => {
  const bgColor = ''
  const textColor = useColorModeValue('gray.100', 'gray.200')
  const buttonBg = 'button1'
  const borderColour ='white'
  const buttonHoverBg = "#23b075"

  return (
    <Box
      p={6}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColour}
      borderRadius="lg"
      shadow="xl"
      _hover={{ transform: 'translateY(-5px)' }}
      transition="all 0.3s"
    >
      <VStack align="start" spacing={4}>
        <HStack minH={20}>
          <Icon as={icon} w={12} h={8} px={2} color={textColor} />
          <Text color={textColor} fontSize="2xl" fontWeight="bold" >
            {title}
          </Text>
        </HStack>
        <Text color={textColor} fontSize="md">
          {description}
        </Text>
        <Button
          color="white"
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          onClick={onClick}
        >
          Click Here
        </Button>
      </VStack>
    </Box>
  )
}

export default function DocumentComponent() {
  const bgColor = useColorModeValue('black', 'black')
  const textColor = useColorModeValue('gray.100', 'gray.200')

  return (
    <Box px={0} py={12} bg={bgColor}>
      <VStack align="stretch" maxW="1200px" mx="auto" spacing={8}>
        <Heading as="h1" color={textColor} textAlign="center" size="2xl">
           Quick Links
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <DocumentCard
            title="Submit Your Use Case"
            description="Your Compute is on us if you have a great idea!"
            icon={FaPencilAlt}
            onClick={() => window.open('https://peopleplus.ai/', '_blank')}
          />
          <DocumentCard
            title="More about People+AI"
            description="Your Compute is on us if you have a great idea!"
            icon={FaFileAlt}
            onClick={() => console.log('Q1 2024 Project Update clicked')}
          />
          <DocumentCard
            title="Search resource by use case"
            description="Your Compute is on us if you have a great idea!"
            icon={FaSearch}
            onClick={() => window.open('/resources', '_self')}
          />
        </SimpleGrid>
      </VStack>
    </Box>
  )
}