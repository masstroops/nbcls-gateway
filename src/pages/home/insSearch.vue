<template>
  <div class="w-[300px]">
    <div class="flex justify-between text-[#122c67]">
      <span class="text-[24px] font-bold">仪器搜索</span>
    </div>
    <div class="h-[4px] bg-[#eee] mt-[10px] mb-[30px]"><div class="bg-[#122C67] h-full w-[100px]"></div></div>

    <a-input v-model:value="form.assetCode" class="!mb-[15px]" placeholder="仪器编号"></a-input>
    <a-input v-model:value="form.assetName" class="!mb-[15px]" placeholder="仪器名称"></a-input>
    <a-input v-model:value="form.modelCode" class="!mb-[15px]" placeholder="仪器类型"></a-input>
    <a-input v-model:value="form.userName" class="!mb-[15px]" placeholder="仪器管理员"></a-input>
    <a-tree-select v-model="form.deptId" :tree-data="deptList" :replaceFields="{title:'label',key:'id',value:'id'}" class="w-full !mb-[15px]" allowClear :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" placeholder="所属部门">
    </a-tree-select>
    <a-button class="w-full" @click="search" type="primary">搜索仪器</a-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { getWebDeptList } from '@api/user'
import { useRouter } from 'vue-router'

const form = reactive({
  assetName: '',
  assetCode: '',
  modelCode: '',
  userName: '',
  deptId: null,
})

const router = useRouter()
const search = () => {
  console.log(form);
  router.push({ name: 'instrument', query: { params: JSON.stringify(form) } })
}

// 获取部门
const deptList = ref([])
const getDeptlist = () => {
  getWebDeptList().then((res:any) => {
    if (res.code === 200) {
      deptList.value = res.data
    }
  })
}
onMounted(() => {
  getDeptlist()
})
</script>

<style lang="less" scoped>

</style>