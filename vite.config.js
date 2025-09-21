// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/flores-amarillas/', // 👈 usa el nombre EXACTO de tu repo
})
