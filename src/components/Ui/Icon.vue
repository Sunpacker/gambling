<script setup lang="ts">
const icons = import.meta.glob(
  ['@/assets/icons/**/*.svg', '@/assets/icons/*.svg'],
  { as: 'raw' },
)

const props = withDefaults(
  defineProps<{
    name: string
    width?: number | string
    height?: number | string
    separator?: string
    color?: string
  }>(),
  {
    name: '',
    width: 14,
    height: 14,
    separator: '-',
  },
)

const styles = computed(() => ({
  minHeight:
    typeof props.width === 'number' ? `${props.height}px` : props.height,
  height: typeof props.width === 'number' ? `${props.height}px` : props.height,
  minWidth: typeof props.height === 'number' ? `${props.width}px` : props.width,
  width: typeof props.height === 'number' ? `${props.width}px` : props.width,
  fill: props.color,
}))

const iconContent = ref('')

async function init() {
  const pathParts = props.name.replace('-', '/').split('/')
  const fileName = pathParts.pop()

  if (pathParts.length === 0) {
    iconContent.value = await icons?.[`/src/assets/icons/${fileName}.svg`]?.()
    return
  }

  iconContent.value =
    await icons?.[
      `/src/assets/icons/${pathParts.join('/')}/${fileName}.svg`
    ]?.()
}

watch(() => props.name, init, { immediate: true })
</script>

<template>
  <span
    aria-hidden="true"
    :class="['inline-flex justify-center items-center select-none']"
    :style="styles"
    v-html="iconContent"
  />
</template>
