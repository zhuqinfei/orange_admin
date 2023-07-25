import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-expect-error  防止打包时候出错
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


const app=createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
