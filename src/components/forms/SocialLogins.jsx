import { Divider, Flex, IconButton } from '@chakra-ui/react'
import { useCallback } from 'react'

import { useCollection, useCustomToast, useSocialLogin } from '../../hooks'
import { FaceBookIcon, GitHubIcon, GoogleIcon, TwitterIcon } from '../../icons'

const SocialLogins = () => {
  const { loginWithSocials, error } = useSocialLogin()
  const { addOrUpdate } = useCollection({ collection: 'users' })
  const toast = useCustomToast()

  const loginWithProvider = useCallback(
    async ({ provider }) => {
      const loggedInUser = await loginWithSocials({ provider })
      if (error && !loggedInUser) {
        toast({
          title: "Coudn't login...😞",
          description: error,
          status: 'error',
        })
      } else {
        toast({
          title: 'Login Successful! 😍',
          description: `Welcome back, ${loggedInUser?.handle}`,
          status: 'success',
        })
        await addOrUpdate(loggedInUser)
      }
    },
    [toast, error, loginWithSocials, addOrUpdate],
  )

  return (
    <Flex justify='space-evenly' align='center' experimental_spaceX='5' h='14'>
      <IconButton
        icon={<GoogleIcon />}
        fontSize='2xl'
        onClick={() => loginWithProvider({ provider: 'GOOGLE' })}
      />
      <Divider orientation='vertical' />
      <IconButton
        color='twitter.500'
        icon={<TwitterIcon />}
        fontSize='2xl'
        onClick={() => loginWithProvider({ provider: 'TWITTER' })}
      />
      <Divider orientation='vertical' />
      <IconButton
        icon={<GitHubIcon />}
        fontSize='2xl'
        onClick={() => loginWithProvider({ provider: 'GITHUB' })}
      />
      <Divider orientation='vertical' />
      <IconButton
        color='blue.500'
        icon={<FaceBookIcon />}
        fontSize='2xl'
        onClick={() => loginWithProvider({ provider: 'FACEBOOK' })}
      />
    </Flex>
  )
}

export default SocialLogins
