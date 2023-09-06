<!--suppress ALL -->
<template>
  <el-card style="height: 80px">
    <el-form :inline="true" class="form">
      <el-form-item label="用户名:">
        <el-input placeholder="请你输入搜索用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button type="primary" size="default" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin: 10px 0px">
    <el-button type="primary" size="default">添加用户</el-button>
    <el-button type="danger" size="default">批量删除</el-button>
    <!-- table展示用户信息 -->
    <el-table style="margin: 10px 0px" border>
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column label="#" align="center" type="index"></el-table-column>
      <el-table-column label="ID" align="center"></el-table-column>
      <el-table-column
          label="用户名字"
          align="center"
          show-overflow-tooltip
      ></el-table-column>
      <el-table-column
          label="用户名称"
          align="center"
          show-overflow-tooltip
      ></el-table-column>
      <el-table-column
          label="用户角色"
          align="center"
          show-overflow-tooltip
      ></el-table-column>
      <el-table-column
          label="创建时间"
          align="center"
          show-overflow-tooltip
      ></el-table-column>
      <el-table-column
          label="更新时间"
          align="center"
          show-overflow-tooltip
      ></el-table-column>
      <el-table-column
          label="操作"
          width="300px"
          align="center"
      ></el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[5, 7, 9, 11]"
        :background="true"
        layout="prev, pager, next, jumper,->,sizes,total"
        :total="400"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref} from 'vue';
//默认页码
let pageNo = ref<number>(1);
//一页展示几条数据
let pageSize = ref<number>(5);


</script>

<style scoped lang="scss"></style>
