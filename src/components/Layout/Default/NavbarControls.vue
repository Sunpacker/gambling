<script lang="ts" setup>
const authStore = useAuthStore()
const balance = computed(() => {
  if (!authStore.user) return 0
  return formatBalance(String(authStore.user.balance))
})
</script>

<template>
  <NButton secondary icon-placement="right">
    <template #icon>
      <UiIcon name="coin" width="18px" height="18px" />
    </template>

    <span class="text-[16px] text-orange-300"> {{ balance }} </span>
  </NButton>

  <NButton type="primary">
    <template #icon>
      <i class="fa-solid fa-square-plus" />
    </template>

    {{ $t('deposit') }}
  </NButton>

  <UiAvatar :src="authStore.user?.avatar" />
</template>

<style lang="scss" scoped></style>
