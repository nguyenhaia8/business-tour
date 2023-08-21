import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Link: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: () => {
    return {
      fontWeight: 'medium',
      textDecoration: 'underline',
      textUnderlineOffset: 2,
    }
  },

  variants: {
    primary: () => ({
      color: 'green.50',
    }),
  },
  // The default size and variant values
  defaultProps: {
    variant: 'primary',
  },
}
