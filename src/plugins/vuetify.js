// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { customDarkTheme, customLightTheme } from '@/themes/CustomThemes'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: customLightTheme,
      dark: customDarkTheme,
    }
  },
})
