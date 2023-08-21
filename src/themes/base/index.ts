import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { breakpoints } from './breakpoints'

import {
  Button,
  Card,
  Accordion,
  Link,
  Text,
  Textarea,
  Tabs,
  StackDivider,
  Input,
} from './components'

// Supports weights 100-900
import '@fontsource-variable/inter'
export const baseTheme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  fontSizes: {
    h1: '24px',
    h2: '20px',
    h3: '18px',
    h4: '16px',
  },
  colors,
  breakpoints,
  components: {
    Button,
    Tabs,
    StackDivider,
    Card,
    Accordion,
    Link,
    Text,
    Textarea,
    Input,
  },
})
