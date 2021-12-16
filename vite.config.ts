import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import TsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      '@iconify/react',
      'antd',
      'js-base64',
      'react',
      'react-dom',
      'react-query',
      'react-router',
      'react-router-dom',
      'react-use',
    ],
  },
  plugins: [React(), TsconfigPaths(), WindiCSS(), Pages()],
});
