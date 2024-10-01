import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postCssPxToRem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server:{
    port: 9000
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 14, // html的 font-size 的值，也就是换算为rem的基数
          unitPrecision: 5,
          propList: ["*"],
          selectorBlackList: [
            "ant-spin-dot",
            "ant-spin-dot-item",
            "project-name",
          ],
          // exclude: /node_modules/i
        }),
      ],
    },
  }
})
