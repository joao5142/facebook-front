<template>
  <v-app>
    <v-layout :full-height="false">
      <div>
        <div class="auth">
          <div>
            <img class="auth__image" :src="BannerImage" alt="Banner" />
          </div>

          <div class="auth__content">
            <slot></slot>
          </div>
        </div>
      </div>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import BannerImage from '@/assets/img/capa-login.png'
</script>

<style scoped lang="scss">
.auth {
  display: grid;
  grid-template-columns: 1fr 500px;

  height: 100vh;
  overflow-y: hidden;

  &__image {
    width: 100%;
    max-height: 100vh;
    height: 100%;

    object-fit: cover;
  }

  &__content {
    flex: 1;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
}
</style>
