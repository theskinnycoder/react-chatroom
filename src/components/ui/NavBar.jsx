import { Avatar, Box, Button, chakra, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useLogout, useUser } from '../../hooks';
import ColorModeToggler from './ColorModeToggler';

const NavBar = () => {
  const { user } = useUser();
  const { logout } = useLogout();

  return (
    <Box
      maxW='100vw'
      mx='auto'
      as='header'
      position='sticky'
      zIndex='10'
      px='5'
      bg='transparent'
      backdropFilter={'blur(10px)'}
      style={{
        top: '0',
      }}
    >
      <Flex
        maxW='5xl'
        mx='auto'
        p='4'
        align='center'
        justify='space-between'
        as='nav'
      >
        <Flex align='center' experimental_spaceX='1'>
          <ColorModeToggler />
          <Link to='/'>
            <Button variant='ghost' colorScheme='brand'>
              <Heading size='xl'>ChatRoom</Heading>
            </Button>
          </Link>
        </Flex>
        <Flex justify='center' align='center' experimental_spaceX='3'>
          {user?.handle ? (
            <>
              {user?.photoURL ? (
                <Avatar
                  colorScheme='brand'
                  name={user?.handle}
                  src={user?.photoURL}
                  size='md'
                />
              ) : (
                <Text>
                  Hello,{' '}
                  <chakra.span
                    color='brand.300'
                    fontWeight='semibold'
                    _light={{
                      color: 'brand.500',
                    }}
                  >
                    {user?.handle}
                  </chakra.span>
                </Text>
              )}
              <Button variant='solid' colorScheme='brand' onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to='/login'>
              <Button variant='solid' colorScheme='brand'>
                Login
              </Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
