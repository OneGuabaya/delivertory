import { Text } from "@chakra-ui/react"
import {  Table,  Thead,  Tbody, Tr, Th, Td,  TableContainer } from '@chakra-ui/react'

export default function InventoryPage() {
  return <div>
  <Text fontSize='6xl'>Inventario</Text>

  <TableContainer>
 <Table variant='simple'>
   <Thead>
     <Tr>
      <Th>Id</Th>
      <Th>Foto del Articulo</Th>
      <Th>Nombre del Articulo</Th>
      <Th isNumeric>Cantidad Total</Th>
     </Tr>
   </Thead>

   <Tbody>
     <Tr>
       <Td>img</Td>
       <Td>img</Td>
       <Td>millimetres (mm)</Td>
       <Td isNumeric>25.4</Td>
     </Tr>
     <Tr>
       <Td>feet</Td>
       <Td>img</Td>
       <Td>centimetres (cm)</Td>
       <Td isNumeric>30.48</Td>
     </Tr>
     <Tr>
       <Td>yards</Td>
       <Td>img</Td>
       <Td>metres (m)</Td>
       <Td isNumeric>0.91444</Td>
     </Tr>
   </Tbody>
 </Table>
</TableContainer>
 </div>
}
