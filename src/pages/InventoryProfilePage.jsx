import { Text } from "@chakra-ui/react"
import {  Table,  Thead,  Tbody,  Tfoot,  Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'


export default function InventoryProfilePage() {
  return <div> <Text fontSize='6xl'>Yummers</Text>

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
     <Tr>
       <Td>img</Td>
       <Td>millimetres (mm)</Td>
       <Td isNumeric>25.4</Td>
       <Td>Activo</Td>
     </Tr>
     <Tr>
       <Td>feet</Td>
       <Td>centimetres (cm)</Td>
       <Td isNumeric>30.48</Td>
       <Td>Activo</Td>
     </Tr>
     <Tr>
       <Td>yards</Td>
       <Td>metres (m)</Td>
       <Td isNumeric>0.91444</Td>
       <Td>Activo</Td>
     </Tr>
   </Tbody>
 </Table>
</TableContainer>
</div>
}
