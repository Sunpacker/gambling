<script lang="ts" setup>
import CardHidden from '@/assets/img/card-hidden.svg?raw'
import Card from '@/assets/img/card.svg?raw'
</script>

<template>
  <div>
    <div class="cards flex gap-5" v-html="Card" />
    <div class="cards-hidden flex gap-5" v-html="CardHidden" />
  </div>
</template>

<style lang="scss" scoped></style>
