import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

//@ts-ignore
import px2vw from 'postcss-px-to-viewport'
const pxtovw = px2vw({
  viewportWidth: 427, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
  viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
  unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
  selectorBlackList: ['.ignore', '.hairlines', 'van'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
  minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
  mediaQuery: false // 允许在媒体查询中转换`px` 
})

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
  css: {
    postcss: {
      plugins: [
        pxtovw
        // postCssPxToRem({
        //   rootValue: 37.5,
        //   propList: ['*'],
        // })
      ]
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
