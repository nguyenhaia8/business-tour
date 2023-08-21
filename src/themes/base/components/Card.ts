import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Card: ComponentStyleConfig = {
  baseStyle: () => {
    return {
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      alignItems: 'left',
    }
  },
  variants: {
    default: {
      padding: 6,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    flat: {
      background: 'transparent',
      padding: 0,
      borderRadius: '0px',
      boxShadow: 'none',
      gap: '12px',
    },
  },

  defaultProps: {
    variant: 'default',
  },
}
