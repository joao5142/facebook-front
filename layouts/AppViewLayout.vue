<template>
  <div>
    <header-component></header-component>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
import HeaderComponent from '@/components/layout/Header.vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.initUserStore()
})
</script>

<style scoped></style>
