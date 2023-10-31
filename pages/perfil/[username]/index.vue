<template>
  <div class="perfil">
    <v-img
      width="100%"
      height="500px"
      cover
      :lazy-src="computedUser.perfilPhoto"
      :src="computedUser.perfilPhoto"
      alt="mountain"
    />

    <main>
      <div class="d-flex flex-column justify-center align-center gap-30">
        <app-avatar :size="200" :src="computedUser.avatar" />
        <div class="d-flex align-center">
          <app-text as="strong" color="text-900" size="2xl"> {{ computedUser.name }} </app-text>
          <messenger-icon v-if="!isMe && imFollowing" class="ms-4 cursor-pointer" />
        </div>

        <app-button v-if="!isMe && imFollowing" size="sm" class="px-7">Deixar de seguir</app-button>
      </div>

      <div class="mt-5">
        <v-tabs v-model="selectedTab" grow stacked>
          <v-tab>
            <div class="d-flex flex-column">
              <app-text as="span" color="text-500" size="xs">135</app-text>
              <app-text class="d-block mt-2" as="strong" color="text-900">Timeline</app-text>
            </div>
          </v-tab>
          <v-tab>
            <div class="d-flex flex-column">
              <app-text as="span" color="text-500" size="xs">135</app-text>
              <app-text class="d-block mt-2" as="strong" color="text-900">Seguindo</app-text>
            </div>
          </v-tab>
          <v-tab>
            <div class="d-flex flex-column">
              <app-text as="span" color="text-500" size="xs">135</app-text>
              <app-text class="d-block mt-2" as="strong" color="text-900">Seguidores</app-text>
            </div>
          </v-tab>
        </v-tabs>
      </div>

      <v-window v-model="selectedTab" class="mt-15 pb-10">
        <v-window-item>
          <app-post-input class="mb-5" />
          <app-post v-for="(item, index) in 3" :key="index + 'post'" class="mb-5" />
        </v-window-item>
        <v-window-item>
          <v-row>
            <v-col v-for="(item, index) in 3" :key="index + 'following'" lg="4" md="6">
              <card-user :is-me="isMe" class="mt-5" />
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item>
          <v-row>
            <v-col v-for="(item, index) in 3" :key="index + 'followers'" lg="4" md="6">
              <card-user :is-me="isMe" class="mt-5" />
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </main>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CardUser from './components/CardUser.vue'

import MessengerIcon from '@/assets/img/messenger-icon.svg'

import { useUserStore } from '@/stores/userStore'

import { users } from '@/mocks/User'

import { IUser } from '@/types/globals/user'

definePageMeta({
  layout: 'app-view-layout',
})

const route = useRoute()
const userStore = useUserStore()

const username = route.params.username as string

const { user: userAuthenticated } = storeToRefs(userStore)

const avatarSize = 200
const avatarSizeUnitMargin = `-${avatarSize / 2}px`

const selectedTab = ref<number>(0)

const isMe = computed(() => {
  return userAuthenticated.value.username === username
})
const computedUser = computed(() => {
  const selectedUser = users[username]
  return selectedUser || {}
})
const imFollowing = true
</script>

<style scoped lang="scss">
.perfil {
  main {
    max-width: 700px;
    margin: 0 auto;
    margin-top: v-bind(avatarSizeUnitMargin);
  }
}
</style>
