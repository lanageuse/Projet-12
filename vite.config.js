import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
