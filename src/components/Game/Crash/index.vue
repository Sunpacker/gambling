<script lang="ts" setup>
import gsap from 'gsap'
import { formatCurrency } from '@/utils/formatCurrency'

const crashStore = useCrashStore()

let timeline: gsap.core.Timeline
const animDuration = 0.4
function toggleCrashTimeline() {
  const reversed = timeline.reversed()

  crashStore.playing = true
  timeline.reversed(!reversed)

  // start new game again after first one
  if (!reversed) {
    showBetButtons.value = false

    setTimeout(
      () => {
        timeline.reversed(false)
      },
      animDuration * 1000 * 4 + animDuration * 1000 * 1.5,
    )
  }
}
crashStore.start = toggleCrashTimeline

const main = ref()
const showBetButtons = ref(false)
const cardSpace = 32
const cardsGap = 20
function initAnimation() {
  const ctx = gsap.context((self) => {
    if (!cardSize.value) return

    const cards: any[] = gsap.utils.toArray('.playing-card')

    timeline = gsap
      .timeline()
      .to(cards[2], {
        x: -cardSize.value.width / 2 - cardsGap / 2,
        y: -(cardSize.value.height + cardSpace),
        rotationY: -180,
        duration: animDuration,
      })
      .to(cards[3], {
        x: -cardSize.value.width / 1.67,
        duration: animDuration,
      })
      .to(cards[1], {
        x: cardSize.value.width / 1.67 - cardsGap / 2,
        duration: animDuration,
      })
      .to(cards[0], {
        x: cardSize.value.width / 1.67,
        duration: animDuration,
        onComplete() {
          crashStore.playing = false
          showBetButtons.value = true
        },
      })
      .reverse()
  }, main.value)

  onUnmounted(ctx.revert)
}

const borderObserver = new ResizeObserver(onElementResize)
const cardSize = ref<DOMRect | null>(null)
function onElementResize(entries: ResizeObserverEntry[]) {
  cardSize.value = entries[0].target.getBoundingClientRect()
}
onMounted(() => {
  const domElement = document.querySelector('.playing-card')

  if (domElement) {
    cardSize.value = domElement.getBoundingClientRect()
    borderObserver.observe(domElement)
  }

  nextTick(initAnimation)
})
</script>

<template>
  <div
    id="crash"
    :style="{
      transform: cardSize ? `translateY(${cardSize.height / 2}px)` : undefined,
    }"
  >
    <div :class="['bet-info left', { 'opacity-0': !showBetButtons }]">
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

    <div class="flex" :style="{ gap: `${cardsGap}px` }">
      <GameCrashCard />
      <GameCrashCard />
      <GameCrashCard />
      <GameCrashCard />
    </div>

    <div :class="['bet-info right', { 'opacity-0': !showBetButtons }]">
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
#crash {
  @apply flex items-center gap-11 h-full;
}

.bet-info {
  $xOffset: 128px;
  @apply flex flex-col justify-center items-center gap-2 text-center whitespace-nowrap transition-all;

  &.left {
    transform: translateX($xOffset);
  }
  &.right {
    transform: translateX(-$xOffset);
  }

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
