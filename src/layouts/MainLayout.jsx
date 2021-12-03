import { Box, Flex } from '@chakra-ui/react'

import NavBar from '../components/ui/NavBar'

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Flex
        pt='14'
        maxW='5xl'
        maxH='100vh'
        direction='column'
        justify='center'
        align='center'
        m='auto'
      >
        {children}
      </Flex>
    </Box>
  )
}

export default MainLayout
