import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@src': path.resolve(__dirname,'/src/'),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "../css/all.scss";' // 添加公共样式
      }
    }
  },
  plugins: [
    vue(),
  ],

})
