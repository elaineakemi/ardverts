import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssl from '@vitejs/plugin-basic-ssl'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    ssl(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'ARdverts',
        short_name: 'ARdverts',
        theme_color: '#FFFFFF',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    // include: ['linked-dep'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      // include: [/linked-dep/, /node_modules/],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: { host: '0.0.0.0', https: true },
})
