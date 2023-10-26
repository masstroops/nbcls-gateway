<template>
  <breadcrumbNav />
  <div class="w-[1200px] mx-auto flex justify-between py-[40px]">
    <div class="w-[1200px]">
      <template v-if="loading">
        <div v-for="i in new Array(3).fill(0)" class="flex items-center mb-[10px]">
          <a-skeleton class="flex-1" />
        </div>
      </template>
      <div @click="goDetail(item)" v-for="item in list" class="border-b border-dashed border-[#ddd] flex">
        <div class="w-full flex justify-between leading-[50px]">
          <div class="w-[1000px] text-[16px] cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis dot">问题{{ item.index }}：<span>{{ item.name }}</span></div>
          <div class="text-[12px] text-[#999]">发布时间：{{ item.date }}</div>
        </div>
      </div>
      
      <a-pagination
        style="margin-top:40px"
        v-model:current="current"
        v-model:page-size="pageSize"
        :pageSizeOptions="['10','20','30']"
        :total="total"
        :show-total="(total:any) => `共 ${total} 条`"
        @change="onTableChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const list = ref<any[]>([])
const current = ref(1)
const pageSize = ref(10)
const total = ref(99)
const loading = ref(true)
const onTableChange = (page:any) => {
  console.log(page);
  getList()
}
const getList = () => {
  loading.value = true
  list.value = []
  setTimeout(() => {
    let res = new Array(10).fill(0).map((v:any, i) => {
      return { index: i+1, name: '贵重实验室仪器设备评价考核管理办法1', date: '2023-06-29' }
    })
    list.value = res
    loading.value = false
  }, 1000)
}
getList()

const router = useRouter()
const goDetail = (row:any) => {
  router.push({ name: 'QandADetail', query: {} })
}
</script>

<style lang="less" scoped>
.dot {
  position: relative;
  padding-left: 40px;
  &::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    background-color: #333;
    left: 20px;
    top: 23px;
  }
}
</style>