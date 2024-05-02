import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssl from '@vitejs/plugin-basic-ssl'
import { VitePWA } from 'vite-plugin-pwa'
import copy from 'rollup-plugin-copy'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react({ include: 'pathToAllReactFiles.{jsx,tsx}' }),
    reactRefresh(),
    ssl(),
    copy({
      targets: [{ src: 'srcFilePath', dest: 'destinationPath' }],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      devOptions: {
        enabled: true,
        type: 'module',
      },
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
  esbuild: {
    loader: 'jsx',
    include: [
      // Add this for business-as-usual behaviour for .jsx and .tsx files
      'src/**/*.jsx',
      'src/**/*.tsx',
      'node_modules/**/*.jsx',
      'node_modules/**/*.tsx',
    ],
    exclude: [],
  },

  server: { host: '0.0.0.0', https: true },
  base: '/',
})
