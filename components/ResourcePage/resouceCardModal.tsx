import React, { useEffect, useState } from 'react'
import { Box, VStack, HStack, Text, Icon, Button, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { FaServer, FaDatabase } from 'react-icons/fa'
import { BsGpuCard } from "react-icons/bs"

enum ComputeTypes {
  CPU,
  GPU,
  TASK,
  STORAGE
}

interface ResourceCardProps {
  computeType: ComputeTypes
  version: string
  providerName: string
  resourceId: string  
  occSpecVersion: string
  occSpecName: string
  storage: string
  memory: string
  compute: string
  endpoint: string
  useCases: string[]
  pythonVersion: string
  xaas: {
    presence: string
    templateName: string,
    version: string
  }
}

interface MyComponentProps {
  resourceCard: ResourceCardProps
}

const ResourceCard: React.FC<MyComponentProps> = ({ resourceCard }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fontSize, setFontSize] = useState('3xl');


    useEffect(() => {
      const textLength = resourceCard?.xaas?.templateName?.length || 0;

      // Adjust font size based on text length
      if (textLength > 30) {
        setFontSize('sm'); // smaller font for longer text
      } else if (textLength > 15) {
        setFontSize('xl'); // medium font for moderate length
      } else {
        setFontSize('3xl'); // default large font
      }
    }, [resourceCard]);

  return (
    <Box
      minW="20em"
      maxW="xl"
      p={4}
      bg="secondary"
      borderWidth="1px"
      borderColor="blue.200"
      borderRadius="lg"
      shadow="md"
      _hover={{ cursor: "pointer" }}
      onClick={onOpen}
    >
      <VStack align="stretch" spacing={3}>
        <HStack h="3em" spacing={3}>
          <Icon as={ resourceCard.computeType == ComputeTypes.GPU ? BsGpuCard : (resourceCard.computeType == ComputeTypes.STORAGE ? FaDatabase : FaServer)} boxSize={8} color="white" />
          <VStack align="center" spacing={0}>
            <Text align="center" color="gray.400" fontSize={fontSize} fontWeight="bold">
              {resourceCard.xaas.templateName}
            </Text>
            {/* <Text color="gray.500" fontSize="sm">
              {resourceCard.occSpecName}
            </Text> */}
          </VStack>
        </HStack>
        <VStack align="stretch" spacing={2} style={{ marginTop: '20px' }}>
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="xl">
              Type
            </Text>
            <Text fontSize="xl">{resourceCard.computeType == 1  ?  "GPU" : "CPU" }</Text>
          </HStack>
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="xl">
              Provider
            </Text>
            <Text fontSize="xl">{resourceCard.providerName}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="xl">
              Data Storage
            </Text>
            <Text fontSize="xl">{resourceCard.storage}</Text>
          </HStack>
          {/* <HStack justify="space-between">
            <Text color="gray.400" fontSize="xl">
              Memory
            </Text>
            <Text fontSize="xl">{resourceCard.memory}</Text>
          </HStack> */}
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="xl">
              Compute
            </Text>
            <Text fontSize="xl">{resourceCard.compute}</Text>
          </HStack>
          {/* <HStack justify="space-between">
            <Text fontSize="xl" color="gray.400">
            Use Cases
            </Text>
            <Text fontSize="xl">{resourceCard.usecases.map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(', ')}</Text>
          </HStack> */}
          {/* <HStack justify="space-between">
            <Text fontSize="xl" color="#4ade80" >
              Python Version
            </Text>
            <Text fontSize="xl" color="#53df53">{resourceCard.pythonVersion}</Text>
          </HStack> */}
        </VStack>

        <div className="mt-6" style={{ marginTop: '30px' }}>
          <Button 
            w="full" 
            color="white" 
            bgGradient="linear(to-r, #3CCF91, #3CCF91)" 
            _hover={{ bgGradient: "linear(to-r, #23b075, #23b075)" }}
            onClick={onOpen}
          >
            <Text fontSize="xl">Get Started</Text>
          </Button>
        </div>
      </VStack>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent border="3px solid #4ade80" bgColor="black">
          <ModalHeader>{resourceCard.xaas.templateName} - Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <VStack align="stretch" spacing={4}>
              {/* <Text><strong>Resource ID:</strong> {resourceCard.resourceId}</Text> */}
              <Text><strong>Compute Type:</strong> {ComputeTypes[resourceCard.computeType]}</Text>
              <Text><strong>Storage:</strong> {resourceCard.storage}</Text>
              <Text><strong>Provider:</strong> {resourceCard.providerName}</Text>
              {/* <Text><strong>Memory:</strong> {resourceCard.memory}</Text> */}
              <Text><strong>Compute:</strong> {resourceCard.compute}</Text>
              {/* <Text><strong>Python Version:</strong> {resourceCard.pythonVersion}</Text> */}
              <Text><strong>Use Cases:</strong> {resourceCard.useCases.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ')}</Text>
              {/* <Text><strong>XaaS:</strong> {resourceCard.xaas.presence} (Template: {resourceCard.xaas.templateName}, Version: {resourceCard.xaas.version})</Text> */}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} colorScheme="blue" onClick={onClose}>
              Close
            </Button>
            <Link href={resourceCard.endpoint} isExternal>
              <Button color="white" 
            bgGradient="linear(to-r, pink.500, purple.500)" 
            _hover={{ bgGradient: "linear(to-r, pink.600, purple.600)" }} >Go to Resource</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export { ResourceCard, ComputeTypes }
export type { ResourceCardProps }