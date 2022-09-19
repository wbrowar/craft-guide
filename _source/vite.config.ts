import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command }) => {
  const define: Record<string, string> = {};
  if (command === 'build') {
    define['process.env.NODE_ENV'] = '"production"';
    define['__VUE_PROD_DEVTOOLS__'] = 'true';
  }

  return {
    build: {
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, './guide.ts'),
        formats: ['es'],
        name: 'Guide',
        fileName: 'guide',
      },
      manifest: true,
      outDir: '../src/assetbundles/dist',
    },
    define,
    plugins: [vue({
    })],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js'
      }
    },
    server: {
      port: 3100,
    },
  };
});
