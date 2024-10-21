/* eslint-disable react-hooks/rules-of-hooks */
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
  Spacer,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import SelectionIconButton from './selectionButton'
import { FaServer, FaDatabase } from 'react-icons/fa'
import { BsGpuCard } from "react-icons/bs";
import { ComputeTypes } from "../../components/ResourcePage/resouceCardModal"

export default function HorizontalFilterUI({ providers, usecases = null, setFilterSelection, filterData, maxStorage = 100, cleanFilters }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [useCases, setuseCases] = useState<string[]>([])
  // const [priceRange, setPriceRange] = useState(50)
  const [currentSelection, setSelection] = useState<ComputeTypes | undefined>(undefined);
  const [storage, setStorage] = useState(0)

  const handleCategoryChange = (values: string[]) => {
    setSelectedCategories(values)
    setFilterSelection(
      {
        ...filterData,
        "providers": values,
      }
    )
  }

  const handleUseCaseChange = (values: string[]) => {
    setuseCases(values)
    setFilterSelection(
      {
        ...filterData,
        "useCases": values,
      }
    )
  }

  const handleStorageChange = (value: number) => {
    setStorage(value)
    setFilterSelection(
      {
        ...filterData,
        "minStorage": value,
      }
    )
  }

  const changeComputeSelection = (value: ComputeTypes) => {
    setSelection(value)
    setFilterSelection(
      {
        ...filterData,
        "computeSelection": value,
      }
    )
  }

  const hangleSearchChange = (value : string) => {
    setSearchTerm(value)
    setFilterSelection(
      {
        ...filterData,
        "search" : value,
      }
    )

  }

  const clearFilters = () => {
    setFilterSelection(cleanFilters);
    setuseCases([]);
    setSelectedCategories([]);
    setStorage(0);
    setSelection(null);
    setSearchTerm("");
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack align="stretch" spacing={6}>
        {/* <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Product Filters
        </Heading> */}

        <Flex align="flex-start" direction={{ base: "column", md: "row" }} gap={4}>
          <Box flex="1">
            <Text mb={2} fontWeight="bold">
              Search:
            </Text>
            <Input outline="1px solid" aria-label="Search products" onChange={(e) => hangleSearchChange(e.target.value)} placeholder="Search Resources..." value={searchTerm}/>
          </Box>

          <Box flex="1">
            <Text mb={2} fontWeight="bold">
              Providers:
            </Text>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} w="100%" border="3px solid #4ade80" _hover={{ bg: useColorModeValue("gray.700", "gray.700") }} _active={{ bg: useColorModeValue("gray.700", "gray.700") }} bgColor="black" rightIcon={<ChevronDownIcon />}>
                {selectedCategories.length > 0 ? `${selectedCategories.length} selected` : 'Select Providers'}
              </MenuButton>
              <MenuList zIndex="5" border="1px solid #4ade80" bgColor="black">
                <MenuOptionGroup
                  onChange={(values) => handleCategoryChange(values as string[])} type="checkbox" value={selectedCategories}>
                  {providers.map((category) => (
                    <MenuItemOption key={category} _focus={{ bg: useColorModeValue("blue.700", "blue.700") }} value={category}>
                      {category}
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>

          <Box flex="1">
            <Text mb={2} color="white" fontWeight="bold">
              Use Cases
            </Text>
            <Menu border-color="#4ade80" closeOnSelect={false}>
              <MenuButton as={Button} w="100%" border="3px solid #4ade80" _hover={{ bg: useColorModeValue("gray.700", "gray.700") }} _active={{ bg: useColorModeValue("gray.700", "gray.700") }} bgColor="black" rightIcon={<ChevronDownIcon />}>
                {useCases.length > 0 ? `${useCases.length} selected` : 'Select Use Cases'}
              </MenuButton>
              <MenuList zIndex="2" overflowY={"scroll"} maxH={"40vh"} border="1px solid #4ade80" bgColor="black" css={{
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
                <MenuOptionGroup onChange={(values) => handleUseCaseChange(values as string[])} type="checkbox" value={useCases}>
                  {usecases.map((category) => (
                    <MenuItemOption key={category} _focus={{ bg: useColorModeValue("blue.700", "blue.700") }} value={category}>
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
            <Slider aria-label="price-range-slider" defaultValue={0} max={maxStorage} min={0} onChange={(val) => handleStorageChange(val)} step={1} value={storage}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack >
              <SliderThumb />
            </Slider>
          </Box>
        </Flex>

        <Stack isInline spacing={4}>
          <SelectionIconButton text='GPU' icon={BsGpuCard} onClick={() => changeComputeSelection(ComputeTypes.GPU)} isActive={ComputeTypes.GPU == currentSelection} />
          <SelectionIconButton text='CPU' icon={FaServer} onClick={() => changeComputeSelection(ComputeTypes.CPU)} isActive={ComputeTypes.CPU == currentSelection} />
          <Spacer />
          <Button px={4} py={2} color="white" bg="#111827" borderRadius="md" shadow="0 0 0 1px #3b82f6" _hover={{ bg: "#1f2937" }} _active={{ bg: "#374151" }} onClick={clearFilters}>
            <Text fontSize="md" fontWeight="medium">
              Clear Filters
            </Text>
          </Button>

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