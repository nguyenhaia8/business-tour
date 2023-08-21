import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Input: ComponentStyleConfig = {
  baseStyle: {
    color: 'red',
    _placeholder: {
      color: 'inkGray.30',
    },
  },

  variants: {},

  defaultProps: {
    variant: 'default',
  },
}
