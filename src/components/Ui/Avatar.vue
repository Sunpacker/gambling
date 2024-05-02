<script lang="ts" setup>
const props = defineProps<{
  src?: string
}>()
</script>

<template>
  <NAvatar
    round
    :src="props.src"
    fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
  />
</template>
