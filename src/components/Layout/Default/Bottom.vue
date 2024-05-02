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
  <div class="flex items-center p-3 h-16 bg-[#131525]">
    <div class="flex items-center gap-2">
      <i class="fa-solid fa-wifi text-[20px]"></i>

      <div class="flex flex-col">
        <div class="text-[12px] font-bold uppercase">PING</div>
        <div class="text-white font-bold">65</div>
      </div>
    </div>

    <div class="mx-8">
      <NButton secondary>{{ $t('history') }}</NButton>
    </div>

    <div class="flex gap-3">
      <NButton v-for="player in players" :key="player.id" secondary>
        <div class="flex items-center gap-2">
          <UiAvatar size="small" />

          {{ player.name }}
          <span class="text-orange-300">{{ formatBalance(player.gain) }}</span>

          <UiIcon name="coin" width="18px" height="18px" />
        </div>
      </NButton>
    </div>
  </div>
</template>
