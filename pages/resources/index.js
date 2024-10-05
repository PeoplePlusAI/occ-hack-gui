import { useState, useEffect } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider, Link, Button, SlideFade, HStack } from '@chakra-ui/react'
// import {ResourceCard, ResourceTypes, ResourceCardProps} from '../../components/ResourcePage/resourceCard'
import {ResourceCard, ResourceTypes, ResourceCardProps} from '../../components/ResourcePage/resouceCardModal'
import HorizontalFilterUI from '../../components/ResourcePage/filter'
import Container from '../../components/Container'
import SelectionIconButton from '../../components/ResourcePage/selectionButton'
import Head from 'next/head'
import { FaServer, FaDatabase } from 'react-icons/fa'
import useMediaQuery from '../../hook/useMediaQuery'
import { BsGpuCard } from "react-icons/bs";
import {fetchDataFromAPI} from '../api/resourceApi'
import customTheme from '../../styles/theme'
import {getProvidersList, getUseCasesList, getMaximumStorage, applyFilter} from '../../utils/resourcePage'

export default function Resources({ projects }) {

    const [currentFilters, setFilters] = useState({
      "useCases" : [],
      "minStorage" : 0,
      "providers" : [],
      "computeSelection" : null
    });
    const [ResourceCardList, setData] = useState([]);
    // const [ResourceCardListFilter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usecasesDropdown, setUsecasesDropdown] = useState([]);
    const [providersDropdown, setProviderssDropdown] = useState([]);
    const [maxStroage, setMaxStroage] = useState(100);
    // const []

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetchDataFromAPI();  // Call the API function
          setData(result);  // Update state with the fetched data
          // setFilter(result);
          setUsecasesDropdown(getUseCasesList(result))
          setProviderssDropdown(getProvidersList(result))
          setMaxStroage(getMaximumStorage(result))
        } catch (error) {
          setError(error.message);  // Set error if any occurs
        } finally {
          setLoading(false);
          // setLoading(false);  // Stop the loading state
        }
      };

      fetchData();  // Invoke the fetch function when the component mounts
    }, []);  // Empty array ensures this runs only once on mount

    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <>
      <Container>
        <Stack
          justifyContent="center"
          my={{ base: '15vh', md: '16vh' }}
          spacing={10}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Resources
            </Heading>
            {/* <Text fontSize={{ base: '14px', md: '16px' }}>
              Select CPU, Storage or GPU
            </Text> */}
            {/* <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        in={true}
      >
        <Stack isInline spacing={4}>
        <SelectionIconButton text='GPU' icon={BsGpuCard} onClick={() => setSelection(ResourceTypes.GPU)} isActive={ResourceTypes.GPU==currentSelection} />
        <SelectionIconButton text='Storage' icon={FaDatabase} onClick={() => setSelection(ResourceTypes.STORAGE)} isActive={ResourceTypes.STORAGE==currentSelection}/>
        <SelectionIconButton text='Task' icon={FaServer} onClick={() => setSelection(ResourceTypes.TASK)} isActive={ResourceTypes.TASK==currentSelection}/>
        </Stack>
      </SlideFade> */}
      <HorizontalFilterUI theme={customTheme} providers={providersDropdown} usecases={usecasesDropdown} setFilterSelection={setFilters} filterData={currentFilters} maxStorage={maxStroage}/>
            <Divider />
          </Stack>
          <HStack>
            {/* <FilterUI /> */}
          <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={6}>
            {ResourceCardList.map(function(object, i){
              if(applyFilter(object, currentFilters)){
                return <ResourceCard key={i} resourceCard={object} />;
              }
            })}
            {/* {ResourceCardList.map((object, i) => <ResourceCard key={i} resourceCard={object}/>)} */}
            
          </SimpleGrid>
          </HStack>
          
        </Stack>
      </Container>
    </>
  )
}
