import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // output directory
    assetsDir: 'assets', // assets folder
    rollupOptions: {
      input: 'index.html', // main entry point
    },
  },
});
