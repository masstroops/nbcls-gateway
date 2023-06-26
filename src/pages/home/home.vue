<template>
  <div class="h-[440px] bg-[#e9eef2] py-[20px]">
    <div class="w-[1200px] mx-auto">
      <a-carousel autoplay>
        <div v-for="item in banners" class="h-[400px]">
          <div class="h-full banner" :style="{ background: 'url('+item.url+') center no-repeat', backgroundSize: 'cover' }"></div>
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

const insList = ref([
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
])

const banners:any[] = [
  {url: 'https://www.nimte.ac.cn/news/news/202305/W020230626338838407729.jpg'},
  {url: 'https://www.nimte.ac.cn/news/news/202305/W020230626338835879272.jpg'},
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
