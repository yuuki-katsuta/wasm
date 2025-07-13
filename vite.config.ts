import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    "babel":{
      plugins: [
        ['@yuuki-katsuta/babel-plugin-smart-console', {
          includeFileName: true,
          removeInProduction: true
        }],
        ['@yuuki-katsuta/babel-plugin-remove-test-attributes']
      ]
    }
  })],
})
