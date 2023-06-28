<template>
  <breadcrumbNav />
  <div class="w-[1200px] mx-auto flex justify-between py-[40px]">
    <div class="w-[800px]">
      <div v-for="item in list" class="pb-[30px] mb-[30px] border-b border-dashed border-[#ddd] flex">
        <img :src="item.img" class="w-[140px] h-[140px]" alt="">
        <div class="ml-[30px] flex-1">
          <h3 class="text-[20px] line-clamp-1 mb-[30px] cursor-pointer"><a-tag>{{ item.state }}</a-tag><span class="font-bold">{{ item.name }}</span></h3>
          <div class="flex flex-wrap text-[16px] text-[#666] leading-[20px]">
            <div class="w-1/2 mb-[10px]">仪器分类：{{ item.yqfl }}</div>
            <div class="w-1/2 mb-[10px]">使用模式：{{ item.syms }}</div>
            <div class="w-1/2 mb-[10px]">放置位置：{{ item.site }}</div>
            <div class="w-1/2 mb-[10px]">仪器型号：{{ item.yqxh }}</div>
            <div class="w-1/2 mb-[10px]">所属机构：{{ item.ssjg }}</div>
          </div>
        </div>
      </div>
      <a-pagination
        v-model:current="current"
        v-model:page-size="pageSize"
        :pageSizeOptions="['3','5','10','20','30']"
        :total="total"
        :show-total="(total:any) => `共 ${total} 条`"
        @change="onTableChange"
      />
    </div>

    <div class="w-[300px]">
      <div class="border border-solid birder-[#ddd] bg-[#f9f9f9] p-[30px]">
        <a-select class="w-full !mb-[15px]" v-model:value="deptValue" placeholder="所属部门">
          <a-select-option value="部门1">部门1</a-select-option>
          <a-select-option value="部门2">部门2</a-select-option>
        </a-select>
        <a-input v-model:value="nameValue" class="!mb-[15px]" placeholder="仪器名称"></a-input>
        <a-button class="w-full" @click="search" type="primary">搜索仪器</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumbNav from '@/components/breadcrumbNav.vue'
import { ref } from 'vue';

const deptValue = ref<any>()
const nameValue = ref('')
const search = () => {
  current.value = 1
  getList()
}

const current = ref(1)
const pageSize = ref(3)
const total = ref(99)
const list = ref<any[]>([])
const getList = async() => {
  let img = (await import('@/assets/img/ts6.jpg')).default
  list.value = new Array(3).fill(0).map((item:any, i:any) => {
    return {
      img,
      name: '激光共聚显微镜'+(i+1),
      state: '启用',
      yqfl: '样品处理',
      syms: '按时预约 项目委托',
      site: '化学楼实验室101',
      yqxh: 'LSM780',
      ssjg: '化学化工学院',
    }
  })
}
getList()
const onTableChange = (page:any) => {
  console.log(page);
}


</script>

<style lang="less" scoped>

</style>