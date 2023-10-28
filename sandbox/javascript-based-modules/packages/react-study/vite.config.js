import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as url from 'url';
import path from 'path';
import autoprefixer from 'autoprefixer'
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: path.resolve(__dirname, "..", "..", "node_modules", ".vite"),
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'./src'),
    }
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    }
  }
})
