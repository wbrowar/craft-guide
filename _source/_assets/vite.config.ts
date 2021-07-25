import { defineConfig } from 'vite';
import * as dotenv from 'dotenv';
import vue from '@vitejs/plugin-vue';
dotenv.config({ path: '../../assembly-line.env' });

export default defineConfig({
  mode: 'development',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../../src/assetbundles/dist',
    rollupOptions: {
      input: {
        'guide': './guide.ts',
      },
    }
  },
  plugins: [vue()],
});
