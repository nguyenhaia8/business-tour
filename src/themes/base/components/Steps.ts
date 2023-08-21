import type { ComponentMultiStyleConfig } from '@chakra-ui/theme'

export const Steps: ComponentMultiStyleConfig = {
  parts: ['step'],
  baseStyle: {
    step: {
      backgroundColor: 'red',
    },
    item: {
      border: '1px solid red',
    },
    button: {
      _hover: 'none',
      _focus: 'none',
    },
    panel: {
      paddingLeft: '0px',
      paddingTop: '0px',
    },
  },

  defaultProps: {
    variant: 'default',
  },
}
