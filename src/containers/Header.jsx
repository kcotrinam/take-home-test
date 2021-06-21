import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import FilterInput from '../components/FilterInput'

const Header = () => {
  return (
    <>
      <Box bgColor='blue.400'>
        <Grid templateColumns='1fr 1fr'>
          <Text fontSize='5xl' align='center' color='gray.100'>
            TTH
          </Text>
          <FilterInput />
        </Grid>
      </Box>
    </>
  )
}

export default Header
