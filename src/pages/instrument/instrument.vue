<template>
  <breadcrumbNav />
  <div class="w-[1200px] mx-auto flex justify-between py-[40px]">
    <div class="w-[800px]">
      <template v-if="loading">
        <div v-for="i in new Array(3).fill(0)" class="flex items-center mb-[30px]">
          <a-skeleton-image class="!w-[160px] pl-[20px]" />
          <a-skeleton class="flex-1" />
        </div>
      </template>
      <a-empty v-if="list.length === 0" />
      <div v-for="item in list" class="pb-[30px] mb-[30px] border-b border-dashed border-[#ddd] flex">
        <img :src="item.img" class="w-[140px] h-[140px]" alt="">
        <div class="ml-[30px] flex-1">
          <h3 @click="goDetail(item)" class="text-[20px] line-clamp-1 mb-[30px] cursor-pointer"><a-tag>{{ item.assetStatus }}</a-tag><span class="font-bold">{{ item.assetName }}</span></h3>
          <div class="flex flex-wrap text-[16px] text-[#666] leading-[20px]">
            <div class="w-1/2 mb-[10px]">仪器编号：{{ item.assetCode }}</div>
            <div class="w-1/2 mb-[10px]">管理员：{{ item.realName }} （{{ item.mobile }}）</div>
            <div class="w-1/2 mb-[10px]">放置位置：{{ item.storagePlace }}</div>
            <div class="w-1/2 mb-[10px]">仪器型号：{{ item.modelCode }}</div>
            <div class="w-1/2 mb-[10px]">仪器价值：{{ item.unitPrice }}万元</div>
          </div>
        </div>
      </div>
      <a-pagination
        v-model:current="current"
        v-model:page-size="pageSize"
        :pageSizeOptions="['3','5','10','20','30']"
        :total="total"
        :show-total="(total:any) => `共 ${total} 条`"
        @change="onTableChange"
      />
    </div>

    <div class="w-[300px]">
      <div class="border border-solid birder-[#ddd] bg-[#f9f9f9] p-[30px]">
        <a-input v-model:value="form.assetCode" class="!mb-[15px]" placeholder="仪器编号"></a-input>
        <a-input v-model:value="form.assetName" class="!mb-[15px]" placeholder="仪器名称"></a-input>
        <a-input v-model:value="form.modelCode" class="!mb-[15px]" placeholder="仪器类型"></a-input>
        <a-input v-model:value="form.userName" class="!mb-[15px]" placeholder="仪器管理员"></a-input>
        <a-tree-select v-model:value="form.deptId" :tree-data="deptList" :replaceFields="{title:'label',key:'id',value:'id'}" class="w-full !mb-[15px]" allowClear :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" placeholder="所属部门">
        </a-tree-select>
        <a-button class="w-full" @click="search" type="primary">搜索仪器</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumbNav from '@/components/breadcrumbNav.vue'
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getWebDeptList } from '@api/user'
import { getInstrumentList } from '@api/instrument'
const route = useRoute()
let form = reactive({
  assetName: '',
  assetCode: '',
  modelCode: '',
  userName: '',
  deptId: null,
})

const search = () => {
  current.value = 1
  getList()
}

const loading = ref(false)
const current = ref(1)
const pageSize = ref(3)
const total = ref(0)
const list = ref<any[]>([])
const getList = async() => {
  loading.value = true
  // let img = (await import('@/assets/img/ts6.jpg')).default
  // list.value = new Array(3).fill(0).map((item:any, i:any) => {
  //   return {
  //     img,
  //     name: '激光共聚显微镜'+(i+1),
  //     state: '启用',
  //     yqfl: '样品处理',
  //     syms: '按时预约 项目委托',
  //     site: '化学楼实验室101',
  //     yqxh: 'LSM780',
  //     ssjg: '化学化工学院',
  //   }
  // })
  let params = {
    ...form,
    pageNum: current.value,
    pageSize: pageSize.value,
  }
  getInstrumentList(params).then((res:any) => {
    loading.value = false
    if (res.code === 200) {
      let data = res.rows
      total.value = res.total
      list.value = data
    }
  })
}

const onTableChange = (page:any) => {
  // console.log(page);
  getList()
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

const router = useRouter()
const goDetail = (row:any) => {
  console.log(router);
  
  router.push({ name: 'instrumentDetail', query: { assetCode: row.assetCode } })
}

onMounted(() => {
  let params = (route.query.params && JSON.parse(route.query.params as string)) || form
  form = reactive(params)
  console.log(params);
  getDeptlist()
  getList()
})
</script>

<style lang="less" scoped>

</style>