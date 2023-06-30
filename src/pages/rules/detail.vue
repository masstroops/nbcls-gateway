<template>
  <breadcrumbNav />
  <div class="w-[1200px] my-[40px] mx-auto">
    <div class="pb-[30px] mb-[30px] border-b border-dashed border-[#ddd]">
      <h1 class="text-[30px] font-bold leading-[40px]">{{ res.title }}</h1>
      <div class="mt-[15px] text-[16px] text-[#999]">
        <span class="mr-[30px]">{{ res.source }}</span>
        <span>{{ res.date }}</span>
      </div>
    </div>
    <div ref="content"></div>
  </div>
</template>

<script setup lang="ts">
import breadcrumbNav from '@components/breadcrumbNav.vue'
import { onMounted, ref } from 'vue'

const res = {
  title: '宁波材料所在倒置结构钙钛矿太阳能电池研究方面取得重要进展',
  source: '宁波材料所仪器共享平台',
  date: '2023-0630',
  content: `<div class="TRS_Editor"><p align="justify"><font style="line-height: 175%">　　钙钛矿以其长的载流子扩散长度、长的载流子复合寿命和宽的吸收范围，已经成为低成本和高性能太阳能电池的潜在材料。经过十多年的发展，单结钙钛矿太阳能电池的光电转换效率已提高至25%以上，为太阳能电池产业的升级转型提供了新途径。因倒置平板结构器件具有可低温制备、可忽略的迟滞效应、高稳定性的特性，并可以制备成叠层电池，所以其备受重视。然而由于钙钛矿材料的多晶性和离子特性，钙钛矿中存在大量导致离子迁移和载流子非辐射复合的缺陷，且缺陷是水/氧渗透的主要通道，会显著降低钙钛矿薄膜甚至器件的稳定性。</font></p>
<p align="justify"><font style="line-height: 175%">　　前期，中国科学院宁波材料技术与工程研究所有机光电材料与器件团队在葛子义研究员的带领下通过薄膜形貌调控、载流子传输层修饰和新型二维钙钛矿材料设计（<em>Angew. Chem.Int. Ed. 2023, 62, e2022175; Adv. Funct. Mater. 2023, 2301956; Adv. Energy Mater. 2021, 11, 2101416；Adv. Funct. Mater. 2022, 10, 2210600；Infomat 2022, e12379；Nano Energy 2022, 93, 106800；Energy Environ. Sci. 2022, 15, 3630</em>）等手段，大幅提升了钙钛矿太阳能电池的效率和稳定性。然而，钙钛矿中的缺陷和光诱导引起的相分离将显著降低钙钛矿太阳能电池的性能和稳定性。为了解决这一问题，团队基<font color="#000000">于添加剂工程，利用</font>可变形添加剂优化前驱体溶液胶体尺寸分布，增大钙钛矿薄膜晶粒尺寸，释放晶界残余应力，钝化铅、碘和有机阳离子缺陷，抑制光诱导引发的相分离。此外，添加剂还可优化钙钛矿能级，从而促进载流子提取/传输，减少陷阱辅助复合。通过该方法制备的钙钛矿太阳能电池的性能得到大幅度提升，基于富溴钙钛矿(FA<sub>0.88</sub>Cs<sub>0.12</sub>PbI<sub>2.64</sub>Br<sub>0.36</sub>) 和贫溴钙钛矿(FA<sub>0.96</sub>Cs<sub>0.04</sub>PbI<sub>2.8</sub>Br<sub>0.12</sub>)的器件分别获得了23.18%和24.14%的最佳效率，并且基于贫溴钙钛矿的柔性钙钛矿太阳能电池也获得了23.13%的出色效率，是迄今为止报道的柔性钙钛矿太阳能电池的最高值之一。这项工作为添加剂工程中钝化缺陷、应力消除和抑制相分离提供了新的见解，为开发最先进的太阳能电池提供了可靠方法。</font></p>
<p align="justify"><font style="line-height: 175%">　　相关成果以“A Deformable Additive on Defects Passivation and Phase Segregation Inhibition Enables the Efficiency of Inverted Perovskite Solar Cells over 24%”为题发表在国际知名期刊<em>Advanced Materials</em>（<a href="http://onlinelibrary.wiley.com/doi/10.1002/adma.202302752">http://onlinelibrary.wiley.com/doi/10.1002/adma.202302752</a>）上。宁波材料所博士后谢莉莎、硕士生刘健为共同第一作者，宁波材料所葛子义研究员和刘畅研究员为该论文的通讯作者。上述工作得到国家杰出青年基金（21925506）、国家自然科学基金（U21A20331、81903743、22279151、22209192、62275251）和博士后面上项目（2022M713242）等项目的支持。</font></p>
<p align="center"><font style="line-height: 175%"><img style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-top-width: 0px" alt="" oldsrc="W020230626617213950111.png" src="./W020230626617213950111.png"></font></p>
<p align="center"><font style="line-height: 175%">图 (a)添加剂与钙钛矿相互作用示意图；(b)刚性钙钛矿太阳能电池J-V特性曲线；(c)柔性钙钛矿太阳能电池器件结构及J-V特性曲线</font></p>
<p align="right"><font style="line-height: 175%">　　（新能源所 谢莉莎）</font></p></div>`
}
const content = ref()


onMounted(() => {
  content.value.innerHTML = res.content
})
</script>

<style scoped>

</style>