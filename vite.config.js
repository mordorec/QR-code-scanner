import { defineConfig } from 'vite';
import wyw from '@wyw-in-js/vite';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    wyw({
      include: ['**/*.{ts,tsx}'],
    }),
  ],
}));
