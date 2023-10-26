<template>
  <div class="w-[550px]">
    <div class="flex justify-between text-[#122c67]">
      <span class="text-[24px] font-bold">新闻动态</span>
      <a class="text-[16px] hover:font-bold text-[#122c67]">更多</a>
    </div>
    <div class="h-[4px] bg-[#eee] mt-[10px] mb-[30px]"><div class="bg-[#122C67] h-full w-[100px]"></div></div>

    <div class="flex justify-between">
      <a class="w-[270px] h-[320px] relative">
        <img class="w-full h-full object-cover" src="https://www.nimte.ac.cn/news/news/202304/W020230626338844903271.jpg" alt="">
        <p class="bg-[#122c67] absolute left-0 bottom-0 p-[20px] text-white text-[14px] leading-[20px] mb-0">中国科学院大学宁波材料工程学院正式全面启用</p>
      </a>
      <ul class="w-[550px]">
        <li v-for="item in list" class="flex justify-between mb-[18px]">
          <a class="flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-black text-[16px]">{{ item.title }}</a>
          <span class="text-[16px] text-[#999] pl-[20px]">{{ item.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const list = ref<any[]>([
  { title: '宁波材料所在Janus气凝胶实现季节适应性热管理温度调节方面取得新进展', date: '06-26' },
  { title: '宁波材料所党委召开会议专题研究分支机构清理整改“回头看”', date: '06-25' },
])
</script>

<style lang="less" scoped>

</style>