<template>
  <div class="w-[850px]">
    <div class="flex justify-between text-[#122c67]">
      <span class="text-[24px] font-bold">热门仪器</span>
      <a class="text-[16px] hover:font-bold text-[#122c67]">更多</a>
    </div>
    <div class="h-[4px] bg-[#eee] mt-[10px] mb-[30px]"><div class="bg-[#122C67] h-full w-[100px]"></div></div>

    <div class="flex justify-between">
      <a v-for="item in list" class="" style="width: calc(100% / 3 - 21px);">
        <img :src="item.img" class="h-[210px]" alt="">
        <h3 class="text-[16px] leading-[24px] mt-[15px] mb-[20px] font-bold line-clamp-2 h-[48px]">{{ item.name }}</h3>
        <div class="text-[14px] line-clamp-1 text-[#666] mb-[5px]">价格：{{ item.price }}</div>
        <div class="text-[14px] line-clamp-1 text-[#666] mb-[5px]">联系人：{{ item.user }}</div>
        <div class="text-[14px] line-clamp-1 text-[#666] mb-[5px]">电话：{{ item.phone }}</div>
        <div class="text-[14px] line-clamp-1 text-[#666] mb-[5px]">地址：{{ item.site }}</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const list = ref<any[]>([])
const getList = async () => {
  list.value = [
    { name: '全数字化核磁共振谱仪富士达范德萨发放大放大发大水发大水发大水发-化学化工学院', img: (await import('../../assets/img/ts6.jpg')).default, price: 482934.11, user: '朱**', phone: 1999999999, site: '实验室101室放假打卡手机疯狂里的数据阿里看风景懒得看数' },
    { name: '核磁共振质谱仪-化学化工学院', img: (await import('../../assets/img/ts6.jpg')).default, price: 1991977.11, user: '朱**', phone: 1999999999, site: '实验室101室' },
    { name: '全数字化核磁共振谱仪-化学化工学院', img: (await import('../../assets/img/ts6.jpg')).default, price: 5959920.11, user: '朱**', phone: 1999999999, site: '实验室101室' },
  ]
}
getList()
</script>

<style lang="less" scoped>

</style>