import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../src/assetbundles/dist',
    rollupOptions: {
      input: {
        'guide-admin': './guide-admin.ts',
        'guide-display': './guide-display.ts',
        'guide-welcome': './guide-welcome.ts',
      },
    },
  },
  server: {
    port: 3100,
  },
})
