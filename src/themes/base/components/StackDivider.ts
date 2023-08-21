import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const StackDivider: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: () => {
    return {
      marginTop: '0px',
      marginBottom: '0px',
    }
  },
  sizes: {},
  variants: {},
  defaultProps: {},
}
