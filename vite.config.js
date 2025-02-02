import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/skdavaodelsur/', // Set the base to the repository name
  plugins: [react()],
});
