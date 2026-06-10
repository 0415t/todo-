import { defineConfig } from 'vite'
import tailwindcss from"@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import plugin from 'eslint-plugin-react-hooks'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  vite: {
    plugins:[tailwindcss()]
  }
})
