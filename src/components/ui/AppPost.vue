<template>
  <app-box class="post" background="dark-300">
    <div class="post__header">
      <header>
        <div class="d-flex gap-20 align-center">
          <app-avatar
            class="cursor-pointer"
            :size="77"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            @click="$router.push('/perfil/joao512')"
          />

          <div class="d-flex flex-column">
            <app-text as="strong" color="white">Joao ão </app-text>
            <app-text class="d-block" as="span" color="text-700" size="xs">18:30</app-text>
          </div>
        </div>
      </header>

      <app-text as="p" size="md" class="d-block mt-6">
        Olá, pessoal! Meu nome é João e estou muito feliz em me juntar a vocês aqui no Facebook. Sou
        apaixonado(a) por TI e jogos e estou ansioso para compartilhar minhas ideias e aprender com
        todos vocês
      </app-text>
    </div>

    <v-img
      width="100%"
      cover
      class="post__image"
      lazy-src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ></v-img>

    <div class="post__reactions-container">
      <div class="d-flex align-center gap-30 post__reactions-content">
        <div class="d-flex flex-column align-center gap-10">
          <img :src="LikeReaction" alt="like" />
          <app-text as="span" size="xs" color="text-700">1000</app-text>
        </div>

        <div class="d-flex flex-column align-center gap-10">
          <img :src="LoveReaction" alt="like" />
          <app-text as="span" size="xs" color="text-700">1000</app-text>
        </div>

        <div class="d-flex flex-column align-center gap-10">
          <img :src="LaughReaction" alt="like" />
          <app-text as="span" size="xs" color="text-700">1000</app-text>
        </div>

        <div class="d-flex flex-column align-center gap-10">
          <img :src="SadReaction" alt="like" />
          <app-text as="span" size="xs" color="text-700">1000</app-text>
        </div>

        <div class="d-flex flex-column align-center gap-10">
          <img :src="AngryReaction" alt="like" />
          <app-text as="span" size="xs" color="text-700">1000</app-text>
        </div>
      </div>

      <app-text as="span" color="text-700">3 comentarios</app-text>
    </div>

    <div class="post__actions">
      <div
        v-on-click-outside="onClickOutsideHandler"
        class="d-flex align-center cursor-pointer post__actions-react"
        @click.self="isModalSetReactionOpen = true"
      >
        <like-icon-action
          class="me-2"
          :class="userReacted ? 'text-blue-600' : 'text-text-900'"
          @click.self="isModalSetReactionOpen = true"
        />

        <app-text
          as="strong"
          size="lg"
          :color="userReacted ? 'blue-600' : 'text-900'"
          @click-outside="isModalSetReactionOpen = false"
          @click.self="isModalSetReactionOpen = true"
          >Reagir</app-text
        >

        <app-box v-if="isModalSetReactionOpen" shadow class="post__actions-choice-reaction">
          <img :src="LikeReaction" alt="like" @click.self="() => handleReactPost('like')" />
          <img :src="LoveReaction" alt="love" @click.self="() => handleReactPost('love')" />
          <img :src="LaughReaction" alt="laugh" @click.self="() => handleReactPost('laugh')" />
          <img :src="SadReaction" alt="sad" @click.self="() => handleReactPost('sad')" />
          <img :src="AngryReaction" alt="angry" @click.self="() => handleReactPost('angry')" />
        </app-box>
      </div>

      <div class="d-flex align-center cursor-pointer">
        <comment-icon-action class="me-2" />
        <app-text as="strong" size="lg" color="text-900">Comentar</app-text>
      </div>
    </div>

    <div class="post__comments">
      <div class="d-flex gap-10 align-center mb-2">
        <app-avatar
          :size="30"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <input type="text" placeholder="Escreva seu comentario" class="post__my-comment" />
      </div>

      <div class="d-flex gap-10 align-center mb-2">
        <app-avatar
          :size="30"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <app-box class="pa-4 d-flex flex-column">
          <app-text as="strong" size="xs" color="text-900">Debora</app-text>
          <app-text as="span" size="xs" color="text-900"
            >Uhuuul parabéns!! Eles são muito fofos!!!!!!!</app-text
          >
        </app-box>
      </div>
    </div>

    <footer class="post__footer">
      <app-text as="span" color="text-700" size="xs" class="cursor-pointer"
        >Ver mais 1 comentário</app-text
      >
      <app-text as="span" color="text-700" size="xs" class="cursor-pointer"
        >Ocultar Comentario</app-text
      >
    </footer>
  </app-box>
</template>

<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

import LikeReaction from '@/assets/img/reactions/like.svg?url_default'
import AngryReaction from '@/assets/img/reactions/angry.svg?url_default'
import LoveReaction from '@/assets/img/reactions/heart.svg?url_default'
import SadReaction from '@/assets/img/reactions/sad.svg?url_default'
import LaughReaction from '@/assets/img/reactions/laugh.svg?url_default'

import LikeIconAction from '@/assets/img/thumb-icon.svg'
import CommentIconAction from '@/assets/img/comment-icon.svg'

const userReacted = ref<boolean>(true)
const isModalSetReactionOpen = ref<boolean>(false)

type ReactionTypes = 'like' | 'love' | 'angry' | 'sad' | 'laugh'

function handleReactPost(reaction: ReactionTypes) {
  isModalSetReactionOpen.value = false
}

const onClickOutsideHandler = (ev: PointerEvent) => {
  console.log(ev)
  isModalSetReactionOpen.value = false
}
</script>

<style scoped lang="scss">
.post {
  $paddingInline: 1rem;
  &__header {
    padding-top: 1.5rem;
    padding-inline: $paddingInline;

    margin-bottom: 1.5rem;
  }
  &__reactions {
    &-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;

      padding-block: 2rem 2rem;
      padding-inline: 2.1rem 1rem;
    }

    &-content {
      position: relative;
      margin-top: -55px;
      z-index: 10;
      img {
        width: 35px;
        height: 35px;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    padding-block: 1rem;

    border-block: 0.3px solid rgb(var(--v-theme-gray-900));

    & > * {
      padding: 0.5rem 3rem;

      border-radius: 20px;
    }

    & > *:hover {
      background: rgb(var(--v-theme-dark-600));
    }

    &-react {
      position: relative;
      .post__actions-choice-reaction {
        position: absolute;
        z-index: 20;
        top: -20px;
        left: 50%;
        transform: translate(-50%);

        border-radius: 30px;

        width: auto;

        display: flex;
        gap: 1rem;

        padding: 0.5rem;

        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }

  &__image {
    height: 100%;
    max-height: 600px;
  }

  &__comments {
    padding-block: 2rem 2rem;
    padding-inline: $paddingInline;
  }

  &__my-comment {
    padding: 0.5rem 0.6rem;
    background: rgb(var(--v-theme-dark-600));

    border-radius: 20px;

    outline: 0;

    width: 100%;

    &::placeholder {
      color: rgb(var(--v-theme-text-500));
    }
  }

  &__footer {
    padding-inline: $paddingInline;
    padding-bottom: 1.2rem;

    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 470px) {
    &__actions {
      flex-wrap: wrap;

      & > * {
        flex: 1;
        justify-content: center;
      }
    }

    &__image {
      max-width: 100%;
      width: 100%;
      max-height: 500px;
      height: auto;
    }
  }

  @media (max-width: 360px) {
    &__reactions {
      &-content {
        img {
          width: 25px;
          height: 25px;
        }
      }

      &-container {
        gap: 0.5rem;
        padding-inline: 1.1rem 1rem;
      }
    }
  }
}
</style>
