import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postCssPxToRem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //环境变量
  const env = loadEnv(mode, process.cwd());
  console.log('当前环境变量', env);
  
  return {
    plugins: [
      vue(),
      vueJsx()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      port: 9000
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 14, // html的 font-size 的值，也就是换算为rem的基数。这里的值跟rem.js中计算font-size的基数保持一致
            unitPrecision: 5,
            propList: ["*"],
            selectorBlackList: [
              "ant-spin-dot",
              "ant-spin-dot-item",
              // "project-name",
            ],
            // exclude: /node_modules/i
          }),
        ],
      },
    }
  }
})
