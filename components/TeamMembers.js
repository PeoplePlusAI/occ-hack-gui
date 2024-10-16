import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, 
  Heading,
  Text,
  Box,
  VStack,
  Flex
} from '@chakra-ui/react'

const team = [
  { srno: 1, name: 'Ashish Sharma', role:'Mentor' },
  { srno: 2, name: 'Prasanna Kakhandaki', role:'Mentor' },
  { srno: 3, name: 'Manu Awasthi', role:'Mentor' },
  { srno: 4, name: 'Shiva Kumar R V', role:'Developer' },
  { srno: 5, name: 'Anurag', role:'Developer' },
  { srno: 6, name: 'Abhishek', role:'Developer' },
  { srno: 7, name: 'Saket Sultania', role:'Developer' },
  { srno: 8, name: 'Shreya Mandi', role:'Developer' },
  { srno: 9, name: 'Arpit Sureka', role:'Developer' },
  { srno: 10, name: 'Vighnesh Deshpande', role:'Developer' },
  // { name: 'Partner 3', logo: '/logos/partner3.png' },
]

export default function TeamMembers() {
  return (
    <Flex  align="center" justify="center"  py={12} bg="black" >
      <VStack w="full" spacing={12}>
        <Heading as="h2" alignItems="center" color="white" textAlign="center" size="xl">
        Team Members
        </Heading>
        <TableContainer w="100vw">
          <Table w="100%" size='lg'>
            <Thead>
              <Tr>
                <Th><Text color={"white"}>Sr No:</Text></Th>
                <Th><Text color={"white"}>Name</Text></Th>
                <Th><Text color={"white"}>Role</Text></Th>
              </Tr>
            </Thead>
            <Tbody>
              {team.map((member, index) => (
                <Tr key={index}>
                <Td><Text fontSize={"20px"}>{member.srno}</Text></Td>
                <Td><Text fontSize={"20px"}>{member.name}</Text></Td>
                <Td><Text fontSize={"20px"}>{member.role}</Text></Td>
                </Tr>
            ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Flex>
  )
}
