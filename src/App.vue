<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <SvgIcon name="phone" color="pink" width="100px" height="100px"></SvgIcon>
    <SvgIcon name="phone" color="black"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>

<style scoped></style>
