import { Divider, Flex, Heading, Text, useColorMode } from '@chakra-ui/react'

import MagicEmailForm from '../components/forms/MagicEmailForm'
import SocialLogins from '../components/forms/SocialLogins'

const LoginPage = () => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      experimental_spaceY='4'
      p='8'
      shadow={colorMode === 'light' ? '2xl' : 'none'}
    >
      {/* Heading */}
      <Heading
        color='brand.300'
        size='2xl'
        _light={{
          color: 'brand.500',
        }}
      >
        Login!
      </Heading>

      <Divider />

      {/* Magic Email Login */}
      <MagicEmailForm />

      <Divider />

      {/* Social Logins */}
      <Text
        color='brand.300'
        _light={{
          color: 'brand.500',
        }}
        fontWeight='medium'
      >
        Or continue with :
      </Text>
      <SocialLogins />
    </Flex>
  )
}

export default LoginPage
