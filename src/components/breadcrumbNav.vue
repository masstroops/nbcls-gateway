<template>
  <div class="border-b border-solid border-[#ddd]">
    <div class="w-[1200px] mx-auto h-[50px] flex items-center">
      <a-breadcrumb>
        <a-breadcrumb-item><router-link :to="'/home'">首页</router-link></a-breadcrumb-item>
        <a-breadcrumb-item v-if="!detailFlag">{{ routename }}</a-breadcrumb-item>
        <template v-else>
          <a-breadcrumb-item><router-link @click="router.go(-1)" to="">{{ routename }}</router-link></a-breadcrumb-item>
          <a-breadcrumb-item>查看详情</a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const routename = route.meta?.title
const detailFlag = ref(false)
// const prePath = ref('')
if (route.path.indexOf('detail') > -1) {
  // prePath.value = '/' + route.path.split('/')[1]
  detailFlag.value = true
}

</script>

<style lang="less" scoped>
:deep(.ant-breadcrumb-link), :deep(.ant-breadcrumb-separator) {
  font-size: 16px;
}
</style>