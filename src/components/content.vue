<template>
  <breadcrumbNav />
  <div class="w-[1200px] mx-auto flex justify-between py-[40px]">
    <div class="w-[800px]">
      <template v-if="loading">
        <div v-for="i in new Array(3).fill(0)" class="flex items-center mb-[30px]">
          <a-skeleton-image class="!w-[160px] pl-[20px]" />
          <a-skeleton class="flex-1" />
        </div>
      </template>
      <div @click="goDetail(item)" v-for="item in list" class="pb-[30px] mb-[30px] border-b border-dashed border-[#ddd] flex">
        <img :src="'/prod-api'+item.coverPicture" class="w-[200px] h-[120px]" alt="">
        <div class="ml-[30px] flex-1">
          <h3 class="text-[20px] line-clamp-1 mb-[30px] cursor-pointer"><span class="font-bold">{{ item.headline }}</span></h3>
          <div class="text-[12px] mt-[15px] text-[#999]">发布时间：{{ item.addTime }}</div>
        </div>
      </div>
      <a-pagination
        v-model:current="current"
        v-model:page-size="pageSize"
        :total="total"
        :show-total="(total:any) => `共 ${total} 条`"
        @change="onTableChange"
      />
    </div>

    <div class="w-[300px]">

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import breadcrumbNav from './breadcrumbNav.vue'

const { reqFun, path } = defineProps<{
  reqFun: Function,
  path: string,
}>()

const list = ref<any[]>([])
const current = ref(1)
const pageSize = ref(3)
const total = ref(99)
const loading = ref(true)
const onTableChange = (page:any) => {
  console.log(page);
  getList()
}
const getList = () => {
  loading.value = true
  list.value = []
  reqFun(current.value).then((res:any) => {
    list.value = res.rows
    total.value = res.total
    loading.value = false
  })
}
getList()

const router = useRouter()
const goDetail = (row:any) => {
  router.push({ name: path, query: { headline: row.headline } })
}
</script>

<style lang="less" scoped>

</style>