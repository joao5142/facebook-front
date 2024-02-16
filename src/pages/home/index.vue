<template>
  <div class="content">
    <aside class="content__settings">
      <div class="d-flex flex-column align-center justify-center gap-20">
        <app-avatar
          :size="70"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <app-text as="span" color="text-900" weight="bold" size="xl">Caterina S.Silva</app-text>
        <app-button size="sm" class="px-13 py-1" @click="$router.push('perfil/joao512')"
          >Ver Perfil</app-button
        >
      </div>

      <settings-items />
    </aside>
    <main>
      <app-post-input class="mb-5" />

      <AppPost />
    </main>
    <aside class="content__contacts">
      <app-text as="strong" size="lg" color="text-900">Contatos</app-text>

      <app-text class="d-block mt-5 mb-3" as="span" size="xs" color="text-500">Todos</app-text>

      <div>
        <div
          v-for="(user, index) in users"
          :key="'user' + index"
          class="d-flex align-center gap-10 mb-3 cursor-pointer"
          @click="() => handleVisitUserPerfil(user)"
        >
          <app-avatar
            :size="40"
            :mode="user.isOnline ? 'on' : 'off'"
            ball-border-color="dark-300"
            :src="user.avatar"
          />
          <app-text class="ms-3" as="strong" color="text-900" size="sm">{{ user.name }}</app-text>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import SettingsItems from './components/SettingsItems.vue'
import { users } from '@/mocks/User'
import { IUser } from '@/types/globals/user'

const router = useRouter()
definePageMeta({
  layout: 'app-view-layout',
})
useHead({
  title: 'Home',
})
function handleVisitUserPerfil(user: IUser) {
  router.push({ path: `/perfil/${user.username}` })
}
</script>

<style scoped lang="scss">
.content {
  display: grid;
  justify-content: space-between;
  grid-template-columns: minmax(300px, 430px) auto 350px;
  gap: 1rem;

  & > * {
    padding-top: 2.8rem;
  }

  &__settings {
    padding-inline: 2rem;
    background: rgb(var(--v-theme-dark-300));

    min-height: 100vh;
  }

  main {
    max-width: 600px;
    width: 100%;
  }

  @media (max-width: 1200px) {
    & {
      grid-template-columns: minmax(300px, 430px) auto;
      &__contacts {
        display: none;
      }
      main {
        margin-right: 20px;
      }
    }
  }

  @media (max-width: 860px) {
    & {
      justify-content: center;
      grid-template-columns: 1fr;
      &__contacts {
        display: none;
      }
      &__settings {
        display: none;
      }
      main {
        margin: 0 auto;
      }
    }
  }
}
</style>
