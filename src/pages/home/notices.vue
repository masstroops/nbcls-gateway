<template>
  <div class="w-[580px]">
    <div class="flex justify-between text-[#122c67]">
      <span class="text-[24px] font-bold">通知公告</span>
      <a class="text-[16px] hover:font-bold text-[#122c67]">更多</a>
    </div>
    <div class="h-[4px] bg-[#eee] mt-[10px] mb-[30px]"><div class="bg-[#122C67] h-full w-[100px]"></div></div>

    <div class="flex justify-between">
      <ul class="w-full">
        <li v-for="item in list" class="flex justify-between mb-[18px] cursor-pointer">
          <a-skeleton :loading="loading">
          <div class="w-[60px] h-[60px] border border-solid border-[#122c67] text-white">
            <div class="h-[35px] bg-[#122c67] leading-[35px] text-[16px] text-center font-bold">{{ item.addTime.substr(-2) }}</div>
            <div class="text-[12px] leading-[25px] text-center text-[#122c67]">{{ item.addTime.split('-')[0] }}/{{ item.addTime.split('-')[1] }}</div>
          </div>
          <div class="w-[500px]">
            <div class="leading-[30px] overflow-hidden text-ellipsis text-black text-[16px] line-clamp-1">{{ item.headline }}</div>
            <div class="leading-[30px] overflow-hidden text-ellipsis text-[#aaa] text-[14px] line-clamp-1">{{ item.contentText }}</div>
          </div>
          </a-skeleton>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getNewsList } from '@api/news'

interface NoticeItem {
  title: string;
  date: string;
}
const list = ref<any[]>([
])
const loading = ref(true)
onMounted(() => {
  getList()
})
const getList = () => {
  let params = {
    type: 2,
    pageNum: 1,
    pageSize: 5,
  }
  getNewsList(params).then((res:any) => {
    if (res.code == 200) {
      loading.value = false
      list.value = res.rows
    }
  })
}
</script>

<style lang="less" scoped>

</style>