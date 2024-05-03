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
</script>

<template>
  <nav class="navbar">
    <div class="left overflow-x-auto">
      <RouterLink :to="{ name: 'home' }">
        <img :src="Logo" class="mr-8" />
      </RouterLink>

      <NScrollbar x-scrollable style="height: 100%">
        <div class="flex gap-6">
          <div v-for="link in links" :key="link.name" class="link">
            <RouterLink
              class="flex justify-center items-center gap-1"
              :to="{ name: link.name }"
            >
              <UiIcon :name="link.name" width="24px" height="24px" />
              {{ link.label }}
            </RouterLink>
          </div>
        </div>
      </NScrollbar>
    </div>

    <div class="right gap-3">
      <LayoutDefaultNavbarControls />
    </div>
  </nav>

  <nav class="navbar-mobile">
    <NButton secondary>
      <i class="fa-solid fa-bars"></i>
    </NButton>

    <div class="flex items-center gap-3">
      <LayoutDefaultNavbarControls />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  @apply hidden justify-between items-center gap-6 px-12 border-b border-blue-800 bg-blue-900;
  @apply lg:flex;

  .left,
  .right {
    @apply flex items-center;
  }
}

.link {
  @apply relative py-7 px-6 text-blue-500 fill-blue-500 font-semibold;

  a.router-link-exact-active {
    @apply text-white fill-blue-700;

    &:after {
      content: '';
      @apply absolute bottom-0 w-full h-0.5 bg-blue-700 rounded-xl;
    }
  }
}

.navbar-mobile {
  @apply flex justify-between items-center p-3 bg-blue-900;
  @apply lg:hidden;
}
</style>
