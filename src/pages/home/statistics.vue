<template>
  <a-tabs v-model:activeKey="activeKey" size="large">
    <a-tab-pane key="1" tab="平台数据统计">
      <div class="flex flex-wrap mt-[10px] mb-[50px]">
        <div class="sta1">
          <img src="http://iosp.xmu.edu.cn/img/1.png" class="sta1_img" alt="">
          <div>
            <div class="sta1_text1">6127</div>
            <div class="sta1_text2">仪器总数量（台）</div>
          </div>
        </div>
        <div class="sta1">
          <img src="http://iosp.xmu.edu.cn/img/2.png" class="sta1_img" alt="">
          <div>
            <div class="sta1_text1">28</div>
            <div class="sta1_text2">公共平台总数（个）</div>
          </div>
        </div>
        <div class="sta1">
          <img src="http://iosp.xmu.edu.cn/img/3.png" class="sta1_img" alt="">
          <div>
            <div class="sta1_text1">4321423</div>
            <div class="sta1_text2">服务总人次</div>
          </div>
        </div>
        <div class="sta1">
          <img src="http://iosp.xmu.edu.cn/img/4.png" class="sta1_img" alt="">
          <div>
            <div class="sta1_text1">4321423/478924899</div>
            <div class="sta1_text2">支撑学科交叉人次/机时（小时）</div>
          </div>
        </div>
        <div class="sta1">
          <img src="http://iosp.xmu.edu.cn/img/5.png" class="sta1_img" alt="">
          <div>
            <div class="sta1_text1">3882</div>
            <div class="sta1_text2">人才培养数量</div>
          </div>
        </div>
        <div class="sta1">
          <img src="http://iosp.xmu.edu.cn/img/6.png" class="sta1_img" alt="">
          <div>
            <div class="sta1_text1">2228</div>
            <div class="sta1_text2">实验室数量</div>
          </div>
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="仪器统计排行" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="仪器月度使用统计">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="4" tab="预约机时排行">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeKey = ref('1')
</script>

<style lang="less" scoped>
.sta1 {
  @apply w-1/3 mb-[30px] flex items-center;
  .sta1_img {
    width: 80px;
    height: 80px;
  }
  .sta1_text1 {
    font-size: 24px;
    color: #f00;
  }
  .sta1_text2 {
    font-size: 16px;
    color: black;
  }
}
.ant-tabs :deep(.ant-tabs-nav) {
  border-bottom: 4px solid #eee !important;
  .ant-tabs-nav-wrap {
    overflow: unset;
  }
}
.ant-tabs-top :deep(.ant-tabs-nav .ant-tabs-ink-bar) {
  height: 4px;
  bottom: -4px;
}
.ant-tabs-large :deep(.ant-tabs-nav .ant-tabs-tab) {
  font-size: 24px;
}
:deep(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
  font-weight: 700;
}
</style>