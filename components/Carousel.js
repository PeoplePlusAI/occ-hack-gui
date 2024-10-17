import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ResourceCard } from "./ResourcePage/resouceCardModal";
import theme from "./theme";
import {fetchDataFromAPI} from '../pages/api/resourceApi'

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag
} from "@chakra-ui/react";

import ChakraCarousel from "./ChakraCarousel";

function capsFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  

function Carousel() {
  // const [data, setData] = useState([]);

  const [ResourceCardList, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromAPI();  // Call the API function
        setData(result);  // Update state with the fetched data
        console.log(result)
        // setUsecasesDropdown(getUseCasesList(result))
        // setProviderssDropdown(getProvidersList(result))
        // setMaxStroage(getMaximumStorage(result))
        setLoading(false);
      } catch (error) {
        setError(error.message);  // Set error if any occurs
      }
    };
    fetchData();  // Invoke the fetch function when the component mounts
  }, []);


  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Container
        py={8}
        px={0}
        maxW={{
          base: "20rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem"
        }}
      >
        <ChakraCarousel gap={32}>
          {/* {data.slice(5, 15).map((post, index) => (
            <Flex
              key={index}
              boxShadow="rgba(60, 207, 145) 0px 0px 2px 2px"
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              color="gray.300"
              bg="base.d100"
              rounded={5}
              flex={1}
              p={5}
            >
              <VStack mb={6}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="left"
                  w="full"
                  mb={2}
                >
                  {capsFirst(post.title)}
                </Heading>
                <Text w="full">{capsFirst(post.body)}</Text>
              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>
                  <Tag size="sm" variant="outline" colorScheme="green">
                    User: {post.userId}
                  </Tag>
                  <Tag size="sm" variant="outline" colorScheme="cyan">
                    Post: {post.id - 5}
                  </Tag>
                </HStack>
                <Button
                  onClick={() => alert(`Post ${post.id - 5} clicked`)}
                  colorScheme="green"
                  fontWeight="bold"
                  color="gray.900"
                  size="sm"
                >
                  More
                </Button>
              </Flex>
            </Flex>
          ))} */}
          {ResourceCardList.map(function(object, i){
              return <ResourceCard key={i} resourceCard={object} />;
              
            })}
        </ChakraCarousel>
      </Container>
    </ChakraProvider>
  );
}

export default Carousel;