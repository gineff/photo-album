/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
        { find: '@entities', replacement: path.resolve(__dirname, './src/entities') },
        { find: '@widgets', replacement: path.resolve(__dirname, './src/widgets') },
      ],
    }),
  ],
  server: {
    proxy: {
      '/directus': {
        target: 'http://localhost:8055',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/directus/, ''),
      },
      '/admin': {
        target: 'http://localhost:8055',
        changeOrigin: true,
        followRedirects: true,
      },
    },
  },
});
