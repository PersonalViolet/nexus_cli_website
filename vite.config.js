import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/nexus_cli_website/',
  plugins: [react(), tailwindcss()],
})
