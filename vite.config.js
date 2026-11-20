import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The repo is named <username>.github.io, so the site is served from the root.
// If you ever deploy to a project repo instead (user.github.io/my-repo), set base: '/my-repo/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
