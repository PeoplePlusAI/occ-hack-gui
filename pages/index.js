import { Stack,Button,Box,Text, Flex } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/HomePage/Introduction'
import OCCPartners from '../components/HomePage/partners'
import YoutubeVideo from '../components/HomePage/YoutubeVideo'
import FeaturedArticles from '../components/HomePage/FeaturedArticles'
import Countdown from '../components/HomePage/Countdown'
import Header from '../components/Header'

export default function Index({ introduction }) {
  
  return (
    <>
      <Header />
      <Container enableTransition={true} >
        <Stack
          as="main"
          alignItems="flex-start"
          justifyContent="center"
          mt={{ base: '15vh', md: '20vh' }}
          pb="144px"
          spacing={{ base: '100px', md: '144px' }}
          // resize={vantaRef}
        >
          <br />
          <Introduction introduction={introduction} />
          <br />
          <Countdown targetDate="2024-10-20T00:00:00" />
          <OCCPartners />
          <YoutubeVideo /> 
          <Flex as='section' align="center" justify="center" alignSelf='center'>
          <Button w={"400px"} h={"100px"} _hover={{ bg: "white", color: "button1" }} bgColor={'button1'} onClick={() => window.open('https://peopleplus.ai/occ', '_blank')} variant='solid'>
            <Text fontSize={"2xl"}> Visit the OCC Website</Text>
          </Button>
          </Flex>
          
          {/* <FeaturedArticles /> */}
        </Stack>
      </Container>
      </>
  )
}
