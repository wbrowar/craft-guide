// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
var vite_config_default = defineConfig(({ command }) => {
  const define = {};
  if (command === 'build') {
    define['process.env.NODE_ENV'] = '"development"';
  }
  return {
    build: {
      emptyOutDir: true,
      lib: {
        entry: resolve('/Users/wbrowar/CODE/craft_v4/craft-guide/_source', './guide.ts'),
        formats: ['es'],
        name: 'Guide',
        fileName: 'guide',
      },
      manifest: true,
      outDir: '../src/assetbundles/dist',
    },
    define,
    plugins: [vue()],
    resolve: { alias: { vue: 'vue/dist/vue.esm-bundler.js' } },
    server: {
      port: 3100,
    },
  };
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCB9KSA9PiB7XG4gIGNvbnN0IGRlZmluZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBpZiAoY29tbWFuZCA9PT0gJ2J1aWxkJykge1xuICAgIGRlZmluZVsncHJvY2Vzcy5lbnYuTk9ERV9FTlYnXSA9ICdcImRldmVsb3BtZW50XCInO1xuICB9XG4gIFxuICByZXR1cm4ge1xuICAgIGJ1aWxkOiB7XG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogcmVzb2x2ZShcIi9Vc2Vycy93YnJvd2FyL0NPREUvY3JhZnRfdjQvY3JhZnQtZ3VpZGUvX3NvdXJjZVwiLCAnLi9ndWlkZS50cycpLFxuICAgICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgICAgIG5hbWU6ICdHdWlkZScsXG4gICAgICAgIGZpbGVOYW1lOiAnZ3VpZGUnXG4gICAgICB9LFxuICAgICAgbWFuaWZlc3Q6IHRydWUsXG4gICAgICBvdXREaXI6ICcuLi9zcmMvYXNzZXRidW5kbGVzL2Rpc3QnLFxuICAgIH0sXG4gICAgZGVmaW5lLFxuICAgIHBsdWdpbnM6IFt2dWUoKV0sXG4gICAgcmVzb2x2ZTogeyBhbGlhczogeyB2dWU6ICd2dWUvZGlzdC92dWUuZXNtLWJ1bmRsZXIuanMnIH0gfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDMxMDAsXG4gICAgfSxcbiAgfTtcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsUUFBUSxNQUFNO0FBQzNDLFFBQU0sU0FBaUMsQ0FBQztBQUN4QyxNQUFJLFlBQVksU0FBUztBQUN2QixXQUFPLDBCQUEwQjtBQUFBLEVBQ25DO0FBRUEsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsS0FBSztBQUFBLFFBQ0gsT0FBTyxRQUFRLG9EQUFvRCxZQUFZO0FBQUEsUUFDL0UsU0FBUyxDQUFDLElBQUk7QUFBQSxRQUNkLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxJQUNBLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxJQUNmLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyw4QkFBOEIsRUFBRTtBQUFBLElBQ3pELFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
