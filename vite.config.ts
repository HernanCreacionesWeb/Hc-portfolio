import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Hc-portfolio/', // Asegúrate de que esta línea esté presente
});