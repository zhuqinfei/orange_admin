// noinspection TypeScriptCheckImport

import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-expect-error  防止打包时候出错
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入模板的全局样式
import '@/styles/index.scss'
//引入路由
import router from '@/router/index'
//引入仓库
import pinia from './store'

const app = createApp(App)
//注册路由模板
app.use(router)

app.use(ElementPlus, {
  locale: zhCn,
})
//安装自定义插件
app.use(gloalComponent)
//注册路由模板
app.use(router)
//安装仓库
app.use(pinia)

app.mount('#app')
