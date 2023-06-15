<template>
  <div class="h-[100px] bg-[#F1F2F3] leading-[100px]">
    <div class="w-[1200px] mx-auto leading-[100px] flex items-center">
      <h1 class="text-[28px] text-black font-semibold mr-[36px]">为您推荐</h1>
      <a v-for="item in insList" class="insName" href="javascript:;">{{ item.name }}</a>
    </div>
  </div>
  <div class="py-[50px]">
    <div class="w-[1200px] mx-auto flex justify-between">
      <div class="w-[380px] h-[250px] bg-[#0070E6] leading-[250px] text-center text-white text-[25px] font-semibold cursor-pointer">中科院大仪平台</div>
      <div class="w-[380px] h-[250px] bg-[#0070E6] leading-[250px] text-center text-white text-[25px] font-semibold cursor-pointer">材料所大仪平台</div>
      <div class="w-[380px] h-[250px] text-center text-white text-[25px] font-semibold cursor-pointer">
        <div class="h-[110px] mb-[25px] bg-[#0070E6] leading-[110px]">综合服务门户</div>
        <div class="h-[110px] mb-[25px] bg-[#0070E6] leading-[110px]">浙江省大仪平台</div>
      </div>
    </div>
  </div>
  
  <span>{{ userStore.token }}</span>
</template>

<script setup lang="ts">
import { getNewsList } from '@/api/news';
import { useUserStore } from '@/store/user';
import { ref } from 'vue';

const insList = ref([
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
  {name: '生物滴滤装置', code: ''},
])

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
.insName {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  height: 40px;
  padding: 0 10px;
  font-size: 18px;
  color: #333333;
  line-height: 40px;
  margin-right: 10px;
  &:hover {
    background: #fff;
  }
}
</style>
