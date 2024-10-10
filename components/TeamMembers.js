/* eslint-disable chakra-ui/require-specific-component */
/* eslint-disable chakra-ui/props-shorthand */
/* eslint-disable chakra-ui/props-order */


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
  VStack
} from '@chakra-ui/react'

const team = [
  { srno: 1, name: 'John Doe', role:'Developer' },
  { srno: 2, name: 'John Doe', role:'Developer' },
  { srno: 3, name: 'John Doe', role:'Developer' },
  { srno: 4, name: 'John Doe', role:'Developer' },
  { srno: 5, name: 'John Doe', role:'Developer' },
  { srno: 6, name: 'John Doe', role:'Developer' },
  { srno: 7, name: 'John Doe', role:'Developer' },
  { srno: 8, name: 'John Doe', role:'Developer' },
  // { name: 'Partner 3', logo: '/logos/partner3.png' },
]

export default function TeamMembers() {
  return (
    <Box  py={12} bg="black"  display="flex" alignItems="center" justifyContent="center" >
      <VStack spacing={12} width="full">
        <Heading as="h2" size="xl" textAlign="center" color="white" alignItems="center">
        Team Members
        </Heading>
        <TableContainer width="100vw">
          <Table size='lg' width="100%">
            <Thead>
              <Tr>
                <Th><Text color={"white"}>Sr No:</Text></Th>
                <Th><Text color={"white"}>Name</Text></Th>
                <Th><Text color={"white"}>Role</Text></Th>
              </Tr>
            </Thead>
            <Tbody>
              {team.map((member) => (
                <Tr>
                <Td><Text fontSize={"20px"}>{member.srno}</Text></Td>
                <Td><Text fontSize={"20px"}>{member.name}</Text></Td>
                <Td><Text fontSize={"20px"}>{member.role}</Text></Td>
                </Tr>
            ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  )
}
