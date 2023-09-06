<!--suppress ALL -->
<template>
  <el-card>
    <el-table border style="margin: 10px 0px" :data="skuArr">
      <el-table-column type="index" label="序号" width="80px"></el-table-column>
      <el-table-column
        label="名称"
        width="80px"
        show-overflow-tooltip
        prop="skuName"
      ></el-table-column>
      <el-table-column
        label="描述"
        width="300px"
        show-overflow-tooltip
        prop="skuDesc"
      ></el-table-column>
      <el-table-column label="图片" width="300px">
        <template #="{ row, $index }">
          <img
            :src="row.skuDefaultImg"
            alt=""
            style="width: 100px; height: 100px"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="重量"
        width="300px"
        prop="weight"
      ></el-table-column>
      <el-table-column
        label="价格"
        width="300px"
        prop="price"
      ></el-table-column>
      <el-table-column label="操作" width="300px" fixed="right">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" :icon="row.isSale == 1 ? 'Bottom' : 'Top'"  @click="updateSale(row)"></el-button>
          <el-button type="primary" size="small" icon="Edit" @click="updateSku"></el-button>
          <el-button type="primary" size="small" icon="InfoFilled"></el-button>
          <el-button type="primary" size="small" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="prev, pager, next, jumper, ->,sizes,total "
      :total="total"
      @current-change="getHasSku"
      @size-change="handler"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
//引入请求
import { reqSkuList,reqCancelSale,reqSaleSku } from '@/api/product/sku'
//引入ts类型
import type { SkuResponseData, SkuData } from '@/api/product/sku/type'
import { ElMessage } from 'element-plus';
//分页器当前页码
let pageNo = ref<number>(1)
//每一页展示几条数据
let pageSize = ref<number>(10)
let total = ref<number>(0)
let skuArr = ref<SkuData[]>([])

//组件挂载完毕
onMounted(() => {
  getHasSku()
})
const getHasSku = async (pager = 1) => {
  //当前分页器的页码
  pageNo.value = pager
  let result: SkuResponseData = await reqSkuList(pageNo.value, pageSize.value)
  if (result.code == 200) {
    total.value = result.data.total
    skuArr.value = result.data.records
  }
}

//分页器下拉菜单发生变化触发
const handler = (pageSizes: number) => {
  getHasSku()
}

//商品的上架与下架的操作
const updateSale = async (row: SkuData) => {
  //如果当前商品的isSale==1,说明当前商品是上架的额状态->更新为下架
  //否则else情况与上面情况相反
  if (row.isSale == 1) {
    //下架操作
    await reqCancelSale(row.id as number)
    //提示信息
    ElMessage({ type: 'success', message: '下架成功' })
    //发请求获取当前更新完毕的全部已有的SKU
    getHasSku(pageNo.value)
  } else {
    //下架操作
    await reqSaleSku(row.id as number)
    //提示信息
    ElMessage({ type: 'success', message: '上架成功' })
    //发请求获取当前更新完毕的全部已有的SKU
    getHasSku(pageNo.value)
  }
}

//更新已有的SKU
const updateSku = () => {
  ElMessage({ type: 'success', message: '程序员在努力的更新中....' })
}

</script>

<style scoped lang="scss"></style>
