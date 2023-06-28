import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // ----------- 请求本地，代理至服务端
      '/cloud_manage': {
          // target: 'http://192.168.2.184:9191/', 
          target: `http://192.168.8.146:9191`, 
          // target: 'http://localhost:9191/', 
          ws: false,
          changeOrigin: true
        },
      // ----------- 请求本地，代理至dvm文件服务
      '/dvm-upload': {
        target: 'http://192.168.8.145:8080/', 
        // target: 'http://localhost/',
        ws: false,
        changeOrigin: true
      },
    }
  }
})
