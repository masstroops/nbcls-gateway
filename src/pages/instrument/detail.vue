<template>
  <breadcrumbNav />
  <div class="w-[1200px] my-[40px] mx-auto flex justify-between">
    <div class="w-[800px]">
      <div class="flex">
        <img src="@/assets/img/ts6.jpg" class="w-[300px] h-[300px]" alt="">
        <div class="flex-1 pl-[40px]">
          <h1 class="text-[24px] font-bold mb-[10px]">{{ info.name }}</h1>
          <div class="text-[16px] leading-[36px] text-[#999]">规格型号：<span class="text-black">{{ info.ggxh }}</span></div>
          <div class="text-[16px] leading-[36px] text-[#999]">运行状态：<a-tag color="green">{{ info.yxzt }}</a-tag></div>
          <div class="text-[16px] leading-[36px] text-[#999]">仪器类型：<span class="text-black">{{ info.yqlx }}</span></div>
          <div class="text-[16px] leading-[36px] text-[#999]">仪器认证：<span class="text-black">{{ info.yqrz }}</span></div>
          <div class="text-[16px] leading-[36px] text-[#999]">参考收费标准：<span class="text-black">{{ info.cksfbz }}</span></div>
          <a-button type="primary" class="mt-[39px]">立即预约</a-button>
        </div>
      </div>
      <div class="mt-[30px] px-[30px] py-[20px] border border-solid border-[#ddd] border-t-[3px] border-t-[#122c67]">
        <div class="border-b-[4px] border-b-[#eee] border-solid text-[20px] text-[#122c67] font-bold pb-[15px]">服务信息</div>
        <div class="mb-[20px] py-[20px] border-b border-dashed border-[#ddd] text-[16px] flex leading-[30px]">
          <div class="w-[140px] text-[#999] text-right">技术指标：</div>
          <div class="flex-1 pl-[20x]">{{ info.jszb }}</div>
        </div>
        <div class="mb-[20px] pb-[20px] border-b border-dashed border-[#ddd] text-[16px] flex leading-[30px]">
          <div class="w-[140px] text-[#999] text-right">主要功能：</div>
          <div class="flex-1 pl-[20x]">{{ info.zygn }}</div>
        </div>
        <div class="mb-[20px] pb-[20px] border-b border-dashed border-[#ddd] text-[16px] flex leading-[30px]">
          <div class="w-[140px] text-[#999] text-right">服务内容：</div>
          <div class="flex-1 pl-[20x]">{{ info.fwnr }}</div>
        </div>
        <div class="text-[16px] flex leading-[30px]">
          <div class="w-[140px] text-[#999] text-right whitespace-nowrap">对外开放共享规定：</div>
          <div class="flex-1 pl-[20x]">{{ info.dwkf }}</div>
        </div>
      </div>
      <div class="mt-[30px] px-[30px] py-[20px] border border-solid border-[#ddd] border-t-[3px] border-t-[#122c67]">
        <div class="border-b-[4px] border-b-[#eee] border-solid text-[20px] text-[#122c67] font-bold pb-[15px]">联系方式</div>
        <div class="mt-[30px] flex flex-wrap leading-[30px] text-[16px] text-[#999]">
          <div class="w-1/2 flex"><div class="w-[100px] text-right">所在单位：</div><span class="text-black">{{ info.szdw }}</span></div>
          <div class="w-1/2 flex"><div class="w-[100px] text-right">联系人：</div><span class="text-black">{{ info.user }}</span></div>
          <div class="w-1/2 flex"><div class="w-[100px] text-right">联系电话：</div><span class="text-black">{{ info.phone }}</span></div>
          <div class="w-1/2 flex"><div class="w-[100px] text-right">电子邮箱：</div><span class="text-black">{{ info.email }}</span></div>
          <div class="flex"><div class="w-[100px] text-right">仪器地址：</div><span class="text-black">{{ info.address }}</span></div>
        </div>
      </div>
    </div>

    <div class="w-[300px]">
      <div class="flex justify-between text-[#122c67]">
        <span class="text-[20px] font-bold">热点仪器</span>
        <a class="text-[16px] hover:font-bold text-[#122c67]">更多</a>
      </div>
      <div class="h-[4px] bg-[#eee] mt-[10px] mb-[30px]"><div class="bg-[#122C67] h-full w-[80px]"></div></div>
      <template v-for="(item, i) in list">
        <a v-if="i === 0" class="relative block mb-[20px]">
          <img src="@/assets/img/ts6.jpg" class="w-[300px] h-[240px]" alt="">
          <div class="bg-[rgba(0,0,0,.6)] text-[14px] text-white absolute bottom-0 p-[15px] w-full">{{ item.name }}</div>
        </a>
        <a class="text-[16px] leading-[40px]">·<span class="ml-[10px]">{{ item.name }}</span></a>
    </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumbNav from '@/components/breadcrumbNav.vue'
import { ref } from 'vue';

const info = ref<any>({})
info.value = {
  name: '全数字化核磁共振谱仪',
  ggxh: 'AVⅢ-400M',
  yxzt: '启用',
  yqlx: 'AVⅢ-400M',
  yqrz: '已进行计量认证',
  cksfbz: '按相关收费标准执行',
  jszb: '主要技术指标•标准宽带范围：BB=31P-15N•灵敏度：367S/N1H NMR，0.1EB 263S/N 13C NMR, ASTM•分辨率： 0.38HZ 1H，0.1CHCl3，0.13 13C NMR, ASTM',
  zygn: '主要功能及应用范围•测定液体的各种样品的高分辨核磁共振波谱，以获取各种分子水平的结构信息。•适于化学、生物、医药、石油化工等领域的物质鉴定，结构分析，化学反应机理测定，动力学研究等，也直接应用于生产开发及质量控制分析。',
  fwnr: '其他',
  dwkf: '客户提前10天申请，商榷检定日期，检定人员到现场检定，待检定合格后方可使用。',
  szdw: '化学化工学院',
  user: '朱**',
  phone: '19999999999',
  email: '1@1.com',
  address: '实验楼101',
}

const list = ref<any[]>([])
list.value = [
  { name: '全数字化核磁共振谱仪' },
  { name: '核磁共振波普仪' },
  { name: 'X射线衍射仪' },
]
</script>

<style scoped>

</style>