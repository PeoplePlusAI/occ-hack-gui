import React from 'react'
import { Box, Flex, Image, Heading, Center, VStack } from '@chakra-ui/react'

export default function YoutubeVideo({  }) {

    return (
        <Flex as="section" align="center" alignSelf='center' py={[8, 12]} bg="black">
      <VStack w="full" spacing={[6, 12]}>
        <Heading as="h2" alignItems="center" color="grey" fontSize={['2xl', '3xl', '4xl']} textAlign="center" size="xl">
        What is Open Cloud Compute?
        </Heading>
        <Flex align="center" justify="center" w="90%" >
        <iframe width="784" height="441" src="https://www.youtube-nocookie.com/embed/lVTSOOvXrU4?si=tCDY3WwoMQAwSSex&amp;&iv_load_policy=3&rel=0&showinfo=0&autohide=1&controls=0&modestbranding=1" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{maxWidth: '100vw'}}></iframe>       
         </Flex>
      </VStack>
    </Flex>
    );

}
