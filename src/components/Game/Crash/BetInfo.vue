<script lang="ts" setup>
import { formatCurrency } from '@/utils/formatCurrency'

const props = defineProps<{
  type: 'lower' | 'higher'
}>()
</script>

<template>
  <div :class="['bet-info', props.type]">
    <UiIcon class="bet-button" :name="props.type" width="64px" height="64px" />

    <div class="title">
      {{ props.type === 'higher' ? $t('higher') : $t('lower') }}
    </div>
    <div class="result">
      <div>Win</div>

      <div class="flex items-center gap-1">
        <span class="text-orange-300">{{ formatCurrency(275.43) }}</span>
        <UiIcon name="coin" width="16px" height="16px" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bet-info {
  @apply flex flex-col justify-center items-center gap-2 text-center whitespace-nowrap transition-all;

  &.lower {
    @apply min-[1020px]:translate-x-[64px];
    @apply min-[1460px]:translate-x-[128px];
  }
  &.higher {
    @apply min-[1020px]:-translate-x-[64px];
    @apply min-[1460px]:-translate-x-[128px];
  }

  .title {
    @apply text-white font-semibold;
  }

  .result {
    @apply flex items-center gap-1.5 font-semibold;
  }
}

.bet-button {
  @apply cursor-pointer transition-all;
  @apply active:scale-105;
}
</style>
