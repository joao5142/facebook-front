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

import { useLoadingStore } from '@/stores/loadingStore'
const { isLoading } = useLoadingStore()

const userStore = useUserStore()

onMounted(() => {
  userStore.initUserStore()
})
</script>

<style scoped></style>
