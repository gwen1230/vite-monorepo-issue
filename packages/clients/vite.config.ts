import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/dto/, /node_modules/],
    },
  },
  optimizeDeps: {
    include: ['lib-dto'],
  },
});
