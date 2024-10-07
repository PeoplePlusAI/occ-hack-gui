/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable chakra-ui/require-specific-component */
/* eslint-disable chakra-ui/props-shorthand */
/* eslint-disable chakra-ui/props-order */

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
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      shadow="md"
      bg="secondary"
      maxW="sm"
      minW="16.5em"
      borderColor="blue.200"
      onClick={onOpen}
    >
      <VStack align="stretch" spacing={3}>
      <HStack spacing={3}>
          <Icon as={ resourceCard.computeType == ComputeTypes.GPU ? BsGpuCard : (resourceCard.computeType == ComputeTypes.STORAGE ? FaDatabase : FaServer)} boxSize={8} color="white" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="3xl" color="gray.400" align="center">
              {resourceCard.providerName}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {resourceCard.occSpecName}
            </Text>
          </VStack>
        </HStack>
        <VStack align="stretch" spacing={2}>
          <HStack justify="space-between">
            <Text fontSize="md" color="gray.400">
              Type
            </Text>
            <Text fontSize="md">{resourceCard.computeType == 1  ?  "GPU" : "CPU" }</Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="md" color="gray.400">
              Data Storage
            </Text>
            <Text fontSize="md">{resourceCard.storage}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="md" color="gray.400">
              Memory
            </Text>
            <Text fontSize="md">{resourceCard.memory}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="md" color="gray.400">
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
            <Text fontSize="md" color="gray.400" >
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
            bgGradient="linear(to-r, pink.500, purple.500)" 
            color="white" 
            _hover={{ bgGradient: "linear(to-r, pink.600, purple.600)" }}
            onClick={onOpen}
          >
            Get Started
          </Button>
        </div>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent backgroundColor="black" border="3px solid #4ade80">
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link href={resourceCard.endpoint} isExternal>
              <Button bgGradient="linear(to-r, pink.500, purple.500)" 
            color="white" 
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