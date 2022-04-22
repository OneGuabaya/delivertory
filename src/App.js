import InventoryPage from "./pages/InventoryPage";
import InventoryProfilePage from "./pages/InventoryProfilePage";
import UsersPage from "./pages/UsersPage";
import UsersProfilePage from "./pages/UsersProfilePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from "./components/Header";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (

    <QueryClientProvider client={queryClient}>

      <ChakraProvider>
        <Router>

          <Header />

          <Container maxW='container.xl'>
            <Routes>

              <Route path="home" element={<HomePage/>}/>

              <Route path="inventory" element={<InventoryPage/>}/>

              <Route path="inventory/id" element={<InventoryProfilePage/>}/>

              <Route path="users" element={<UsersPage/>}/>

              <Route path="users/id" element={<UsersProfilePage/>}/>

            </Routes>
          </Container>

        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
