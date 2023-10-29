<template>
  <breadcrumbNav />
  <div class="w-[1200px] my-[40px] mx-auto">
    <h1 class="text-[20px] font-bold mb-[20px]">宁波材料所仪器共享平台</h1>
    <div class="flex justify-between">
      <div class="w-[600px] text-[16px] text-[#666]">
        <div class="mb-[12px]">联系单位：{{ info.associatedUnit }}</div>
        <div class="mb-[12px]">邮政编码：315201</div>
        <div class="mb-[12px]">办公地址：{{ info.officeAddress }}</div>
        <div class="mb-[12px]">联系人：{{ info.associate }}</div>
        <div class="mb-[12px]">技术咨询：{{ info.technicalServiceConsulting }}</div>
      </div>
      <div class="w-[600px] h-[300px]" id="map"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumbNav from '@components/breadcrumbNav.vue'
import { onMounted, ref } from 'vue';
import { getContact } from '@api/user'

const info = ref<any>({})
onMounted(() => {
  initMap()
  getContact().then((res:any) => {
    if (res.code === 200) {
      info.value = res.data
    }
  })
})
const initMap = () => {
  const map = new AMap.Map("map", {
    resizeEnable: true,
    center: [121.63,29.92],
    zoom: 16
  })
  new AMap.Marker({
    position: [121.63,29.92],
    map: map,
  })
  const infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30), content: '宁波材料所'})
  infoWindow.open(map, [121.63,29.92])
}
</script>

<style lang="less" scoped>

</style>