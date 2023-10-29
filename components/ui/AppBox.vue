<template>
  <div
    aria-label="card"
    class="card"
    :class="`${computedBackgroundClass} ${computedBorderCardClass} ${computedDisabledClass}`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ColorType } from '@/plugins/vuetify'

interface IProps {
  background?: ColorType
  borderColor?: ColorType
  disabled?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  background: 'box',
  borderColor: 'gray-100',
})

const computedBackgroundClass = computed(() => {
  return `bg-${props.background}`
})

const computedBorderCardClass = computed(() => {
  return `border-${props.borderColor}`
})

const computedDisabledClass = computed(() => {
  if (props.disabled !== undefined && props.disabled) {
    return `card--disabled`
  }
  return ''
})
</script>

<style scoped lang="scss">
.card {
  position: relative;

  width: 100%;

  border-radius: 8px;

  border: 1px solid rgb(var(--v-border-color));

  display: block;

  &--disabled {
    pointer-events: none;
  }
}
</style>
~/plugins/_vuetify
