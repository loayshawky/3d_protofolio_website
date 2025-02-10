import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const plugins = [react()];

  if (command === 'serve') {
    const visualizer = require('rollup-plugin-visualizer');
    plugins.push(visualizer({ open: false }));
  }

  return {
    plugins,
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
      minify: true, // استخدم esbuild بدلاً من terser
      treeShaking: true,
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 500,
    },
    define: {
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    },
  };
});
