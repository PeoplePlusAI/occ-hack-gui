
/* eslint-disable chakra-ui/require-specific-component */
/* eslint-disable chakra-ui/props-shorthand */
/* eslint-disable chakra-ui/props-order */


import React from 'react'
import { Box, Flex, Image, Heading, Center, VStack } from '@chakra-ui/react'

export default function YoutubeVideo({  }) {

    return (
        <Box as="section" py={12} bg="black" display="flex" alignItems="center" alignSelf='center'>
      <VStack spacing={12} width="full">
        <Heading as="h2" size="xl" textAlign="center" color="grey" alignItems="center">
        What is Open Cloud Compute?
        </Heading>
        <Flex justifyContent="center" alignItems="center" width="full" px={4}>
        <iframe width="784" height="441" src="https://www.youtube-nocookie.com/embed/lVTSOOvXrU4?si=tCDY3WwoMQAwSSex&amp;&iv_load_policy=3&rel=0&showinfo=0&autohide=1&controls=0&modestbranding=1" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>       
         </Flex>
      </VStack>
    </Box>
    );

} 