import type { Game } from '@/types/Game'

export const useCrashStore = defineStore('crash', () => {
  const playing = ref(false)

  function start() {
    throw new Error('Mehod must be overidden')
  }

  return { playing, start } as Game
})
