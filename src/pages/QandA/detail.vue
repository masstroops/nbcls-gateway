<template>
  <breadcrumbNav />
  <div class="w-[1200px] my-[40px] mx-auto">
    <a-skeleton :loading="loading">
      <div class="pb-[30px] mb-[30px] border-b border-dashed border-[#ddd]">
        <h1 class="text-[30px] font-bold leading-[40px]">{{ info.title }}</h1>
        <div class="mt-[15px] text-[16px] text-[#999]">
          <span class="mr-[30px]">{{ info.contextUser }}</span>
          <span>{{ info.gmtCreate }}</span>
        </div>
      </div>
      <div ref="content"></div>
    </a-skeleton>
  </div>
</template>

<script setup lang="ts">
import { getQuestionListAll } from '@api/news'
import { onMounted, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const info = ref<any>({})
const loading = ref(true)
const content = ref()
const getDetail = () => {
  let params = {
    pageNum: 1,
    pageSize: 999,
    headline: route.query.headline,
  }
  getQuestionListAll(params).then((res:any) => {
    loading.value = false
    res.rows.forEach((item:any) => {
      if (route.query.headline == item.title) {
        info.value = item
        nextTick(() => {
          content.value.innerHTML = item.content
        })
      }
    })
  })
}
onMounted(() => {
  getDetail()
})
</script>

<style scoped>

</style>