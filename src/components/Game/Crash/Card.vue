<script lang="ts" setup>
import CardHidden from '@/assets/img/card-hidden.svg?raw'
import Card from '@/assets/img/card.svg?raw'
</script>

<template>
  <div class="playing-card">
    <div class="card-front" v-html="Card" />
    <div class="card-back" v-html="CardHidden" />
  </div>
</template>

<style lang="scss" scoped>
.playing-card {
  @apply relative w-[80px] h-[120px] bg-transparent;
  @apply lg:w-[135px] lg:h-[203px];
  @apply min-[1070px]:w-[185px] min-[1070px]:h-[277px];
  perspective: 1000px;
  transform-style: preserve-3d;

  &:deep(svg) {
    width: 100%;
  }
}

.card-front,
.card-back {
  @apply absolute w-full h-full;
  backface-visibility: hidden;
}

.card-front {
  transform: rotateY(-180deg);
}
</style>
