<template>
  <Content :reqFun="getList" path="trainningDetail" />

  <div>

  </div>
</template>

<script setup lang="ts">
import Content from '@components/content.vue'
import { getNewsList } from '@api/news'

const getList = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(async() => {
    //   let img = (await import('@/assets/img/2112221135383059261.png')).default
    //   resolve([
    //     { img, name: '贵重实验室仪器设备评价考核管理办法1', date: '2023-06-29' },
    //     { img, name: '贵重实验室仪器设备评价考核管理办法2', date: '2023-06-29' },
    //     { img, name: '贵重实验室仪器设备评价考核管理办法3', date: '2023-06-29' },
    //   ])
    // }, 1000)
    let params = {
      type: 8,
      pageNum: 1,
      pageSize: 3,
    }
    getNewsList(params).then((res:any) => {
      resolve(res)
    })
  })
}
</script>

<style lang="less" scoped>

</style>