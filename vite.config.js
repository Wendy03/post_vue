import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/post_vue/' : '/',
  plugins: [vue()],
  resolve: {
    alias: { '@/': `${path.resolve(__dirname, 'src')}/` },
  },
});
