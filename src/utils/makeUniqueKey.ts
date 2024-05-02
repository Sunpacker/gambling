import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  22,
)

export function makeUniqueKey() {
  return nanoid()
}
