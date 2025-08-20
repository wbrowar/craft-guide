import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../src/web/assets/dist',
    rollupOptions: {
      input: {
        'guide-admin': './guide-admin.ts',
        'guide-book': './guide-book.ts',
        'guide-display': './guide-display.ts',
        'guide-welcome': './guide-welcome.ts',
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    port: 3100,
  },
})
