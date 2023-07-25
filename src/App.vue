<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <SvgIcon name="phone" color="pink" width="100px" height="100px"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped></style>
