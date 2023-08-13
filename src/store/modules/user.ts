//创建用户相关的小仓库
// noinspection TypeScriptCheckImport

import { defineStore } from 'pinia'
//引入接口
import { reqLogin, reqUserInfo } from '@/api/user'
//引入数据类型
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { useState } from './types/type'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由(常量路由)
import { constantRoute } from '@/router/routes'
//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: (): useState => {
    return {
      token: GET_TOKEN(), //用户唯一标识token
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
    }
  },
  //处理异步|逻辑地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      //登录请求
      const result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        //pinia仓库存储token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data.token as string
        //本地存储持久化存储一份
        SET_TOKEN(result.data.token as string)
        //保证当前async函数返回一个成功的promise函数
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },

    //获取用户信息方法
    async userInfo() {
      //获取用户信息进行存储
      let result = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
      }
    },

    //退出登录
    userLogout() {
      //当前没有mock接口（不做）：服务器数据token失效
      //本地数据清空
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
  },
  getters: {},
})
//对外暴露小仓库
export default useUserStore
