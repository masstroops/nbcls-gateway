<template>
  <div class="w-[300px]">
    <div class="flex justify-between text-[#122c67]">
      <span class="text-[24px] font-bold">通知公告</span>
      <a class="text-[16px] hover:font-bold text-[#122c67]">更多</a>
    </div>
    <div class="h-[4px] bg-[#eee] mt-[10px] mb-[30px]"><div class="bg-[#122C67] h-full w-[100px]"></div></div>

    <div class="flex justify-between">
      <ul class="w-full">
        <li v-for="item in list" class="flex justify-between mb-[18px] cursor-pointer">
          <div class="w-[60px] h-[60px] border border-solid border-[#122c67] text-white">
            <div class="h-[35px] bg-[#122c67] leading-[35px] text-[16px] text-center font-bold">{{ item.date.substr(-2) }}</div>
            <div class="text-[12px] leading-[25px] text-center text-[#122c67]">{{ item.date.split('-')[0] }}/{{ item.date.split('-')[1] }}</div>
          </div>
          <div class="w-[213px] leading-[30px] overflow-hidden text-ellipsis text-black text-[16px] line-clamp-2">{{ item.title }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface NoticeItem {
  title: string;
  date: string;
}
const list = ref<NoticeItem[]>([
  { title: '宁波材料所在Janus气凝胶实现季节适应性热管理温度调节方面取得新进展', date: '2023-06-26' },
  { title: '宁波材料所党委召开会议专题研究分支机构清理整改“回头看”', date: '2023-06-25' },
])
</script>

<style lang="less" scoped>

</style>