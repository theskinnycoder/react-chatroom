import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useCallback, useState } from 'react'

import { useCollection, useCustomToast, useUser, useUserProfile } from '../../hooks'

const AddHandleForm = () => {
  const [handle, setHandle] = useState('')
  const [handleError, setHandleError] = useState('')

  const { user } = useUser()
  const { addHandle } = useUserProfile()
  const { addOrUpdate, error } = useCollection({ collection: 'users' })
  const toast = useCustomToast()

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault()
      if (handle.length === 0) {
        setHandleError("Display name can't be empty")
        return
      }
      const addedHandle = await addHandle({ handle })
      await addOrUpdate({ ...user, handle: addedHandle })
      console.log(error)
      toast({
        title: 'Login Successful! 😍',
        description: `Welcome aboard, ${addedHandle}`,
        status: 'success',
      })
      window?.location?.replace('/')
    },
    [handle, user, addHandle, addOrUpdate, toast, error],
  )

  const changeHandler = useCallback((e) => {
    setHandle(e.target.value)

    if (e.target.value.length === 0) {
      setHandleError("Display name can't be empty")
    } else if (e.target.value.length < 4) {
      setHandleError('Display name should be more than 4 characters long')
    } else {
      setHandleError('')
    }
  }, [])

  return (
    <Flex
      onSubmit={submitHandler}
      as='form'
      noValidate
      p='4'
      direction='column'
      justify='center'
      align='center'
      experimental_spaceY='7'
    >
      {/* Display Name Field */}
      <FormControl isInvalid={handleError}>
        <FormLabel
          textAlign='center'
          htmlFor='handle'
          fontSize='xl'
          fontWeight='semibold'
          textColor='brand.300'
          _light={{
            textColor: 'brand.500',
          }}
        >
          Enter any display name to continue
        </FormLabel>
        <Input
          size='lg'
          w='lg'
          id='handle'
          textColor='brand.500'
          type='text'
          name='handle'
          value={handle}
          onChange={changeHandler}
          placeholder='Ex: John Doe'
          variant='filled'
          autoComplete='off'
          _focus={{
            borderColor: 'brand.300',
            _light: {
              borderColor: 'brand.500',
            },
          }}
        />
        <FormErrorMessage>{handleError}</FormErrorMessage>
      </FormControl>

      {/* Submit Button */}
      <Button
        type='submit'
        py='6'
        fontWeight='semibold'
        colorScheme='brand'
        variant='solid'
        isDisabled={handleError.length > 0}
      >
        Set Display Name
      </Button>
    </Flex>
  )
}

export default AddHandleForm
