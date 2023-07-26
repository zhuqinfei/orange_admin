import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode })=>{
   return{
     plugins: [
       vue(),
       createSvgIconsPlugin({
         iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
         symbolId: 'icon-[dir]-[name]',
       }),
       viteMockServe({
         localEnabled: command === 'serve',//保证开发阶段可以使用mock接口
         // enabled: command === 'serve',//最新的好像用这个
       })
     ],
     resolve: {
       alias: {
         '@': path.resolve('./src'), //相对路径别名配置，使用@代替src
       },
     },
     //scss全局变量一个配置
     css: {
       preprocessorOptions: {
         scss: {
           javascriptEnabled: true,
           additionalData: '@import "./src/styles/variable.scss";',
         },
       },
     },
   }
})
//
// export default defineConfig({
//   plugins: [
//     vue(),
//     createSvgIconsPlugin({
//       iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
//       symbolId: 'icon-[dir]-[name]',
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve('./src'), //相对路径别名配置，使用@代替src
//     },
//   },
//   //scss全局变量一个配置
//   css: {
//     preprocessorOptions: {
//       scss: {
//         javascriptEnabled: true,
//         additionalData: '@import "./src/styles/variable.scss";',
//       },
//     },
//   },
// })
