import {
  Center,
  Divider,
  Link,
  ScaleFade,
  Stack,
  Text,
} from '@chakra-ui/react'
import ReactGA from 'react-ga4'
import Image from 'next/image'

export default function Cards({ imageURL, title, slug, desc }) {


  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
    router.push(`${slug}`)
  }

  return (
    <Stack
      minH="120px"
      maxH="500px"
      bg="secondary"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
      borderRadius="10px"
    >
      <Link href={`${slug}`}>
        <ScaleFade transition={{ duration: 1 }} in={true}>
          <Center w="auto">
            <Image
              width={300}
              height={150}
              minH="70px"
              borderRadius="10px 10px 0px 0px"
              transition="0.3s"
              objectFit="cover"
              style={{
                borderRadius: '10px 10px 0px 0px',
                objectFit: 'cover',
              }}
              alt={title}
              src={imageURL}
            />
          </Center>
          <Stack px={4} py={2}>
            <Stack alignItems="center" justifyContent="space-between" isInline>
              <Text color="displayColor" fontFamily="Ubuntu" fontSize="2xl">
                {title}
              </Text>
              <Stack
                alignItems="center"
                justifyContent="flex-end"
                isInline
                spacing={4}
              >
                <Link
                  color="white"
                  href={`${slug}`}
                  onClick={() =>
                    handleClick(`project_${title.replace('@', '-at')}`)
                  }
                >
                </Link>
              </Stack>
            </Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              Read on {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
