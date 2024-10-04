import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import Cards from './Card'
import SlideUpWhenVisible from '../../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function FeaturedArticles({  }) {

  const articles = [
    {
        "title": "Open Cloud Compute looks to onboard 3 providers for October pilot",
        "description": "Economic Times",
        "imageURL" : "/Homepage/NCSdkvQqWc7nxwAZBHS3QJWbM.png",
        "url" : "https://economictimes.indiatimes.com/tech/technology/open-cloud-compute-network-hopes-to-onboard-three-compute-providers-for-october-pilot/articleshow/112838220.cms",
    },
    {
        "title": "India-Centric Open Cloud Compute Network Brings Together Tech Giants, AI Startups",
        "description": "Inc42",
        "imageURL" : "/Homepage/NCSdkvQqWc7nxwAZBHS3QJWbM.png",
        "url" : "https://economictimes.indiatimes.com/tech/technology/open-cloud-compute-network-hopes-to-onboard-three-compute-providers-for-october-pilot/articleshow/112838220.cms",
    },
    {
        "title": "Nilekani-Backed Open Cloud Compute Could Challenge Big Tech's Data Centre Raj In India",
        "description": "NDTV",
        "imageURL" : "/Homepage/NCSdkvQqWc7nxwAZBHS3QJWbM.png",
        "url" : "https://economictimes.indiatimes.com/tech/technology/open-cloud-compute-network-hopes-to-onboard-three-compute-providers-for-october-pilot/articleshow/112838220.cms",
    },
    {
        "title": "Compute for India: A Measured Approach",
        "description": "Carnegie India",
        "imageURL" : "/Homepage/NCSdkvQqWc7nxwAZBHS3QJWbM.png",
        "url" : "https://economictimes.indiatimes.com/tech/technology/open-cloud-compute-network-hopes-to-onboard-three-compute-providers-for-october-pilot/articleshow/112838220.cms",
    },
    {
        "title": "Nandan Nilekani-backed people+ai partners with 24 tech organisations",
        "description": "Business Standard",
        "imageURL" : "/Homepage/NCSdkvQqWc7nxwAZBHS3QJWbM.png",
        "url" : "https://economictimes.indiatimes.com/tech/technology/open-cloud-compute-network-hopes-to-onboard-three-compute-providers-for-october-pilot/articleshow/112838220.cms",
    },
    {
        "title": "Tecnotree Partners with People+AI to Drive Open Cloud Compute Infrastructure and AI Standardisation",
        "description": "BusinessWire",
        "imageURL" : "/Homepage/NCSdkvQqWc7nxwAZBHS3QJWbM.png",
        "url" : "https://economictimes.indiatimes.com/tech/technology/open-cloud-compute-network-hopes-to-onboard-three-compute-providers-for-october-pilot/articleshow/112838220.cms",
    }];

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
          <SlideUpWhenVisible threshold={0.1}>
            <Stack spacing={1}>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  color="displayColor"
                  fontFamily="Ubuntu"
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  OCC in the Media
                </Heading>
                <NextLink passHref href="/articles">
                  <Link
                    onClick={() => handleClick('featuredarticles_explore more')}
                  >
                    <Text
                      _hover={{ color: 'button2' }}
                      color="button1"
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                    >
                      {' '}
                      Explore more &rarr;
                    </Text>
                  </Link>
                </NextLink>
              </Stack>
              <Text color="textSecondary" fontSize={{ base: 'md', md: 'xl' }}>
              OCC in the Media
              </Text>
              <NextLink href="/articles">
                <Link
                  onClick={() => handleClick('featuredarticles_explore more')}
                >
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Cards
              slug={articles[0].url}
              desc={articles[0].description}
              imageURL={articles[0].imageURL}
              title={articles[0].title}
            />
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Box mt={{ md: '-50%' }}>
              <Cards
                slug={articles[1].url}
                desc={articles[1].description}
                imageURL={articles[1].imageURL}
                title={articles[1].title}
              />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={0.8}>
            <Cards
              slug={articles[2].url}
              desc={articles[2].description}
              imageURL={articles[2].imageURL}
              title={articles[2].title}
            />
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
