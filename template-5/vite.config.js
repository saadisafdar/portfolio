import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  base: '/template-5/dist/',

  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vuetify: ['vuetify'],
        },
      },
    },
  },
})