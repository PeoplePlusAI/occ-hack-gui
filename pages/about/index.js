import { useState } from 'react'
import { Stack, Heading, Text,Image,Flex,Box } from '@chakra-ui/react'
import Container from '../../components/Container'
import useMediaQuery from '../../hook/useMediaQuery'
import TeamMembers from '../../components/TeamMembers' 
export default function About() {

    const [currentSelection, setSelection] = useState();
    const isLargerThan800 = useMediaQuery(800)    

  return (
    <>
      <Container>
        <Stack
          justifyContent="center"
          my={{ base: '15vh', md: '16vh' }}
          spacing={10}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              About Us
            </Heading>
            <Flex justifyContent="space-between" alignItems="center" width="full" px={4} direction={{ base: 'column', md: 'row' }}>
            <Text fontSize={{ base: '16px', md: '20px' }} mr={10} width={'75%'}>
            Open Cloud Compute (OCC) is an initiative launched by the EkStep Foundation in India to create a decentralized and interoperable cloud computing network. We aim to connect independent micro data centers, enhancing access to computing resources while promoting local data sovereignty. By fostering competition among smaller providers, we seeks to democratize cloud services, making them more accessible and affordable for businesses of all sizes.
            </Text>
            <Box
            position="relative"
            width="fit-content"
            _before={{
                content: '""',
                position: "absolute",
                top: "-3px",
                right: "-3px",
                bottom: "-3px",
                left: "-3px",
                background: "blue.300",
                filter: "blur(15px)",
                borderRadius: "lg",
            }}
            >
            <Image
            src='/AboutOCC.jpeg'
            alt={` logo`}
            boxSize="270px"
            objectFit="cover"
            borderRadius="lg"
            position="relative"
            fallbackSrc="/placeholder.png" 
            zIndex={1}
            />
            </Box>
            </Flex>
            <TeamMembers />
            
          </Stack>
          
        </Stack>
      </Container>
    </>
  )
}
