import { Stack,Button,Box,Text, Flex,Link  } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/HomePage/Introduction'
import OCCPartners from '../components/HomePage/partners'
import YoutubeVideo from '../components/HomePage/YoutubeVideo'
import FeaturedArticles from '../components/HomePage/FeaturedArticles'
import Countdown from '../components/HomePage/Countdown'
import Header from '../components/Header'
import Carousel from '../components/Carousel'

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
          <Countdown targetDate="2024-10-20T09:00:00" />
          <Flex as='section' align="center" justify="center" direction={"column"} alignSelf='center'>
            <Text mb={5} fontSize={"5xl"} fontWeight="medium">The List of Providers is now Live!</Text>
            <Carousel />
          <Link href='/resources'><Button  h={100} mt={5}  _hover={{bg:'buttonHover'}} bgColor={'button1'} variant='solid'>
            <Text color="white" fontSize={{base:'md',md:"2xl"}} > Check all the compute available</Text>
          </Button>
          </Link>
          </Flex>
          <OCCPartners />
          <YoutubeVideo /> 
          <Flex as='section' align="center" justify="center" alignSelf='center'>
          <Button w={{base:300,md:400}} h={{base:70, md:100}} _hover={{ bg: "buttonHover" }} bgColor={'button1'} onClick={() => window.open('https://peopleplus.ai/occ', '_blank')} variant='solid'>
            <Text fontSize={{base:'xl',md:'2xl'}} > Visit the OCC Website</Text>
          </Button>
          </Flex>
          
          {/* <FeaturedArticles /> */}
        </Stack>
      </Container>
      </>
  )
}
