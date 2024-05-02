import type { User } from '@/types/Auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const userLoading = ref(false)

  async function loadUser() {
    try {
      userLoading.value = true

      user.value = await new Promise((res) => {
        setTimeout(() => {
          res({
            id: makeUniqueKey(),
            username: 'User',
            avatar: 'https://i.imgur.com/GiItc2a.jpg',
            balance: 778.35,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
        }, 500)
      })
    } finally {
      userLoading.value = false
    }
  }

  return { user, userLoading, loadUser }
})
