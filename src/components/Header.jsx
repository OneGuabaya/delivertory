import { IconButton,Box, Flex, HStack, Link, Spacer, Heading, Input} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link as ReachLink} from  'react-router-dom'

export default function Header() {

  const linkProps = {
    as: ReachLink,
    textColor: 'White',
    px: 4,
    py: 3,
    rounded: 'md',
    _hover:{
      textDecoration: 'none',
      bg: '#9a5bff',
      textColor: '#ecd3ff'
    }
  }

  return (

   /*   <Box px={4} bg='gray.100'>
          <Flex h={16} alignItems='center' justifyContent='space-between'>
            <HStack as='nav' spacing={4} display={{base: 'none', md:'flex'}}>
              <Link to='home' {...linkProps}>
                <Text fontSize='x1'>Delivertory</Text>
              </Link>

              <Link to='users' {...linkProps}>Yummers</Link>

              <Link to='inventory' {...linkProps}>Inventario</Link>

            </HStack>
          </Flex>
        </Box>*/

      <Box px={4} bg='#523B77'>
      <Flex bm={10} h={16} alignItems='center' justifyContent='space-between'>

        <Box p='2'>
          <Heading size='lg'> <Link to='home' {...linkProps}> Delivertory </Link></Heading>
        </Box>
        <Spacer />
        <HStack spacing={2}>
          <Input variant='flushed' placeholder='¿Qué buscas?' color='white' />
          <IconButton
            colorScheme='#523B77'
            aria-label='Search database'
            icon={<SearchIcon/>}
            borderRadius='100'
            _hover={{color: 'blue',
            bg: 'white'}}
          />
          <Link to='users' {...linkProps}>Yummers</Link>
          <Link to='inventory' {...linkProps}>Inventario</Link>
       </HStack>

      </Flex>
      </Box>
        )
}
