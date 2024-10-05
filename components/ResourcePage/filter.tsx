/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable chakra-ui/require-specific-component */
/* eslint-disable chakra-ui/props-shorthand */
/* eslint-disable chakra-ui/props-order */

import React, { useState } from 'react'
import {
  Box,
  Input,
  Text,
  Heading,
  Container,
  VStack,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import SelectionIconButton from './selectionButton'
import { FaServer, FaDatabase } from 'react-icons/fa'
import { BsGpuCard } from "react-icons/bs";
import {ComputeTypes} from "../../components/ResourcePage/resouceCardModal"


// const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Toys']
// const providers = ['Vigyan Labs', 'Jarvis Labs']
// const usecases = ['Computer Vision', 'Language', 'LLM', 'Audio', 'Visual Recognition']

export default function HorizontalFilterUI({providers, usecases=null, setFilterSelection, filterData, maxStorage=100}) {
  // const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [useCases, setuseCases] = useState<string[]>([])
  // const [priceRange, setPriceRange] = useState(50)
  const [currentSelection, setSelection] = useState()
  const [storage, setStorage] = useState(0)

  const handleCategoryChange = (values: string[]) => {
    setSelectedCategories(values)
    setFilterSelection(
      {
        ...filterData,
        "providers" : values,
      }
    )
  }

  const handleUseCaseChange = (values: string[]) => {
    setuseCases(values)
    setFilterSelection(
      {
        ...filterData,
        "useCases" : values,
      }
    )
  }

  const handleStorageChange = (value : number) => {
    setStorage(value)
    setFilterSelection(
      {
        ...filterData,
        "minStorage" : value,
      }
    )
  } 

  const changeComputeSelection = (value: ComputeTypes) => {
    setSelection(value)
    setFilterSelection(
      {
        ...filterData,
        "computeSelection" : value,
      }
    )
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} align="stretch">
        {/* <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Product Filters
        </Heading> */}
        
        <Flex direction={{ base: "column", md: "row" }} gap={4} alignItems="flex-start">
          {/* <Box flex="1">
            <Text mb={2} fontWeight="bold">
              Search:
            </Text>
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search products"
            />
          </Box> */}

          <Box flex="1">
            <Text mb={2} fontWeight="bold">
              Providers:
            </Text>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="100%" border="3px solid forestgreen" bgColor="black" _hover={{ bg: useColorModeValue("gray.700", "gray.700") }} _active={{bg: useColorModeValue("gray.700", "gray.700")}}>
                {selectedCategories.length > 0 
                  ? `${selectedCategories.length} selected`
                  : 'Select Providers'}
              </MenuButton>
              <MenuList border="1px solid forestgreen" bgColor="black" zIndex="5">
                <MenuOptionGroup type="checkbox" onChange={(values) => handleCategoryChange(values as string[])} >
                  {providers.map((category) => (
                    <MenuItemOption key={category} value={category} _focus={{bg: useColorModeValue("blue.700", "blue.700")}}>
                      {category}
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>

          <Box flex="1">
            <Text mb={2} fontWeight="bold" color="white">
              Use Cases
            </Text>
            <Menu closeOnSelect={false} border-color="forestgreen">
              <MenuButton as={Button}  rightIcon={<ChevronDownIcon />} width="100%" border="3px solid forestgreen" bgColor="black" _hover={{ bg: useColorModeValue("gray.700", "gray.700") }} _active={{bg: useColorModeValue("gray.700", "gray.700")}}>
                {useCases.length > 0 
                  ? `${useCases.length} selected`
                  : 'Select Use Cases'}
              </MenuButton>
              <MenuList border="1px solid forestgreen" bgColor="black" zIndex="2" overflowY={"scroll"} maxHeight={"40vh"} css={{
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-track": {
        width: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#8ccef0",
        borderRadius: "24px",
      },
    }}>
                <MenuOptionGroup type="checkbox" onChange={(values) => handleUseCaseChange(values as string[])}>
                  {usecases.map((category) => (
                    <MenuItemOption key={category} value={category} _focus={{bg: useColorModeValue("blue.700", "blue.700")}}>
                      {category}
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>

          <Box flex="1">
            <Text mb={2} fontWeight="bold">
              Minimum Storage: {storage} GB
            </Text>
            <Slider
              aria-label="price-range-slider"
              defaultValue={0}
              min={0}
              max={maxStorage}
              step={1}
              onChange={(val) => handleStorageChange(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack >
              <SliderThumb />
            </Slider>
          </Box>
        </Flex>

        <Stack isInline spacing={4}>
        <SelectionIconButton text='GPU' icon={BsGpuCard} onClick={() => changeComputeSelection(ComputeTypes.GPU)} isActive={ComputeTypes.GPU==currentSelection} />
        <SelectionIconButton text='CPU' icon={FaServer} onClick={() => changeComputeSelection(ComputeTypes.CPU)} isActive={ComputeTypes.CPU==currentSelection}/>
        {/* <Box flex="1" width="sm">
            <Text mb={2} fontWeight="bold">
              Price Range: ${priceRange}
            </Text>
            <Slider
              aria-label="price-range-slider"
              defaultValue={50}
              min={0}
              max={100}
              step={1}
              onChange={(val) => setPriceRange(val)}
              sx={{ width: 300 }}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box> */}
        </Stack>
        

        {/* <Box borderTop="1px" borderColor="gray.200" pt={4}>
          <Text fontWeight="bold">Selected Filters:</Text>
          <Text>Search: {searchTerm || 'None'}</Text>
          <Text>Categories: {selectedCategories.join(', ') || 'None'}</Text>
          <Text>Max Price: ${priceRange}</Text>
        </Box> */}
      </VStack>
    </Container>
  )
}