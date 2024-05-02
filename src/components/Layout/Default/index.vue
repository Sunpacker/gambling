<script lang="ts" setup>
const authStore = useAuthStore()

const appReady = computed(() => !authStore.userLoading)

onMounted(() => {
  authStore.loadUser()
})
</script>

<template>
  <div
    v-if="!appReady"
    class="flex items-center justify-center h-screen w-full"
  >
    <NSpin show size="large" />
  </div>

  <div v-else class="flex flex-col h-screen">
    <LayoutDefaultNavbar />

    <div class="flex h-full">
      <div class="w-full">
        <RouterView />
      </div>

      <LayoutDefaultSidebarRight />
    </div>

    <LayoutDefaultBottom />
  </div>
</template>
