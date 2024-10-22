import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from '../../hook/useMediaQuery'
import ReactGA from 'react-ga4'

export default function Introduction({ introduction }) {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      spacing={{ base: 4, md: 1 }}
    >
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        in={true}
      >
      <Image 
            zIndex={0}
            w={{ base: '350px', md: '500px' }}
            alt=""
            src="/peopleAi.svg">
      </Image>
      </SlideFade>
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        in={true}
      >
        
        <Box pos="relative">
          
          {/* <Image pos="absolute"
            zIndex={0}
            top={{ base: '-150', md: '-10' }}
            right={{ base: '-4', md: '-30' , xl:'-35'}}
            display={{base:"none", md:"block"}}
            w={{ base: '300px', md: '400px' }}
            alt=""
            src="https://framerusercontent.com/images/M9s4txXkH3jzk9psUXH7UpLw7sU.png?scale-down-to=512">
          </Image> */}
          
          {/* <Text
            pos="relative"
            zIndex={1}
            color="button1"
            fontSize="display2"
            fontWeight="medium"
          >
            DPI for AI
          </Text> */}
          <Image
            pos="absolute"
            zIndex={0}
            top={{ base: '0', md: '-10' }}
            left={{ base: '-4', md: '-10' }}
            w={{ base: '70px', md: '200px' }}
            alt=""
            filter="invert(0.1)"
            src="https://svgsilh.com/svg/26432.svg"
          ></Image>
          
        </Box>
        <Heading 
        pos="relative"
        zIndex={1}
        align="center"
        color="displayColor"
        fontSize={"display"}
        lineHeight={'100%'}
        letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
        >
          Open Cloud Compute</Heading>
        
        {/* <Heading
          pos="relative"
          zIndex={1}
          w={{base:"90%",xl:"90%"}}
          color="displayColor"
          fontSize="display"
          lineHeight={'95%'}
          letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
        >
          Open Cloud Compute
        </Heading> */}
      </SlideFade>

      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        in={true}
      >
        <Heading
          color="textSecondary"
          fontSize="display4"
          fontWeight="medium"
          letterSpacing="-1.6px"
          whiteSpace="pre-wrap"
        >
          <Box as="span" color="button1">
          NVIDIA AI Summit India
          </Box>
        </Heading>
        
      </SlideFade>
      <SlideFade
      direction="top"
      transition={{ enter: { duration: 0.4, delay: 0.9 } }}
      in={true}>
      <Text
            pos="relative"
            zIndex={1}
            color="displayColor"
            fontSize="display2"
            fontWeight="medium"
          >
            Mumbai | October 23–25, 2024
          </Text>
          </SlideFade>
    </Stack>
  )
}
