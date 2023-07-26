<!--suppress ALL -->
<template>
  <div>
    <div>
      <h1>App根组件</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reqLogin} from '@/api/user'
import { onMounted } from 'vue'

//当你组件挂载完毕测试发一个请求
onMounted(() => {
 reqLogin({username:'admin',password:'111111'})
})
</script>

<style scoped lang="scss">
</style>
