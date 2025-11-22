import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ai-quiz-app/', // <--- Important
  plugins: [react()],
});
