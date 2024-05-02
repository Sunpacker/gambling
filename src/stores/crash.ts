import type { Game } from '@/types/Game'

export const useCrashStore = defineStore('crash', () => {
  const playing = ref(false)

  function start() {
    playing.value = true

    setTimeout(() => {
      playing.value = false
    }, 2000)
  }

  return { playing, start } as Game
})
