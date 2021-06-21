import React from 'react'
import Timeline from './containers/Timeline'
import Header from './containers/Header'
import { ChakraProvider, Box } from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Box bgColor='blue.800'>
          <Timeline />
        </Box>
      </ChakraProvider>
    </>
  )
}

export default App
