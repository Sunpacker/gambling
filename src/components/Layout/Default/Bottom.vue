<script lang="ts" setup>
import { formatBalance } from '@/utils/formatBalance'

const players = [
  {
    id: 1,
    name: 'Alex',
    gain: 770.35,
    avatar: 'https://i.imgur.com/GiItc2a.jpg',
  },
  {
    id: 2,
    name: 'Rachel',
    gain: 770.35,
    avatar: 'https://i.imgur.com/GiItc2a.jpg',
  },
  {
    id: 3,
    name: 'Valentino',
    gain: 770.35,
    avatar: 'https://i.imgur.com/GiItc2a.jpg',
  },
  {
    id: 4,
    name: 'Alex',
    gain: 770.35,
    avatar: 'https://i.imgur.com/GiItc2a.jpg',
  },
  {
    id: 5,
    name: 'Rachel',
    gain: 770.35,
    avatar: 'https://i.imgur.com/GiItc2a.jpg',
  },
  {
    id: 6,
    name: 'Valentino',
    gain: 770.35,
    avatar: 'https://i.imgur.com/GiItc2a.jpg',
  },
  {
    id: 7,
    name: 'Valentino',
    gain: 770.35,
    avatar: 'https://i.imgur.com/GiItc2a.jpg',
  },
]
</script>

<template>
  <div class="menu-bottom">
    <div class="left">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-wifi text-[20px]"></i>

        <div class="flex flex-col">
          <div class="text-[12px] font-bold uppercase">PING</div>
          <div class="text-white font-bold">65</div>
        </div>
      </div>

      <div class="hidden lg:block mx-8">
        <NButton secondary>{{ $t('history') }}</NButton>
      </div>

      <NScrollbar class="hidden lg:block" x-scrollable style="height: 40px">
        <div class="flex gap-3">
          <NButton v-for="player in players" :key="player.id" secondary>
            <div class="flex items-center gap-2">
              <UiAvatar size="small" />

              {{ player.name }}
              <span class="text-orange-300">{{
                formatBalance(player.gain)
              }}</span>

              <UiIcon name="coin" width="18px" height="18px" />
            </div>
          </NButton>
        </div>
      </NScrollbar>
    </div>

    <div class="right">
      <i class="fa-solid fa-keyboard"></i>
      <i class="fa-solid fa-lock"></i>
      <i class="fa-solid fa-chart-column"></i>
      <i class="fa-solid fa-circle-question"></i>
      <i class="fa-solid fa-gear"></i>
    </div>
  </div>

  <div class="menu-bottom-mobile">
    <NScrollbar class="bg-blue-900" style="max-height: 250px">
      <LayoutDefaultSidebarRight class="!flex !lg:hidden !max-w-full" />
    </NScrollbar>
  </div>
</template>

<style lang="scss" scoped>
.menu-bottom {
  @apply flex justify-between bg-[#131525] border-t border-blue-800 overflow-hidden;
}

.left,
.right {
  @apply flex items-center;
}

.left {
  @apply flex-1 p-3 h-16  overflow-x-auto overflow-y-hidden;
}

.right {
  @apply p-5 gap-6 z-10;
  @apply lg:shadow-[-124px_0_24px_16px_#131525];

  i {
    @apply text-[20px] cursor-pointer transition-all;
    @apply hover:scale-105;
    @apply active:scale-95;
    @apply lg:text-[24px];
  }
}

.menu-bottom-mobile {
  @apply flex justify-between bg-[#131525] border-t border-blue-800 overflow-hidden;
  @apply lg:hidden;
}
</style>
