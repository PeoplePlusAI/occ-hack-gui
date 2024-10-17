import React, { useState } from 'react'
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

  return (
    <Box
      minW="16.5em"
      maxW="sm"
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
      <HStack spacing={3}>
          <Icon as={ resourceCard.computeType == ComputeTypes.GPU ? BsGpuCard : (resourceCard.computeType == ComputeTypes.STORAGE ? FaDatabase : FaServer)} boxSize={8} color="white" />
          <VStack align="start" spacing={0}>
            <Text align="center" color="gray.400" fontSize="3xl" fontWeight="bold">
              {resourceCard.providerName}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {resourceCard.occSpecName}
            </Text>
          </VStack>
        </HStack>
        <VStack align="stretch" spacing={2}>
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="md">
              Type
            </Text>
            <Text fontSize="md">{resourceCard.computeType == 1  ?  "GPU" : "CPU" }</Text>
          </HStack>
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="md">
              Data Storage
            </Text>
            <Text fontSize="md">{resourceCard.storage}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="md">
              Memory
            </Text>
            <Text fontSize="md">{resourceCard.memory}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="md">
              Compute
            </Text>
            <Text fontSize="md">{resourceCard.compute}</Text>
          </HStack>
          {/* <HStack justify="space-between">
            <Text fontSize="md" color="gray.400">
            Use Cases
            </Text>
            <Text fontSize="md">{resourceCard.usecases.map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(', ')}</Text>
          </HStack> */}
          <HStack justify="space-between">
            <Text color="gray.400" fontSize="md" >
              Python Version
            </Text>
            <Text fontSize="md">{resourceCard.pythonVersion}</Text>
          </HStack>
          {/* <HStack justify="space-between">
            <Text fontSize="md" color="#4ade80" >
              Python Version
            </Text>
            <Text fontSize="md" color="#53df53">{resourceCard.pythonVersion}</Text>
          </HStack> */}
        </VStack>
        <div className="mt-6">
          <Button 
            w="full" 
            color="white" 
            bgGradient="linear(to-r, pink.500, purple.500)" 
            _hover={{ bgGradient: "linear(to-r, pink.600, purple.600)" }}
            onClick={onOpen}
          >
            Get Started
          </Button>
        </div>
      </VStack>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent border="3px solid #4ade80" bgColor="black">
          <ModalHeader>{resourceCard.providerName} - Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <VStack align="stretch" spacing={4}>
              <Text><strong>Resource ID:</strong> {resourceCard.resourceId}</Text>
              <Text><strong>Compute Type:</strong> {ComputeTypes[resourceCard.computeType]}</Text>
              <Text><strong>Storage:</strong> {resourceCard.storage}</Text>
              <Text><strong>Memory:</strong> {resourceCard.memory}</Text>
              <Text><strong>Compute:</strong> {resourceCard.compute}</Text>
              <Text><strong>Python Version:</strong> {resourceCard.pythonVersion}</Text>
              <Text><strong>Use Cases:</strong> {resourceCard.useCases.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ')}</Text>
              <Text><strong>XaaS:</strong> {resourceCard.xaas.presence} (Template: {resourceCard.xaas.templateName}, Version: {resourceCard.xaas.version})</Text>
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