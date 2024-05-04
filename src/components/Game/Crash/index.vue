<script lang="ts" setup>
import gsap from 'gsap'

const crashStore = useCrashStore()

onMounted(() => {
  setTimeout(initAnimation)
})

const { width } = useWindowSize()
const desktopVersion = computed(() => width.value > 768)

const card = ref()
const cardSize = useElementSize(card)

watch(
  () => [width.value, cardSize.width.value],
  () => {
    setTimeout(initAnimation)
  },
)

let timeline: gsap.core.Timeline
const animDuration = 0.4
function toggleCrashTimeline() {
  const reversed = timeline.reversed()

  crashStore.playing = true
  timeline.reversed(!reversed)

  // start new game again after first one
  if (!reversed) {
    const totalDuration = animDuration * 1000 * 4
    const delay = animDuration * 1000 * 1.5

    showBetButtons.value = false
    setTimeout(() => {
      timeline.reversed(false)
    }, totalDuration + delay)
  }
}
crashStore.start = toggleCrashTimeline

const main = ref()
const cardSpace = 50
const cardsGap = 20
const showBetButtons = ref(false)
const gsapCtx = ref()
function initAnimation() {
  gsapCtx.value = gsap.context(() => {
    if (!cardSize.width.value) return

    const cards = document.querySelectorAll('.playing-card:not(#accent-card)')
    const accentCard = document.querySelector('#accent-card')
    if (!accentCard) return

    if (desktopVersion.value) {
      const divideRatio = 1.67

      timeline = gsap
        .timeline()
        .to(accentCard, {
          x: -cardSize.width.value / 2 - cardsGap / 2,
          y: -(cardSize.height.value + cardSpace),
          rotationY: -180,
          duration: animDuration,
        })
        .to(cards[2], {
          x: -cardSize.width.value / divideRatio,
          duration: animDuration,
        })
        .to(cards[1], {
          x: cardSize.width.value / divideRatio - cardsGap / 2 + 2,
          duration: animDuration,
        })
        .to(cards[0], {
          x: cardSize.width.value / divideRatio,
          duration: animDuration,
          onComplete() {
            crashStore.playing = false
            showBetButtons.value = true
          },
        })
        .reverse()
    } else {
      timeline = gsap
        .timeline()
        .to(accentCard, {
          rotationY: -180,
          duration: animDuration,
          onComplete() {
            crashStore.playing = false
            showBetButtons.value = true
          },
        })
        .reverse()
    }
  }, main.value)
}
onUnmounted(() => {
  gsapCtx.value?.revert()
})

const gameCanvasTransform = computed(() => {
  if (!cardSize.height.value) return undefined

  let offset = cardSize.height.value + cardSpace
  if (width.value < 1024) {
    offset /= 3
  } else {
    offset /= 2
  }

  return `translateY(${offset}px)`
})
</script>

<template>
  <div
    v-if="desktopVersion"
    class="flex items-center gap-11"
    :style="{
      transform: gameCanvasTransform,
    }"
  >
    <GameCrashBetInfo
      :class="[{ 'opacity-0': !showBetButtons }]"
      type="lower"
    />

    <div class="flex" :style="{ gap: `${cardsGap}px` }">
      <GameCrashCard ref="card" />
      <GameCrashCard />
      <GameCrashCard id="accent-card" />
      <GameCrashCard />
    </div>

    <GameCrashBetInfo
      :class="[{ 'opacity-0': !showBetButtons }]"
      type="higher"
    />
  </div>

  <div
    v-else
    class="flex flex-col justify-center items-center relative w-full h-full"
  >
    <div class="flex gap-6 absolute">
      <GameCrashBetInfo
        :class="[{ 'opacity-0': !showBetButtons }]"
        type="lower"
      />

      <GameCrashCard class="!w-[118px] !h-[178px]" id="accent-card" />

      <GameCrashBetInfo
        :class="[{ 'opacity-0': !showBetButtons }]"
        type="higher"
      />
    </div>

    <div
      class="flex gap-5 absolute"
      :style="{ bottom: cardSize ? `${cardSize.height.value / 3}px` : 0 }"
    >
      <GameCrashCard ref="card" />
      <GameCrashCard />
      <GameCrashCard />
    </div>
  </div>
</template>
