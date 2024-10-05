import { useState, useEffect } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider, Link, Button, SlideFade, HStack, Center } from '@chakra-ui/react'
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
import { Spinner } from '@chakra-ui/react'

export default function Resources({ projects }) {

    const [currentFilters, setFilters] = useState({
      "useCases" : [],
      "minStorage" : 0,
      "providers" : [],
      "computeSelection" : null
    });
    const [ResourceCardList, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usecasesDropdown, setUsecasesDropdown] = useState([]);
    const [providersDropdown, setProviderssDropdown] = useState([]);
    const [maxStroage, setMaxStroage] = useState(100);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetchDataFromAPI();  // Call the API function
          setData(result);  // Update state with the fetched data
          setUsecasesDropdown(getUseCasesList(result))
          setProviderssDropdown(getProvidersList(result))
          setMaxStroage(getMaximumStorage(result))
          setLoading(false);
        } catch (error) {
          setError(error.message);  // Set error if any occurs
        }
      };

      fetchData();  // Invoke the fetch function when the component mounts
    }, []);  // Empty array ensures this runs only once on mount

  
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
      <HorizontalFilterUI theme={customTheme} providers={providersDropdown} usecases={usecasesDropdown} setFilterSelection={setFilters} filterData={currentFilters} maxStorage={maxStroage}/>
            <Divider thickness="100px"/>
          </Stack>
          <HStack>
            {loading ? <Center><Spinner pos='fixed' top='50%' left="50%" size='xl' thickness='6px'/></Center> : <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={6}>
            {ResourceCardList.map(function(object, i){
              if(applyFilter(object, currentFilters)){
                return <ResourceCard key={i} resourceCard={object} />;
              }
            })}            
          </SimpleGrid>}
          
          </HStack>
          
        </Stack>
      </Container>
    </>
  )
}
