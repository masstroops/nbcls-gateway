<template>
  <div class="h-[440px] bg-[#e9eef2] py-[20px]">
    <div class="w-[1200px] mx-auto">
      <a-carousel autoplay>
        <div v-for="item in banners" class="h-[400px]">
          <div class="h-full banner relative" :style="{ background: 'url('+item.url+') center no-repeat', backgroundSize: 'cover' }">
            <div class="absolute right-0 w-[300px] h-full bg-[#122c6790] p-[30px]">
              <h1 class="text-[24px] mb-[30px] text-white leading-[24px] line-clamp-2">{{ item.title }}</h1>
              <div class="text-[14px] leading-[24px] opacity-[0.8] text-white line-clamp-6">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </a-carousel>
    </div>
  </div>

  <div class="py-[40px]">
    <div class="w-[1200px] mx-auto">
      <div class="mb-[50px] flex justify-between">
        <news />
        <notices />
      </div>
      <div>
        <statistics />
      </div>
      <div class="mb-[50px] flex justify-between">
        <hots />
        <links />
      </div>
    </div>
  </div>

  <span>{{ userStore.token }}</span>
</template>

<script setup lang="ts">
import { getNewsList } from '@/api/news'
import { useUserStore } from '@/store/user'
import { ref } from 'vue'
import news from './news.vue'
import notices from './notices.vue'
import statistics from './statistics.vue'
import hots from './hots.vue'
import links from './links.vue'

const insList = ref([
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
])

const banners:any[] = [
  {url: 'https://www.nimte.ac.cn/news/news/202305/W020230626338838407729.jpg', title: '宁波材料所在Janus气凝胶实现季节适应性热管理温度调节方面取得新进展', content: '钙钛矿以其长的载流子扩散长度、长的载流子复合寿命和宽的吸收范围，已经成为低成本和高性能太阳能电池的潜在材料。经过十多年的发展，单结钙钛矿太阳能电池的光电转换效率已提高至25%以上，为太阳能电池产业的升级转型提供了新途径。因倒置平板结构器件具有可低温制备、可忽略的迟滞效应、高稳定性的特性，并可以制备成叠层电池，所以其备受重视。然而由于钙钛矿材料的多晶性和离子特性，钙钛矿中存在大量导致离子迁移和载流子非辐射复合的缺陷，且缺陷是水/氧渗透的主要通道，会显著降低钙钛矿薄膜甚至器件的稳定性。'},
  {url: 'https://www.nimte.ac.cn/news/news/202305/W020230626338835879272.jpg', title: '宁波材料所党委召开会议专题研究分支机构清理整改“回头看”', content: '钙钛矿以其长的载流子扩散长度、长的载流子复合寿命和宽的吸收范围，已经成为低成本和高性能太阳能电池的潜在材料。经过十多年的发展，单结钙钛矿太阳能电池的光电转换效率已提高至25%以上，为太阳能电池产业的升级转型提供了新途径。因倒置平板结构器件具有可低温制备、可忽略的迟滞效应、高稳定性的特性，并可以制备成叠层电池，所以其备受重视。然而由于钙钛矿材料的多晶性和离子特性，钙钛矿中存在大量导致离子迁移和载流子非辐射复合的缺陷，且缺陷是水/氧渗透的主要通道，会显著降低钙钛矿薄膜甚至器件的稳定性。'},
]

const userStore = useUserStore()

let params = {
  pageNum: 1,
  pageSize: 3,
  type: 1
}
getNewsList(params).then(res => {
  console.log(res);
})

</script>

<style lang="less" scoped>
.banner {
  // background: url(https://www.nimte.ac.cn/news/news/202305/W020230626338838407729.jpg) no-repeat center;
  background-size: cover;
}
</style>
