export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)

  function setIsLoading(loadingValue: boolean) {
    isLoading.value = loadingValue
  }

  return {
    isLoading,
    setIsLoading,
  }
})
