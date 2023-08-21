import type { ComponentMultiStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Menu: ComponentMultiStyleConfig = {
  parts: ['button'],

  baseStyle: {
    button: {
      width: '250px',
      backgroundColor: '#fff',
      color: '#000',
      height: '40px',
      fontSize: '14px',
      border: '1px solid #E0E0E4',
      borderRadius: '10px',
      textAlign: 'inherit',
    },
  },

  defaultProps: {
    button: {
      size: 'sm',
      variant: 'primary',
    },
  },
}
