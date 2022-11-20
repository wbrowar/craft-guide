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
    base: command === 'build' ? './' : '/',
    build: {
      cssCodeSplit: false,
      emptyOutDir: true,
      manifest: true,
      outDir: '../src/assetbundles/dist',
      rollupOptions: {
        input: {
          guide: './guide.ts',
        },
      },
    },
    define,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': './',
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    server: {
      port: 3100,
    },
  };
});
