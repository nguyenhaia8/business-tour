import type { ComponentMultiStyleConfig } from '@chakra-ui/theme'

export const Accordion: ComponentMultiStyleConfig = {
  parts: ['accordion', 'item', 'button', 'panel'],
  baseStyle: {
    accordion: {},
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

  variants: {
    custom: {
      button: {
        padding: '16px',
        paddingLeft: '0px',
      },
    },
  },

  defaultProps: {
    variant: 'default',
  },
}
