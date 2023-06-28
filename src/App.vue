<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import { ConfigProvider } from 'ant-design-vue'
// const colorStates = {
//   // primaryColor: '#122C67',
//   // errorColor: 'red',
//   // warningColor: 'red',
//   // successColor: 'red',
//   // infoColor: 'red'
// }
// ConfigProvider.config({
//   theme: colorStates
// })
console.log(import.meta.env.VITE_LOCATION)
</script>

<template>
  <a-config-provider :locale="zhCN">
    <RouterView />
  </a-config-provider>
</template>

<style scoped>
</style>
