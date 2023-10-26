<template>
  <div class="w-[300px]">
    <div class="flex justify-between text-[#122c67]">
      <span class="text-[24px] font-bold">预约入口</span>
    </div>
    <div class="h-[4px] bg-[#eee] mt-[10px] mb-[30px]"><div class="bg-[#122C67] h-full w-[100px]"></div></div>

    <div class="flex justify-between">
      <ul class="w-full">
        <li v-for="item in list" class="h-[60px] bg-[#f9f9f9] text-[#000] hover:bg-[#f2f7fb] hover:text-[#122c67] p-[15px] flex justify-between items-center mb-[5px] cursor-pointer border border-solid border-[#ddd]">
          <div class="hover:text-[#122c67] text-[16px] line-clamp-1">{{ item.title }}</div>
          <right-outlined class="text-[#999]" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RightOutlined } from '@ant-design/icons-vue'

interface NoticeItem {
  title: string;
  link: string;
}
const list = ref<NoticeItem[]>([
  { title: '仪器平台1', link: '2023-06-26' },
  { title: '仪器平台2', link: '2023-06-25' },
])
</script>

<style lang="less" scoped>

</style>