import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/style/main.css'
import App from './App.vue'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0a0a0a',
          surface: '#141414',
          'surface-variant': '#1a1a1a',
          primary: '#22c55e',
          'primary-darken-1': '#16a34a',
          secondary: '#1a1a1a',
          'secondary-darken-1': '#111111',
          error: '#f87171',
          info: '#60a5fa',
          success: '#4ade80',
          warning: '#fbbf24',
          'on-background': '#f4f4f5',
          'on-surface': '#f4f4f5',
          'on-primary': '#0a0a0a',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      variant: 'flat',
    },
  },
})

createApp(App).use(vuetify).mount('#app')
