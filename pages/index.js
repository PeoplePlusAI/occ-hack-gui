import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/HomePage/Introduction'
import OCCPartners from '../components/HomePage/partners'
import YoutubeVideo from '../components/HomePage/YoutubeVideo'
import FeaturedArticles from '../components/HomePage/FeaturedArticles'
import Countdown from '../components/HomePage/Countdown'
export default function Index({ introduction }) {
  
  return (
    <>
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
          <Countdown targetDate="2024-12-31T23:59:59" />
          <OCCPartners />
          <YoutubeVideo /> 
          <FeaturedArticles />
        </Stack>
      </Container>
      </>
  )
}
