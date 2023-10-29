<template>
  <div>
    <img :src="FacebookLogoImage" alt="Logo" />

    <app-text as="span" size="sm" color="text-100">Bem vindo</app-text>
  </div>
</template>

<script setup lang="ts">
import FacebookLogoImage from '@/assets/img/facebook-logo.svg'

definePageMeta({
  layout: 'auth-view-layout',
})
</script>

<style scoped lang="scss"></style>
