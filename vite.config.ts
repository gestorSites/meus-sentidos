import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  // GH_PAGES is only set by the GitHub Pages workflow (project page,
  // served under /meus-sentidos/). A normal `npm run build`, meant for
  // the real production server at the site's own domain, stays at '/'.
  base: process.env.GH_PAGES ? '/meus-sentidos/' : '/',
}))
