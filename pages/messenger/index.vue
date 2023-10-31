<template>
  <div class="messenger">
    <aside class="messenger__user-list">
      <div class="d-flex justify-space-between align-center">
        <app-text class="messenger__title-chat" as="strong" color="text-900" size="xl">
          Bate papo
        </app-text>
        <ph-x
          size="25"
          class="me-4 messenger__close"
          color="white"
          @click="$router.push('/home')"
        />
      </div>

      <ul class="messenger__conversations">
        <li
          class="messenger__conversations-item"
          :class="{ 'messenger__conversations-item--active': true }"
        >
          <app-avatar
            :size="40"
            mode="on"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div class="d-flex flex-column gap-5">
            <app-text as="strong" color="text-900" size="lg">João Paulo</app-text>
            <app-text as="span" color="text-500" size="sm">Não sei se você já viu isso …</app-text>
          </div>
        </li>

        <li
          class="messenger__conversations-item"
          :class="{ 'messenger__conversations-item--not-read': true }"
        >
          <app-avatar
            :size="40"
            mode="on"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div class="d-flex flex-column gap-5">
            <app-text as="strong" color="text-900" size="lg">João Paulo</app-text>
            <app-text as="span" color="text-500" size="sm">Não sei se você já viu isso …</app-text>
          </div>
        </li>

        <li
          class="messenger__conversations-item"
          :class="{ 'messenger__conversations-item--not-read': true }"
        >
          <app-avatar
            :size="40"
            mode="on"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div class="d-flex flex-column gap-5">
            <app-text as="strong" color="text-900" size="lg">João Paulo</app-text>
            <app-text as="span" color="text-500" size="sm">Não sei se você já viu isso …</app-text>
          </div>
        </li>
      </ul>
    </aside>
    <main>
      <div class="messenger__container">
        <message
          v-for="(message, index) in 10"
          :key="'message' + index"
          class="mb-10"
          :is-mine="index % 2 == 0"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint facilis
          quia ipsa similique, nemo amet quas iure, quasi tenetur laboriosam sequi quo ut explicabo
          corporis, ex totam molestiae!</message
        >
      </div>
      <footer class="messenger__footer">
        <input type="text" />
        <div class="messenger__send">
          <send-icon />
        </div>
      </footer>
    </main>
    <aside class="messenger__user-info">
      <div class="d-flex flex-column align-center justify-center">
        <app-avatar
          :size="200"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div class="d-flex flex-column align-center gap-5 mt-7">
          <app-text as="strong" color="text-900" size="xl">João Paulo</app-text>
          <app-text as="span" color="text-500" size="sm">Online agora</app-text>
        </div>
      </div>

      <div class="d-flex align-center justify-center gap-30 mt-12">
        <div class="d-flex align-center gap-5 cursor-pointer">
          <ph-prohibit size="20" :color="blue600" weight="regular" />
          <app-text as="span" color="text-900">Bloquear</app-text>
        </div>
        <div class="d-flex align-center gap-5 cursor-pointer">
          <ph-speaker-slash size="20" :color="blue600" weight="regular" />
          <app-text as="span" color="text-900">Silenciar</app-text>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { PhProhibit, PhSpeakerSlash, PhX } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'
import Message from './components/Message.vue'
import SendIcon from '@/assets/img/send.svg'

definePageMeta({
  layout: 'app-view-layout',
})

const theme = useTheme()

const { 'blue-600': blue600 } = theme.current.value.colors

const headerHeightUnit = ref<string>('')

onMounted(() => {
  if (document !== undefined) {
    const headerEl = document?.querySelector('header#mainHeader')

    headerHeightUnit.value = `${headerEl?.scrollHeight}px`
  }
  headerHeightUnit.value = ''
})
</script>

<style scoped lang="scss">
.messenger {
  display: grid;
  grid-template-columns: 430px 1fr 430px;
  height: calc(100vh - 110px);

  overflow: hidden;

  &__close {
    display: none;
  }
  aside {
    background: rgb(var(--v-theme-dark-300));
  }

  &__conversations {
    li {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      padding: 1rem 2rem;
      position: relative;
      cursor: pointer;
    }

    &-item {
      &--active {
        background: rgb(var(--v-theme-dark-900));
      }

      &--not-read {
        &::before {
          content: '';

          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);

          width: 15px;
          height: 15px;

          background: rgb(var(--v-theme-red-900));

          border-radius: 50%;
        }
      }
    }
  }

  &__send {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }

    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;

    border-radius: 50%;

    background: transparent linear-gradient(226deg, #1aafff 0%, #4589f7 100%) 0% 0% no-repeat
      padding-box;

    &:active {
      transform: scale(0.98);
    }
  }

  &__user-info {
    padding: 4rem 2rem;
  }

  &__title-chat {
    display: block;
    padding: 2rem;
  }

  main {
    padding: 2rem 3rem 2rem 2rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }

  &__container {
    max-height: 75vh;
    overflow-y: scroll;
    overflow-x: hidden;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
    scroll-behavior: smooth;
  }

  &__footer {
    display: flex;
    gap: 1rem;

    input {
      padding: 0.6rem 1.2rem;
      width: 100%;
      background: rgb(var(--v-theme-dark-900));

      border-radius: 25px;
      outline: 0;

      &::placeholder {
        color: rgb(var(--v-theme-dark-600));
      }
    }
  }

  @media (max-width: 1400px) {
    & {
      grid-template-columns: 300px 1fr 350px;
    }
  }

  @media (max-width: 1000px) {
    & {
      grid-template-columns: 1fr;
    }

    &__user-list {
      width: 100%;
      max-height: 250px;

      position: absolute;
      top: 0px;

      box-shadow: 0px 10px 20px #00000029;
    }

    &__close {
      display: block;
    }
    &__user-info {
      display: none;
    }

    &__container {
      padding-top: 150px;
      max-height: 70vh;
    }

    &__conversations {
      max-height: 150px;
      scroll-snap-align: center;
      scroll-snap-type: y mandatory;
      overflow-y: scroll;
      display: block;

      height: 100%;
    }

    &__footer {
      bottom: 40px;
    }
  }
}
</style>
