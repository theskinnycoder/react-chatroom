import { IconButton, useColorMode } from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '../../icons'

const ColorModeToggler = () => {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <IconButton
      colorScheme='brand'
      p='2'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
    />
  )
}

export default ColorModeToggler
