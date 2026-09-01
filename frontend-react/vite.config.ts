import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Debe coincidir con el nombre del repo, ya que GitHub Pages lo sirve en
  // https://<usuario>.github.io/Portafolio/ (una subruta, no la raíz del dominio).
  base: '/Portafolio/',
})
