import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
    ],
    base: mode === 'production' ? 'https://sumon.replai.tech/' : '/',
    server: {
      allowedHosts: ['localhost', 'sumon.replai.tech'],
    },
  };
});
