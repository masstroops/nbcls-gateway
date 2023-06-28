<template>
  <div class="border-b border-solid border-[#ddd]">
    <div class="w-[1200px] mx-auto h-[50px] flex items-center">
      <a-breadcrumb>
        <a-breadcrumb-item><router-link :to="'/home'">首页</router-link></a-breadcrumb-item>
        <a-breadcrumb-item>{{ routename }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const routename = useRoute()?.meta.title

</script>

<style lang="less" scoped>
:deep(.ant-breadcrumb-link), :deep(.ant-breadcrumb-separator) {
  font-size: 16px;
}
</style>