<template>
  <main class="main">
    <app-box shadow class="main__content" background="dark-300">
      <header class="d-flex align-center gap-20 mb-6">
        <app-avatar :src="user.avatar" :size="70" />
        <div class="d-flex flex-column gap-5">
          <app-text as="strong" color="text-900">{{ user.name }}</app-text>

          <app-text
            class="cursor-pointer"
            as="span"
            color="blue-600"
            weight="semibold"
            size="sm"
            @click="handleOpenInputFile"
            >Alterar foto do perfil</app-text
          >
          <v-input id="input" class="d-none" />
        </div>
      </header>

      <div>
        <v-row v-for="(input, index) in inputs" :key="'input' + index" class="d-flex align-center">
          <v-col cols="12" md="4">
            <app-text class="text-md-right d-block pb-0" as="strong" color="text-900">{{
              input.label
            }}</app-text>
          </v-col>
          <v-col cols="12" md="8" class="pt-0 pb-0 mb-3">
            <app-input
              v-model="input.value"
              class="w-100 main__input"
              :type="input.type == 'password' ? 'password' : 'text'"
            />
          </v-col>
        </v-row>
      </div>

      <div class="d-flex flex-column align-center justify-center mt-8">
        <app-button class="px-15 py-2 mb-3" size="sm">Enviar</app-button>
        <app-text class="cursor-pointer" as="span" color="blue-600" @click="$router.push('/')"
          >Desconectar do facebook</app-text
        >
      </div>
    </app-box>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStore'

definePageMeta({
  layout: 'app-view-layout',
})

useHead({
  title: 'Settings',
})

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

function handleOpenInputFile() {
  const inputEl = document.getElementById('input') as HTMLInputElement

  if (inputEl) {
    inputEl.click()
  }
}

const inputs = reactive({
  name: { label: 'Nome', value: user.name },
  username: { label: 'Nome de usúario', value: user.username },
  email: { label: 'E-mail', value: user.email },
  password: { label: 'Nova senha', value: user.password, type: 'password' },
  password_confirmation: { label: 'Repita a senha', value: user.password, type: 'password' },
})
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    margin-top: 2rem;

    padding: 3rem 5rem;
    width: 100%;
    max-width: 700px;
  }

  &__input {
    background: rgb(var(--v-theme-dark-600));
  }

  @media (max-width: 500px) {
    &__content {
      padding: 2rem 1rem;
      margin-inline: 1rem;
    }
  }
}
</style>
