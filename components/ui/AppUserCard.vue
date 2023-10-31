<template>
  <app-box class="pa-4 card" hover-effect background="dark-300">
    <app-avatar class="card__avatar" :size="50" :src="user.avatar" />

    <app-text class="d-block mt-7 card__name" as="strong" color="text-900">{{
      user.name
    }}</app-text>
    <app-text as="span" color="text-700" size="xs">Desde {{ user.year }}</app-text>

    <a v-if="isMe" href="" class="card__link">Deixar de seguir</a>
  </app-box>
</template>

<script setup lang="ts">
interface IUser {
  avatar?: string
  year?: string
  name?: string
}
interface IProps {
  isMe: boolean

  imFollowing?: boolean

  user: IUser
}
withDefaults(defineProps<IProps>(), {
  user: () => ({
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'João Paulo',
    year: '2023',
  }),
})
</script>

<style scoped lang="scss">
.card {
  height: auto;
  overflow-clip-margin: 20px;

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__avatar {
    position: relative;
    z-index: 30;
    margin-top: -35px;
  }

  &__link {
    margin-top: 0.6rem;
    font-size: var(--v-theme-font-size-xs);
    color: rgb(var(--v-theme-text-500));
  }

  &__name {
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
