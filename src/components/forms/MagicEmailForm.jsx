import { Button, Flex, FormControl, FormErrorMessage, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import { useCustomToast, useMagicLink } from '../../hooks';
import { UserIcon } from '../../icons';

const MagicEmailForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const { error: magicLinkError, sendMagicLink } = useMagicLink();
  const toast = useCustomToast();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (email.length === 0) {
        setEmailError('Please enter an email address');
        return;
      }
      await sendMagicLink({ email });
      if (magicLinkError) {
        toast({
          title: "Couldn't send email...😞",
          description: magicLinkError,
          status: 'error',
        });
      } else {
        toast({
          title: 'Email Sent! 😍',
          description: 'Please check your email for a magic link',
          status: 'success',
        });
      }
    },
    [email, magicLinkError, sendMagicLink, toast],
  );

  const handleChange = useCallback((e) => {
    setEmail(e.target.value);
    if (e.target.value.length === 0) {
      setEmailError('Email is required');
    } else if (
      !e.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    ) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  }, []);

  return (
    <Flex
      onSubmit={handleSubmit}
      as='form'
      noValidate
      p='4'
      direction='column'
      justify='center'
      align='center'
      experimental_spaceY='7'
    >
      {/* Email Field */}
      <FormControl isInvalid={emailError}>
        <InputGroup size='lg' w='lg'>
          <InputLeftElement
            children={<UserIcon strokeWidth='3.5' />}
            color='brand.300'
            _light={{
              color: 'brand.500',
            }}
          />
          <Input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='Enter your email address'
            variant='filled'
            autoComplete='off'
            _focus={{
              borderColor: 'brand.300',
              _light: {
                borderColor: 'brand.500',
              },
            }}
          />
        </InputGroup>
        <FormErrorMessage>{emailError}</FormErrorMessage>
      </FormControl>

      {/* Submit Button */}
      <Button
        type='submit'
        py='6'
        fontWeight='semibold'
        colorScheme='brand'
        variant='solid'
        isDisabled={emailError.length > 0}
      >
        Send Magic Link
      </Button>
    </Flex>
  );
};

export default MagicEmailForm;
