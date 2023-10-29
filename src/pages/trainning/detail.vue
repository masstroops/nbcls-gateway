<template>
  <contentDetail :reqFun="getDetail" />
</template>

<script setup lang="ts">
import contentDetail from '@/components/contentDetail.vue'
import { getNewsList } from '@api/news'
import { useRoute } from 'vue-router'

const route = useRoute()
const getDetail = () => {
  return new Promise((resolve, reject) => {
    let params = {
      type: 8,
      pageNum: 1,
      pageSize: 1,
      headline: route.query.headline,
    }
    getNewsList(params).then((res:any) => {
      resolve(res.rows[0])
    })
  })
}
</script>

<style scoped>

</style>