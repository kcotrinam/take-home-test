import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../actions'
import { Button } from '@chakra-ui/react'

const FilterInput = () => {
  const [days, setDays] = useState(0)
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    if (target.value > 0) setDays(target.value)
  }

  const handleFilter = () => {
    dispatch(updateFilter(days))
    setDays(0)
  }

  return (
    <>
      <Box w={{ base: '70vw', lg: '20vw' }} my='auto' p={2}>
        <Text color='gray.100' mb='8px'>
          Days ago
        </Text>
        <Flex alignItems='center' size='sm'>
          <Input
            value={days}
            type='number'
            placeholder='Filter'
            size='xs'
            onChange={handleChange}
          />
          <Button colorScheme='blue' ml={2} onClick={handleFilter}>
            Filter
          </Button>
        </Flex>
      </Box>
    </>
  )
}

export default FilterInput
