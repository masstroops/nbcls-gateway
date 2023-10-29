<template>
  <breadcrumbNav />
  <div class="w-[1200px] my-[40px] mx-auto">
    <a-skeleton :loading="loading">
      <div class="pb-[30px] mb-[30px] border-b border-dashed border-[#ddd]">
        <h1 class="text-[30px] font-bold leading-[40px]">{{ info.headline }}</h1>
        <div class="mt-[15px] text-[16px] text-[#999]">
          <span class="mr-[30px]">{{ info.contentText }}</span>
          <span>{{ info.addTime }}</span>
        </div>
      </div>
      <div ref="content"></div>
    </a-skeleton>
  </div>
</template>

<script setup lang="ts">
import breadcrumbNav from '@components/breadcrumbNav.vue'
import { nextTick, onMounted, ref } from 'vue'

const { reqFun } = defineProps<{
  reqFun: Function;

}>()

const content = ref()
const info = ref<any>({})
const loading = ref(false)

onMounted(() => {
  loading.value = true
  reqFun().then((res:any) => {
    loading.value = false
    info.value = res
    nextTick(() => {
      content.value.innerHTML = res.content
    })
  })
})
</script>

<style scoped>

</style>