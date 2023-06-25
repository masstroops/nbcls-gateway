<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: 'icon',
  },
  color: {
    type: String,
    default: 'currentColor',
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
}
</style>