import type { UniqueKey, Username, ISOTimestamp } from './shared-kernel'

export type User = {
  id: UniqueKey
  username: Username
  avatar: string
  balance: number
  created_at: ISOTimestamp
  updated_at: ISOTimestamp
}
