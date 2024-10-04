/* eslint-disable chakra-ui/props-order */
import React from 'react'
import { Box, VStack, HStack, Text, Icon, Button, Link } from '@chakra-ui/react'
import { FaServer, FaDatabase } from 'react-icons/fa'
import { BsGpuCard } from "react-icons/bs";

enum ComputeTypes {
  CPU,
  GPU,
  TASK,
  STORAGE
}

// {
//   "occn-spec-name": "providers-offerings",
//   "occn-spec-version": "1",
//   "provider-name": "The name of the cloud service provider offering this resource",
//   "resourceId": "A unique identifier for this specific compute instance resource",
//   "computeType": "The type of resource being described (in this case, a compute instance)",
//   "requiredSpecifications": {
//     "compute": {
//       "GPU": "Information about the GPU"
//     },
//     "memory": {
//       "RAM": "The amount of RAM available"
//     },
//     "storage": "Details about the storage capacity",
//     "usecases": [
//       "A list of intended use cases for this instance"
//     ]
//   },
//   "xaas": {
//     "presence": "The type of \"as a Service\" offering",
//     "template name": "The name of the instance template",
//     "version": "The version of the template"
//   },
//   "other": {
//     "pythonVersion": "The version of Python installed",
//     "packages": [
//       "A list of pre-installed Python packages"
//     ]
//   },
//   "endpoint": "The API endpoint for accessing these compute instances"
// }

interface ResourceCardProps {
  computeType : ComputeTypes //
  version : string
  providerName: string //
  resourceId : string  
  occSpecVersion : String
  occSpecName : String //
  storage : string //
  memory : string //
  compute : string //
  endpoint : string
  usecases : [string]
  // location: string
  pythonVersion : string
  xaas : {
    presence : string
    templateName: string,
    version: string
  }
}

interface MyComponentProps {
  resourceCard: ResourceCardProps; // The prop will be an object of type User
}

const ResourceCard: React.FC<MyComponentProps> = ({ resourceCard }) => {
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
    >
      <VStack align="stretch" spacing={3}>
        <HStack spacing={3}>
          <Icon as={ resourceCard.computeType == ComputeTypes.GPU ? BsGpuCard : (resourceCard.computeType == ComputeTypes.STORAGE ? FaDatabase : FaServer)} boxSize={6} color="gray.400" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="lg">
              {resourceCard.providerName}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {resourceCard.occSpecName}
            </Text>
          </VStack>
        </HStack>
        <VStack align="stretch" spacing={2}>
          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.400">
              Type
            </Text>
            <Text fontSize="sm">{resourceCard.computeType == 1  ?  "CPU" : "GPU" }</Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.400">
              Data Storage
            </Text>
            <Text fontSize="sm">{resourceCard.storage}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.400">
              Memory
            </Text>
            <Text fontSize="sm">{resourceCard.memory}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.400">
              Compute
            </Text>
            <Text fontSize="sm">{resourceCard.compute}</Text>
          </HStack>
          {/* <HStack justify="space-between">
            <Text fontSize="sm" color="gray.400">
            Use Cases
            </Text>
            <Text fontSize="sm">{resourceCard.usecases.map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(', ')}</Text>
          </HStack> */}
          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.400" >
              Python Version
            </Text>
            <Text fontSize="sm">{resourceCard.pythonVersion}</Text>
          </HStack>
          {/* <HStack justify="space-between">
            <Text fontSize="sm" color="#4ade80" >
              Python Version
            </Text>
            <Text fontSize="sm" color="#53df53">{resourceCard.pythonVersion}</Text>
          </HStack> */}
        </VStack>
        <div className="mt-6">
        <Link  href={resourceCard.endpoint} isExternal>
          <Button w="full" bgGradient="linear(to-r, pink.500, purple.500)" color="white" _hover={{ bgGradient: "linear(to-r, pink.600, purple.600)" }}>
            Get Started
          </Button>
        </Link>
        
            </div>
      </VStack>
    </Box>
  )
}

export { ResourceCard, ComputeTypes };
export type { ResourceCardProps };

// import Image from 'next/image'
// import { Flex, Text, Card, CardBody, CardFooter, Divider, Stack, Heading, Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react'


// const ResourceCard = () => {

//   let boxBg = useColorModeValue("white !important", "#111c44 !important");
//   let mainText = useColorModeValue("gray.800", "white");
//   let secondaryText = useColorModeValue("gray.400", "gray.400");

//   return (
//     <Card maxW='sm' bg="blackAlpha.900">
//       <CardBody>
//         <Image
//           src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//           alt='Green double couch with wooden legs'
//           borderRadius='lg'
//         />
//         <Stack mt='6' spacing='3'>
//           <Heading size='md'>Living room Sofa</Heading>
//           <Text>
//             This sofa is perfect for modern tropical spaces, baroque inspired
//             spaces, earthy toned spaces and for people who love a chic design with a
//             sprinkle of vintage design.
//           </Text>
//           <Text color='blue.600' fontSize='2xl'>
//             $450
//           </Text>
//         </Stack>
//           <Flex direction='column'>
//             <div>
//               <Text
//                 color={mainText}
//                 fontSize='xl'
//                 fontWeight='600'
//                 textAlign='center'>
//                 274
//               </Text>
//               <Text color={secondaryText} fontWeight='500'>
//                 Following
//               </Text>
//             </div>
//             <div>
//               <Text
//                 color={mainText}
//                 fontSize='xl'
//                 fontWeight='600'
//                 textAlign='center'>
//                 274
//               </Text>
//               <Text color={secondaryText} fontWeight='500'>
//                 Following
//               </Text>
//             </div>
//             <div>
//               <Text
//                 color={mainText}
//                 fontSize='xl'
//                 fontWeight='600'
//                 textAlign='center'>
//                 274
//               </Text>
//               <Text color={secondaryText} fontWeight='500'>
//                 Following
//               </Text>
//             </div>
//           </Flex>
//       </CardBody>
//       <Divider />
//       <CardFooter>
//       <ButtonGroup spacing='2'>
//           <Button colorScheme='blue' variant='solid'>
//             Buy now
//           </Button>
//           <Button colorScheme='blue' variant='ghost'>
//             Add to cart
//           </Button>
//         </ButtonGroup>
//       </CardFooter>
//   </Card>
//   )
// }

// export default ResourceCard