<script lang="ts" setup>
import { formatCurrency } from '@/utils/formatCurrency'
import CardHidden from '@/assets/img/card-hidden.svg?raw'
import Card from '@/assets/img/card.svg?raw'

const cardsAmount = 4
</script>

<template>
  <div class="flex items-center gap-11">
    <div class="bet-info">
      <UiIcon class="bet-button" name="lower" width="64px" height="64px" />

      <div class="title">Low or same</div>
      <div class="result">
        <div>Win</div>

        <div class="flex items-center gap-1">
          <span class="text-orange-300">{{ formatCurrency(275.43) }}</span>
          <UiIcon name="coin" width="16px" height="16px" />
        </div>
      </div>
    </div>

    <div class="cards-hidden flex gap-5" v-html="Card" />
    <div
      class="cards-hidden flex gap-5"
      v-html="CardHidden.repeat(cardsAmount)"
    />

    <div class="bet-info">
      <UiIcon class="bet-button" name="higher" width="64px" height="64px" />

      <div class="title">High or same</div>
      <div class="result">
        <div>Win</div>

        <div class="flex items-center gap-1">
          <span class="text-orange-300">{{ formatCurrency(275.43) }}</span>
          <UiIcon name="coin" width="16px" height="16px" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bet-info {
  @apply flex flex-col justify-center items-center gap-2 text-center whitespace-nowrap;

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
