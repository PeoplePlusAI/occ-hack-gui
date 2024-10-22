import { useState } from 'react'
import { Stack, Heading, Text,Image,Flex,Box } from '@chakra-ui/react'
import Container from '../../components/Container'
import useMediaQuery from '../../hook/useMediaQuery'
import TeamMembers from '../../components/TeamMembers' 
import Header from '../../components/Header'

export default function About() {

    const [currentSelection, setSelection] = useState();
    const isLargerThan800 = useMediaQuery(800)    

  return (
    <>
      <Header title="About Us - OCC" />
      <Container>
        <Stack
          justifyContent="center"
          maxW={{base:"90%",md:"75%"}}
          my={{ base: '15vh', md: '16vh' }}
          spacing={10}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              About Us
            </Heading>
            <Flex align="start" justify="space-between" direction={{ base: 'column', md: 'row' }} w="full" px={4}>
            <Text align="justify" w={{base:"90%",md:'75%'}} mr={{base:0,md:10}}mb={{base:5,md:0}} fontSize={{ base: '16px', md: '20px' }}>
            Open Cloud Compute (OCC) is an initiative launched by the EkStep Foundation in India to create a decentralized and interoperable cloud computing network. We aim to connect independent micro data centers, enhancing access to computing resources while promoting local data sovereignty. By fostering competition among smaller providers, we seeks to democratize cloud services, making them more accessible and affordable for businesses of all sizes.
            </Text>
            <Box
            pos="relative"
            w="fit-content"
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
            pos="relative"
            zIndex={1}
            boxSize="270px"
            borderRadius="lg"
            objectFit="cover"
            alt={` logo`}
            fallbackSrc="/placeholder.png" 
            src='/AboutUs.jpeg'
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
