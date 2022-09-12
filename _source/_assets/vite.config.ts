
import { defineConfig } from 'vite';
import * as dotenv from 'dotenv';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../../src/assetbundles/dist',
    rollupOptions: {
      input: {
        'guide-admin': './guide-admin.ts',
        'guide-display': './guide-display.ts',
        'guide-welcome': './guide-welcome.ts',
      },
    },
  },
  plugins: [vue()],
  resolve: { alias: { vue: 'vue/dist/vue.esm-bundler.js' } },
  server: {
    port: 3100,
  },
});
