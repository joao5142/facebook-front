import { useLoadingStore } from '@/stores/loadingStore'

export default defineNuxtPlugin((nuxtApp) => {
  const { setIsLoading } = useLoadingStore()

  nuxtApp.hook('app:created', () => {
    setIsLoading(true)
  })

  nuxtApp.hook('app:mounted', () => {
    setIsLoading(false)
  })
})
