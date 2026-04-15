import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: resolve(__dirname, 'assets/demo-widget'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/demo-widget/main.jsx'),
      formats: ['es'],
      fileName: () => 'demo-widget.js',
      cssFileName: 'demo-widget',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'demo-widget.css') {
            return 'demo-widget.css';
          }

          return 'assets/[name][extname]';
        },
      },
    },
  },
});
