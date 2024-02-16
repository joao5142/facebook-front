<template>
  <main class="main">
    <app-text as="strong" color="text-900" class="d-block mb-10">
      Resultados de busca para : {{ $route.params.username }}
    </app-text>
    <v-row>
      <v-col v-for="(item, index) in data.results" :key="index + 'user'" cols="6" lg="4" md="6">
        <app-user-card
          :user="{
            avatar: item?.picture?.large,
            name: `${item?.name?.first} ${item?.name?.last}`,
            year: new Date(item?.registered?.date).getFullYear(),
          }"
          :is-me="isMe"
          class="mt-5"
        />
      </v-col>
    </v-row>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStore'

definePageMeta({
  layout: 'app-view-layout',
})
useHead({
  title: 'Search User',
})
const { data, pending, error, refresh } = await useAsyncData('mountains', () =>
  $fetch('https://randomuser.me/api/?results=20&inc=registered,name,picture')
)

const route = useRoute()
const userStore = useUserStore()
const username = route.params.username as string

const { user: userAuthenticated } = storeToRefs(userStore)

const isMe = computed(() => {
  return userAuthenticated.value.username === username
})
</script>

<style scoped>
.main {
  max-width: 700px;
  width: 100%;

  margin: 0 auto;

  padding: 2rem;
}
</style>
