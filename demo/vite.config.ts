import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  css: {
    preprocessorOptions: { css: { charset: false }, scss: { charset: false } },
  },
  // build: {
  //   outDir: '../dist',
  //   target: 'es2018',
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/index.ts'),
  //     name: '@itwin/itwin-synchronization-report-ui',
  //     formats: ['es', 'cjs'],
  //     fileName: (format) => `index.${format}.js`,
  //   },
  //   rollupOptions: {
  //     external: ['react', '@itwin/itwinui-react', '@itwin/itwinui-css'],
  //     output: {
  //       globals: { react: 'React' },
  //     },
  //   },
  // },
});
