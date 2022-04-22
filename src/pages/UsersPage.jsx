import { Text } from "@chakra-ui/react"
import {  Table,  Thead,  Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { useQuery } from "@chakra-ui/react"

export default function UsersPage() {

  const queryInfo = useQuery('users', () =>
fetch('http://localhost:3001/usersDb').then(res => res.json())
)

 return <div>
  <Text fontSize='6xl'>Yummers</Text>

  {queryInfo.isLoading ? (
    'Cargando...'
 ) : (
  <TableContainer>
 <Table variant='simple'>
   <Thead>
     <Tr>
      <Th>fotografía</Th>
      <Th>nombre y apellido</Th>
      <Th isNumeric>cédula</Th>
      <Th>estatus</Th>
     </Tr>
   </Thead>

   <Tbody>
    {queryInfo.data.map(usersDb => (
     <Tr key={usersDb.id}>
       <Td>{usersDb.foto}</Td>
       <Td>{usersDb.nombre}</Td>
       <Td isNumeric>{usersDb.cedula}</Td>
       <Td>{usersDb.estatus}</Td>
     </Tr>
     ))}
   </Tbody>
 </Table>
</TableContainer>
)}
 </div>

}
