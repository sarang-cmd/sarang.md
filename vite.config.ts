import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative assets + HashRouter allow deployment at / or /repo/ without rewrites.
  base: './',
  // Allow the sandbox's changing preview subdomain without opening all hosts.
  server: { host: '0.0.0.0', allowedHosts: ['.e2b.app'] },
  preview: { host: '0.0.0.0', allowedHosts: ['.e2b.app'] },
});
