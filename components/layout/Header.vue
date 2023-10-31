<template>
  <client-only>
    <header id="mainHeader" class="header">
      <div
        class="header__home-icon"
        :class="{ 'header__home-icon--is-home': isHome }"
        @click="$router.push('/home')"
      >
        <home-icon />
      </div>
      <div class="header__search">
        <img :src="FacebookIcon" alt="facebook" />
        <input type="text" placeholder="Procurar no facebook" />
        <img class="header__search-magnify" :src="SearchIcon" alt="search" />
      </div>
      <div class="d-flex justify-end">
        <ul class="header__list">
          <li class="header__list-user">
            <app-avatar
              :size="40"
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <app-text as="strong" color="text-900" size="sm">João Paulo</app-text>
          </li>
          <li @click="$router.push('/messenger')"><messenger-icon /></li>
          <li
            class="header__list-notification"
            :class="{ 'header__list-notification--having': true }"
          >
            <notification-icon />
          </li>
          <li @click="$router.push('/settings')"><settings-icon /></li>
        </ul>

        <ul v-if="isMenuOpen" class="header__list header__list--mobile">
          <li class="header__list-user">
            <app-avatar
              :size="40"
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <app-text as="strong" color="text-900" size="sm">João Paulo</app-text>
          </li>
          <li
            @click="
              () => {
                $router.push('/messenger')
                isMenuOpen = false
              }
            "
          >
            <messenger-icon />
          </li>
          <li
            class="header__list-notification"
            :class="{ 'header__list-notification--having': true }"
          >
            <notification-icon />
          </li>
          <li
            @click="
              () => {
                $router.push('/settings')
                isMenuOpen = false
              }
            "
          >
            <settings-icon />
          </li>
          <ph-x
            class="header__list-close-icon"
            size="25"
            color="white"
            @click="isMenuOpen = false"
          />
        </ul>

        <div class="header__menu-icon" @click="isMenuOpen = !isMenuOpen">
          <ph-list size="40" color="white" class="cursor-pointer" />
        </div>
      </div>
    </header>
  </client-only>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { PhList, PhX } from '@phosphor-icons/vue'
import HomeIcon from '@/assets/img/home-icon.svg'
import FacebookIcon from '@/assets/img/facebook-icon.svg?url_encode'
import SearchIcon from '@/assets/img/search-icon.svg?url_encode'
import SettingsIcon from '@/assets/img/settings-icon.svg'
import MessengerIcon from '@/assets/img/messenger-icon.svg'
import NotificationIcon from '@/assets/img/notification-icon.svg'

const { mdAndUp } = useDisplay()
const route = useRoute()
const isMenuOpen = ref<boolean>(false)

const isHome = computed(() => {
  return route.fullPath === '/home'
})
</script>

<style scoped lang="scss">
.header {
  display: grid;
  align-items: center;
  justify-content: space-between;

  grid-template-columns: 1fr 2fr 1fr;

  padding-inline: 2rem;

  height: 6.875rem;

  background-color: rgb(var(--v-theme-dark-900));

  background: rgb(var(--v-theme-dark-900)) 0% 0% no-repeat padding-box;

  box-shadow: 0px 10px 20px #00000029;

  &__menu-icon {
    display: none;
  }

  &__home-icon {
    position: relative;
    height: 100%;

    svg {
      cursor: pointer;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      fill: white;
      color: white;

      width: 25px;
      height: 25px;

      align-self: center;
    }

    &::before {
      content: '';
      position: absolute;

      bottom: 0px;
      height: 8px;
      width: 25px;

      background-color: rgb(var(--v-theme-dark-900));
    }

    &--is-home {
      svg {
        color: rgb(var(--v-theme-blue-600));
      }
    }
    &--is-home::before {
      background-color: rgb(var(--v-theme-blue-600));
    }
  }

  &__search {
    margin: 0 auto;
    img {
      width: 40px;
    }

    img.header__search-magnify {
      width: 25px;
      margin-right: 1rem;
    }

    input {
      flex: 1;

      outline: 0;

      margin-inline: 1rem;

      &::placeholder {
        color: rgb(var(--v-theme-text-500));
      }
    }

    background-color: rgb(var(--v-theme-dark-300));

    border-radius: 60px;

    display: flex;
    align-items: center;

    padding: 0.6rem 0.3rem;

    max-width: 650px;
    width: 100%;

    @media (max-width: 975px) {
      & {
        margin-left: 40px;
        margin-right: 40px;
      }
    }

    @media (max-width: 500px) {
      & {
        margin-left: 0px;
        margin-right: 10px;
      }

      img {
        width: 25px;
      }
      input {
        width: 100%;
      }
      img.header__search-magnify {
        width: 15px;
      }
    }
  }

  &__list {
    list-style-type: none;
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 1.8rem;

    &--mobile {
      display: none;
    }

    &-user {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      background-color: rgb(var(--v-theme-dark-300));

      padding-inline: 0.3rem 1.3rem;
      padding-block: 0.2rem;

      border-radius: 50px;
    }

    &-notification {
      position: relative;
      &--having {
        &::before {
          content: '';

          position: absolute;
          right: -10px;
          top: -5px;

          width: 13px;
          height: 13px;

          border-radius: 50%;

          background-color: rgb(var(--v-theme-red-900));
        }
      }
    }

    li {
      list-style: none;
    }

    svg {
      width: 25px;
      height: 25px;

      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    & {
      padding-inline: 0.4rem;
    }
  }

  @media (max-width: 965px) {
    & {
      grid-template-columns: 1fr auto;
      gap: 0.5rem;
    }
    &__home-icon,
    &__list {
      display: none;
    }
    &__menu-icon {
      display: block;
    }
    &__list--mobile {
      display: flex;
      position: fixed;
      inset: 0;
      height: 100vh;

      background: rgb(var(--v-theme-dark-900));
      z-index: 20;

      padding: 50px;

      justify-content: center;

      li {
        width: auto;
      }
      .header__list-close-icon {
        top: 20px;
        right: 20px;
        position: absolute;
      }
    }
  }

  @media (max-width: 1200px) {
    &__search {
      margin: 0px;
    }
  }
}
</style>
