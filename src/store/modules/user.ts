//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginFormData } from '@/api/user/type'
//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state:()=>{
    return {
      token:localStorage.getItem('TOKEN'), //用户唯一标识token
    }
  },
  //处理异步|逻辑地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData){
      //登录请求
      const result: any = await reqLogin(data)
      if (result.code == 200) {
        //pinia仓库存储token
        //由于pinia|vuex存储数据其实利用js对象
        this.token= result.data.token
        //本地存储持久化存储一份
        localStorage.setItem('TOKEN', result.data.token)
        //保证当前async函数返回一个成功的promise函数
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
//对外暴露小仓库
export default useUserStore