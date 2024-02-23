<template>
  <div>
    <header-component></header-component>
    <slot></slot>

    <app-loading v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
import HeaderComponent from '@/components/layout/Header.vue'

const { isLoading } = useLoadingIndicator()

const userStore = useUserStore()

onMounted(() => {
  userStore.initUserStore()
})
</script>

<style scoped></style>
