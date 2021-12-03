import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: '"SF Pro Display", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    brand: {
      100: defaultTheme.colors.teal['100'],
      200: defaultTheme.colors.teal['200'],
      300: defaultTheme.colors.teal['300'],
      400: defaultTheme.colors.teal['400'],
      500: defaultTheme.colors.teal['500'],
      600: defaultTheme.colors.teal['600'],
      700: defaultTheme.colors.teal['700'],
      800: defaultTheme.colors.teal['800'],
      900: defaultTheme.colors.teal['900'],
      50: defaultTheme.colors.teal['50'],
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        solid: () => ({
          _hover: {
            transform: 'scale(1.05)',
          },
          _focusWithin: {
            transform: 'scale(0.95)',
          },
        }),
      },
    },
    IconButton: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
