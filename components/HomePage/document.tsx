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
      mt={10}
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
        <Text minH={"150px"} color={textColor} fontSize="md" textAlign={"justify"}>
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
    <Box px={0} py={6} bg={bgColor}>
      <VStack maxW="80%" mx="auto" spacing={8}>
        <Heading as="h1" color={textColor} textAlign="center" size="2xl">
           Quick Links
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <DocumentCard
            title="Submit Your Use Case"
            description="Are you are changing the way we do finances with Gen AI or improving healthcare in a remote town of India? 
If you have a great project or startup idea, submit it here. Top 10 teams- your compute is on us!"
            icon={FaPencilAlt}
            onClick={() => window.open('https://pplus.ai/occusecase', '_blank')}
          />
          <DocumentCard
            title="More about People+AI"
            description="Discover our projects or volunteer with us"
            icon={FaFileAlt}
            onClick={() => window.open('https://peopleplus.ai/', '_blank')}
          />
          <DocumentCard
            title="Search resource by use case"
            description="Compute for all- developers, startups and enterpises at OCC. Find your compute in minutes with our use case navigation and universal search features."
            icon={FaSearch}
            onClick={() => window.open('/resources', '_self')}
          />
        </SimpleGrid>
      </VStack>
    </Box>
  )
}