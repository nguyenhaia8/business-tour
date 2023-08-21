import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Text: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: () => {
    return {}
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
  },
  // Two variants: solid and primary (has staus disable custom)
  variants: {
    content: {
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '22px',
      color: 'inkGray.50',
    },
    title: {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '28px',
      color: 'gray.60',
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: 'primary',
    size: 'sm',
  },
}
