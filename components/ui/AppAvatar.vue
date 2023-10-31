<template>
  <div class="avatar" :class="`${computedBorderBallClass} ${computedStatusClass}`">
    <img :src="src" :width="size" :height="size" />
  </div>
</template>

<script setup lang="ts">
import { ColorType } from '@/plugins/vuetify'

interface IProps {
  size: number
  ballBorderColor?: ColorType
  mode?: 'on' | 'off' | ''
  src: string
}
const props = defineProps<IProps>()

const computedSize = computed(() => {
  return `${props.size}px`
})

const computedBorderBallClass = computed(() => {
  if (props.ballBorderColor) {
    return `border-${props.ballBorderColor}`
  }
  return ''
})

const computedStatusClass = computed(() => {
  if (props.mode !== undefined) {
    if (props.mode == 'on') {
      return `avatar--online`
    } else {
      return `avatar--offline`
    }
  }
  return ''
})
</script>

<style scoped lang="scss">
.avatar {
  border-radius: 50%;

  &,
  img {
    border-radius: 50%;
    object-fit: cover;

    max-width: v-bind(computedSize);
    max-height: v-bind(computedSize);

    min-width: v-bind(computedSize);
    min-height: v-bind(computedSize);

    width: v-bind(computedSize);
    height: v-bind(computedSize);
  }

  position: relative;

  &--online::after,
  &--offline::after {
    content: '';

    position: absolute;

    bottom: -2px;
    right: -2px;

    width: 13px;
    height: 13px;

    border: 1px solid rgb(var(--v-border-color));

    border-radius: 50%;
  }

  &--online::after {
    background-color: rgb(var(--v-theme-green-900));
  }

  &--offline::after {
    background-color: rgb(var(--v-theme-red-900));
  }
}
</style>
