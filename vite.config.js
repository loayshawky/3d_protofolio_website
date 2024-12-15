import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, // Example: Make environment variables available in the app
  },
  server: {
    port: 3000, // Set custom port for development server
  },
  build: {
    outDir: 'dist', // Define the output directory for production builds
    minify: true, // Enable minification for production
  },
});
