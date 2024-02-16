<template>
  <div
    aria-label="card"
    class="card"
    :class="`${computedBackgroundClass} ${computedShadowClass} ${computedHoverShadowClass}`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ColorType } from '@/plugins/vuetify'

interface IProps {
  background?: ColorType
  shadow?: boolean
  hoverEffect?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  background: 'dark-900',
  shadow: false,
  hoverEffect: false,
})

const computedBackgroundClass = computed(() => {
  return `bg-${props.background}`
})

const computedShadowClass = computed(() => {
  if (props.shadow !== undefined && props.shadow) {
    return `card--shadow`
  }

  return ''
})

const computedHoverShadowClass = computed(() => {
  if (props.hoverEffect !== undefined && props.hoverEffect) {
    return `card--hover`
  }

  return ''
})
</script>

<style scoped lang="scss">
.card {
  position: relative;

  width: 100%;

  border-radius: 20px;

  border: none;

  display: block;

  &--shadow,
  &--hover:hover {
    transition: all 0.3s ease;
    box-shadow: 0px 8px 15px #00000040;
  }
}
</style>
