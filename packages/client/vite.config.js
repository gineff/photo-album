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
        { find: '@features', replacement: path.resolve(__dirname, './src/features') },
        { find: '@shared', replacement: path.resolve(__dirname, './src/shared') },
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
      '^/admin/.*': {
        target: 'http://localhost:8055',
        changeOrigin: true,
      },
      '^/auth/.*': {
        target: 'http://localhost:8055',
        changeOrigin: true,
      },
    },
  },
});
