<template>
  <div class="h-[440px] bg-[#e9eef2]">
    <div class="w-[1200px] mx-auto flex items-center">
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
