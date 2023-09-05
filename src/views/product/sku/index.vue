<!--suppress ALL -->
<template>
  <el-card>
    <el-table border style="margin: 10px 0px">
      <el-table-column type="index" label="序号" width="80px"></el-table-column>
      <el-table-column
          label="名称"
          width="80px"
          show-overflow-tooltip
      ></el-table-column>
      <el-table-column
          label="描述"
          width="300px"
          show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="图片" width="300px"></el-table-column>
      <el-table-column label="重量" width="300px"></el-table-column>
      <el-table-column label="价格" width="300px"></el-table-column>
      <el-table-column
          label="操作"
          width="300px"
          fixed="right"
      ></el-table-column>
    </el-table>
    <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :background="true"
        layout="prev, pager, next, jumper, ->,sizes,total "
        :total="400"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref} from 'vue';
//分页器当前页码
let pageNo = ref<number>(1);
//每一页展示几条数据
let pageSize = ref<number>(10);
</script>

<style scoped lang="scss"></style>
