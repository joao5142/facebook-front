export default defineNuxtPlugin((nuxtApp) => {
  const { set } = useLoadingIndicator()

  nuxtApp.hook('app:created', () => {
    set(0)
  })

  nuxtApp.hook('app:mounted', () => {
    set(1)
  })

  nuxtApp.hook('page:start', () => {
    set(0)
  })

  nuxtApp.hook('page:finish', () => {
    set(1)
  })
})
