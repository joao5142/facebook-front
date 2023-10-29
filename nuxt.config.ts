import { type NuxtPage } from 'nuxt/schema'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  // ssr: false,

  app: {
    head: {
      title: 'Facebook Front',
      link: [],
    },
  },
  // imports: {
  //   dirs: ['@/lib/api'],
  // },

  hooks: {
    'pages:extend'(pages) {
      // add a route
      // pages.push({
      //   name: 'profile',
      //   path: '/profile',
      //   file: '~/extra-pages/profile.vue',
      // })

      // console.log(pages)
      function acceptPagesMatching(pages: NuxtPage[] = []) {
        const pagesToRemove = []
        for (const page of pages) {
          if (page.path.includes('components')) {
            pagesToRemove.push(page)
          } else {
            acceptPagesMatching(page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }

        // console.log('accept Pages ', pagesToRemove)
      }
      acceptPagesMatching(pages)
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  components: [
    {
      path: '@/components/ui',
      pathPrefix: false,
    },
  ],

  css: ['@/styles/main.scss'],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  typescript: {
    strict: true,
  },
})
