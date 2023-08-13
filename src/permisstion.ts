//路由鉴权：鉴权：项目当中路由能不能被访问的权限
import router from '@/router'
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  //访问某一个路由之前的守卫
  nprogress.start()
  next()
})

//全局后置守卫
router.afterEach((to: any, from: any) => {
  // to and from are both route objects.
  nprogress.done()
})

//第一个问题：任意路由切换实现进度条业务 ----nprogress