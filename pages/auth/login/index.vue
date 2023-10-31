<template>
  <div class="login d-flex flex-column w-100">
    <img class="login__image" :src="FacebookLogoImage" alt="Logo" />

    <app-text class="mt-10" as="span" size="lg" color="text-100">Bem vindo</app-text>
    <app-text as="strong" size="xl" color="text-900">Entre na sua conta</app-text>

    <app-input class="mt-10" type="text" placeholder="E-mail" />
    <app-input class="mt-3" type="text" placeholder="Senha" />

    <app-text as="span" class="text-end mt-2 cursor-pointer" size="sm" color="text.900"
      >Esqueceu sua senha ?</app-text
    >

    <app-button glow class="mt-10" full @click="$router.push('/home')">Entrar</app-button>

    <app-text class="mt-10 text-center" size="sm" as="span" color="text-700">
      Ainda não possui Conta? <app-text color="text-900" as="strong">Cadastre-se</app-text>
    </app-text>
  </div>
</template>

<script setup lang="ts">
import FacebookLogoImage from '@/assets/img/facebook-logo.svg?url_default'

definePageMeta({
  name: 'Login',
  layout: 'auth-view-layout',
})
useHead({
  title: 'Login',
})
</script>

<style scoped lang="scss">
.login {
  padding: 5rem;

  &__image {
    max-width: 150px;
  }
}
</style>
