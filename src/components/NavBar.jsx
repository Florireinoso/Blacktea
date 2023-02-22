import React from 'react'
import CartWidget from './CartWidget'
import { Flex,Spacer, Box } from '@chakra-ui/react'



const NavBar = () => {
  return (
    <div>
        <Flex>
            <Box p="10">
                <h1>BLACK TEA</h1>
            </Box>
            <Spacer/>
            <Box p="10">
                <ul className='Botones'>
                    <button>Productos</button>
                    <button>Preparación</button>
                    <button>Contacto</button>
                </ul>
            </Box>
            <Spacer/>
            <Box p='10'>
                <CartWidget/>
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar