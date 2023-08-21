import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Tabs: ComponentStyleConfig = {
  baseStyle: () => {
    return {
      tab: {
        _focus: {
          boxShadow: 'none',
        },
      },
    }
  },
  sizes: {},
  variants: {},
  defaultProps: {},
}
