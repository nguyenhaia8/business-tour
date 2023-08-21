import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Textarea: ComponentStyleConfig = {
  baseStyle: () => {
    return {
      fontWeight: '400',
    }
  },

  sizes: {
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
  },

  variants: {
    primary: () => ({
      fontSize: '14px',
      height: '85px',
      color: 'headingColor',
      borderWidth: '1px',
      borderRadius: '4px',
      boxShadow: 'none',
      _focus: {
        borderColor: 'primary',
      },
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: 'sm',
    variant: 'primary',
  },
}
