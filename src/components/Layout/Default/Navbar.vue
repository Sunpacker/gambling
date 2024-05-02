<script lang="ts" setup>
import Logo from '@/assets/img/logo.svg'

const links = [
  { name: 'game-crash', label: 'Crash' },
  { name: 'game-dice', label: 'Dice' },
  { name: 'game-plinko', label: 'Plinko' },
  { name: 'game-roulette', label: 'Roulette' },
  { name: 'game-tower', label: 'Tower' },
  { name: 'game-wheel', label: 'Wheel' },
  { name: 'game-slots', label: 'Slots' },
  { name: 'game-hilo', label: 'Hilo' },
  { name: 'game-mines', label: 'Mines' },
  { name: 'game-keno', label: 'Keno' },
]

const authStore = useAuthStore()
const balance = computed(() => {
  if (!authStore.user) return 0
  return formatBalance(String(authStore.user.balance))
})
</script>

<template>
  <nav class="navbar">
    <div class="left">
      <RouterLink :to="{ name: 'home' }">
        <img :src="Logo" class="mr-8" />
      </RouterLink>

      <RouterLink
        v-for="link in links"
        :key="link.name"
        class="link"
        :to="{ name: link.name }"
      >
        <UiIcon :name="link.name" width="24px" height="24px" />
        {{ link.label }}
      </RouterLink>
    </div>

    <div class="right gap-3">
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
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  @apply hidden justify-between items-center px-12 border-b border-blue-800 bg-blue-900;
  @apply min-[1640px]:flex;

  .left,
  .right {
    @apply flex items-center;
  }
}

.link {
  @apply flex justify-center items-center gap-1 py-7 px-6 text-blue-500 fill-blue-500 font-semibold;

  &.router-link-exact-active {
    @apply relative text-white fill-blue-700;

    &:after {
      content: '';
      @apply absolute bottom-0 w-full h-0.5 bg-blue-700 rounded-xl;
    }
  }
}
</style>
