import { type Ref } from 'vue'

export interface Game {
  playing: Ref<boolean>
  start: () => void
}
