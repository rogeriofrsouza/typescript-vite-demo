import { defineConfig } from 'vite';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/typescript-vite-demo/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        info: resolve(__dirname, 'src/info/product.html'),
        profile: resolve(__dirname, 'src/user/profile.html')
      }
    }
  }
});
