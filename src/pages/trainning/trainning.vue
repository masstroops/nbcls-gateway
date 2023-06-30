<template>
  <Content :reqFun="getList" />

  <div>

  </div>
</template>

<script setup lang="ts">
import Content from '@components/content.vue'

const getList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async() => {
      let img = 'https://www.nimte.ac.cn/news/news/202304/W020230629491056957282.jpg'
      resolve([
        { img, name: '贵重实验室仪器设备评价考核管理办法1', date: '2023-06-29' },
        { img, name: '贵重实验室仪器设备评价考核管理办法2', date: '2023-06-29' },
        { img, name: '贵重实验室仪器设备评价考核管理办法3', date: '2023-06-29' },
      ])
    }, 1000)
  })
}
</script>

<style lang="less" scoped>

</style>