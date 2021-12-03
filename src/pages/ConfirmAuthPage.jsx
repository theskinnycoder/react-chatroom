import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import AddHandleForm from '../components/forms/AddHandleForm'
import { useCustomToast, useMagicLink } from '../hooks'

const ConfirmAuthPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  const { error, loginWithMagicLink } = useMagicLink()
  const toast = useCustomToast()
  const { replace } = useHistory()

  useEffect(() => {
    ;(async () => {
      const loggedInUser = await loginWithMagicLink()
      if (!error) {
        if (loggedInUser?.handle) {
          toast({
            title: 'Login Successful! 😍',
            description: `Welcome back, ${loggedInUser.handle}`,
            status: 'success',
          })
          replace('/')
        } else {
          toast({
            title: 'Login Successful! 😍',
            description: 'Please add a display name now',
            status: 'info',
          })
          setIsLoading(false)
        }
        return
      } else {
        toast({
          title: "Coudn't login...😞",
          description: error,
          status: 'error',
        })
      }
    })()
  }, [error, loginWithMagicLink, toast, replace])

  return isLoading ? (
    <Heading>Checking auth, please wait...</Heading>
  ) : (
    <>
      <AddHandleForm />
    </>
  )
}

export default ConfirmAuthPage
