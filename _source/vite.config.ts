import { resolve } from 'path';
import { defineConfig } from 'vite';
// import * as dotenv from 'dotenv';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command }) => {
  const define: Record<string, string> = {};
  if (command === 'build') {
    define['process.env.NODE_ENV'] = '"production"';
  }
  
  return {
    build: {
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, './guide.ts'),
        formats: ['es'],
        name: 'Guide',
        fileName: 'guide'
      },
      manifest: true,
      outDir: '../src/assetbundles/dist',
    },
    define,
    plugins: [vue()],
    server: {
      port: 3100,
    },
  };
});
