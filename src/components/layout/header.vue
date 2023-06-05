<template>
  <div class="header">
    <div class="w-[1200px] h-full relative mx-auto">
      <div class="flex justify-between h-[95px] mb-[35px]">
        <img class="w-[296px] h-[67px]" src="@/assets/img/nimtelogo.png" alt="">
        <div class="flex">
          <div @click="goto(item)" v-for="item in links" :class="{'link': true, 'linkActive': active === item.name}">{{ item.name }}</div>
        </div>
      </div>
      <h1 class="text-[30px] text-[#fff] font-semibold letter4">科研大仪设备开放共享平台</h1>
      <div class="mt-[28px]">
        <input v-model="insName" type="text" class="hInput w-[528px] h-[60px] bg-[#fff] text-[18px]" placeholder="请输入仪器名称">
        <button @click="search" class="w-[132px] h-[60px] text-white font-semibold text-[20px] bg-[#F1960D] hover:bg-[#da8709]">搜索</button>
      </div>
      <div class="absolute right-0 bottom-0 w-[109px] h-[64px] px-[15px] text-white font-semibold text-[18px] leading-[64px] cursor-pointer">
        <img class="w-[33px] h-[33px] mr-[10px] inline" src="@/assets/img/usericon.png" alt="">登录
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const links = ref([
  {name: '首页', url: '/home'},
  {name: '开放仪器', url: '/instrument'},
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
  height: 478px;
  padding-top: 50px;
  background: url(../../assets/img/2112221135383059261.png) no-repeat center;
  background-size: cover;
}
.link {
  width: 93px;
  height: 80px;
  border-bottom: 4px solid transparent;
  text-align: center;
  line-height: 80px;
  font-size: 20px;
  transition: .2s;
  font-weight: 700;
  margin-left: 22px;
  color: #fff;
  cursor: pointer;
  &:hover {
    border-color: #fff;
  }
}
.linkActive {
  border-color: #fff;
}
.letter4 {
  letter-spacing: 4px;
}
.hInput {
  text-indent: 18px;
  outline: 0;
}
</style>