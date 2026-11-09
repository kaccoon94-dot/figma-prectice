import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages: https://kaccoon94-dot.github.io/figma-prectice/
  base: '/figma-prectice/',
  plugins: [react()],
})
