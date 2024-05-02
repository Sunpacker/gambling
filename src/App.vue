<script setup lang="ts">
import { defaultTheme } from '@/themes/default'
</script>

<template>
  <NConfigProvider :theme-overrides="defaultTheme">
    <RouterView />
  </NConfigProvider>
</template>
