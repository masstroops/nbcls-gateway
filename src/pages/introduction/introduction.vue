<template>
  <breadcrumbNav />
  <div class="w-[1200px] my-[40px] mx-auto">
    <div ref="content"></div>
  </div>
</template>

<script setup lang="ts">
import breadcrumbNav from '@components/breadcrumbNav.vue'
import { onMounted, ref } from 'vue'

const res = `<div class="aboutmain">
            <div style="line-height: 60px;margin-bottom: 30px;text-align: center;font-size: 24px;">
                <b>宁波材料所平台简介</b>
            </div>
            <p><strong><span style="font-family: 微软雅黑; font-size: 21px;"><br></span></strong></p><p><strong><span style="font-family: 微软雅黑; font-size: 21px;">实验室与设备管理处管理职责</span></strong></p><p style="margin-top: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;1. 根据国家的政策和法规，以及学校发展规划与目标的需要，制定实验室和贵重仪器设备管理的规章制度，并组织实施；</span></p><p style="margin-top: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;2. 负责实验室建设运行管理，统筹全校公共仪器平台建设与实验室信息化建设工作；</span></p><p style="margin-top: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;3. 负责贵重仪器设备管理，承担全校教学科研类贵重仪器设备可行性论证的组织与审批工作。做好贵重仪器设备开放共享与使用收费、仪器资源占用收费以及贵重仪器设备使用情况数据的收集整理、报表统计及使用绩效分析工作；</span></p><p style="margin-top: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;4. 负责实验室安全管理，牵头管理全校实验室的危险化学品、生物安全、放射性同位素及射线装置、特种设备、仪器设备的安全监管工作，落实实验室安全管理责任。开展并督促学院做好实验室安全宣传、教育培训与实验室准入工作。承担厦门大学实验室安全管理领导小组办公室的工作职能；</span></p><p style="margin-top: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;5. 配合人事部门做好实验（工程）技术队伍的宏观管理，继续教育与培训工作；</span></p><p style="margin-top: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;6. 负责管理协调校分析测试中心及实验室资质认定的相关事务；</span></p><p style="margin-top: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;7. 完成学校交办的其他事宜。</span></p><p><span style="font-family: 仿宋_GB2312; font-size: 21px;">&nbsp;</span></p><p><strong><span style="font-family: 微软雅黑; font-size: 21px;">实验室建设管理科主要职责</span></strong></p><p style="text-indent: 43px;"><span style="font-family: 微软雅黑; font-size: 21px;">负责贵重仪器设备购置前可行性论证；贵重仪器设备开放共享、使用收费管理；实验室资源优化配置；实验室信息化建设；贵重仪器设备信息管理与统计；贵重仪器设备入库建账；大型仪器设备运行监督与考核评价；工程技术人员管理业务培训等。</span></p><p style="text-indent: 43px;"><span style="font-family: 仿宋_GB2312; font-size: 21px;">&nbsp;</span></p><p><strong><span style="font-family: 微软雅黑; font-size: 21px;">共享服务平台简介</span></strong></p><p style="text-indent: 28px;"><span style="font-family: 微软雅黑; font-size: 21px;">为构建完善共享管理机制，扩大开放共享服务成效，切实提高贵重实验仪器使用效益，实验室与设备管理处提升管理服务、支撑平台建设，建成了融合仪器论证、购置、查询、预约、共享、缴费、调拨、报废等功能的全生命周期“一站式”校院两级综合服务共享平台。截止目前，我校共拥有院级公共仪器服务平台15个，测试分中心8个。</span></p><p><span style="font-family: 仿宋_GB2312; font-size: 21px;">&nbsp;</span></p><p><strong><span style="font-family: 微软雅黑; font-size: 21px;">人员介绍</span></strong></p><p style="margin-top: 10px; margin-bottom: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;张三/处长 &nbsp;</span></p><p style="margin-top: 10px; margin-bottom: 10px; text-indent: 43px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;主持实验室与设备管理处全面工作。</span></p><p style="margin-top: 10px; margin-bottom: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;李四/副处长</span></p><p style="margin-top: 10px; margin-bottom: 10px; text-indent: 43px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;负责管理翔安校区实验办，协助处长管理贵重仪器设备运行管理与开放共享，贵重仪器设备可行性论证，实验室建设等工作。</span></p><p style="margin-top: 10px; margin-bottom: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;王五/科长</span></p><p style="margin-top: 10px; margin-bottom: 10px; text-indent: 43px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;负责实验室建设管理科工作，承担贵重仪器设备开放共享、实验室资源优化配置、贵重仪器设备开放使用收费、实验室信息化建设等工作。</span></p><p style="margin-top: 10px; margin-bottom: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;陈六/科员</span></p><p style="margin-top: 10px; margin-bottom: 10px; text-indent: 43px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;承担贵重仪器设备信息管理与统计、贵重仪器设备入库建账、贵重仪器设备运行监督、贵重仪器设备考核与评价等工作。</span></p><p style="margin-top: 10px; margin-bottom: 10px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;张三/科员</span></p><p style="margin-top: 10px; margin-bottom: 10px; text-indent: 43px;"><span style="font-family: 微软雅黑; font-size: 21px;">&nbsp;&nbsp;&nbsp;&nbsp;承担贵重仪器设备可行性论证、贵重仪器设备管理与业务培训、上级部门和行业协会事务、单位财务及文宣等工作。</span></p><p><br></p><p><br></p>        </div>`
const content = ref()

onMounted(() => {
  content.value.innerHTML = res
})
</script>

<style scoped>

</style>