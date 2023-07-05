<template>
  <div class="header">
    <div class="header_con w-[1200px] h-full mx-auto flex justify-between items-center">
      <img src="@/assets/img/nimtelogo.png" alt="" class="w-[756px] ">
      <div class="w-[400px] h-[40px] border-2 border-[#122c67] border-solid">
        <input v-model="insName" type="text" class="leading-[36px] px-[12px] py-[6px] h-[36px] text-[16px] outline-0 w-[346px]" placeholder="请输入仪器名称">
        <SvgIcon @click="search" name="search" class="inline-block w-[50px] h-[36px] p-[8px] text-[#122c67] cursor-pointer" />
        <!-- <button class="w-[132px] h-[60px] text-white font-semibold text-[20px] bg-[#F1960D] hover:bg-[#da8709]">搜索</button> -->
      </div>
    </div>
  </div>
  <div class="h-[60px] bg-[#122c67]">
    <div class="flex w-[1200px] mx-auto h-full text-white leading-[60px]">
      <div @click="goto(item)" v-for="item in links" :class="{'link': true, 'linkActive': active === item.name}">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const { setToken, setUserInfo, logout } = userStore
const { token } = storeToRefs(userStore)
const login = () => {
  if (token.value) logout()
  else setToken('123')
}

const router = useRouter()
const links = ref([
  {name: '首页', url: '/home'},
  {name: '开放仪器', url: '/instrument'},
  {name: '规章制度', url: '/rules'},
  {name: '新闻动态', url: '/news'},
  {name: '培训讲座', url: '/trainning'},
  {name: '平台简介', url: '/introduction'},
  {name: '联系方式', url: '/contact'},
  {name: '预约入口', url: '/login'},
])

const active = ref('首页')
const goto = (val: any) => {
  active.value = val.name
  router.push({ path: val.url })
}

const insName = ref('')
const search = () => {
  router.push({ path: '/instrument', query: { name: insName.value } })
}

</script>

<style lang="less" scoped>
.header {
  height: 140px;
  .header_con {
    background: url(@/assets/img/bg-header.png) no-repeat right bottom;
  }
}
.link {
  padding: 0 40px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #092054;
  }
}
</style>