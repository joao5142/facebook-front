<template>
  <p v-if="props.as == 'p'" :class="`text ${customSizeClass} ${customWeightClass} ${colorClass}`">
    <slot></slot>
  </p>

  <span
    v-else-if="props.as == 'span'"
    :class="`text ${customSizeClass} ${customWeightClass} ${colorClass}`"
  >
    <slot></slot>
  </span>

  <strong
    v-else-if="props.as == 'strong'"
    :class="`${customSizeClass} ${customWeightClass} ${colorClass}`"
  >
    <slot></slot>
  </strong>

  <h1 v-else-if="props.as == 'h1'" :class="`${customSizeClass} ${customWeightClass} ${colorClass}`">
    <slot></slot>
  </h1>

  <h2 v-else-if="props.as == 'h2'" :class="`${customSizeClass} ${customWeightClass} ${colorClass}`">
    <slot></slot>
  </h2>

  <h3 v-else-if="props.as == 'h3'" :class="`${customSizeClass} ${customWeightClass} ${colorClass}`">
    <slot></slot>
  </h3>

  <h4 v-else-if="props.as == 'h4'" :class="`${customSizeClass} ${customWeightClass} ${colorClass}`">
    <slot></slot>
  </h4>

  <h5 v-else-if="props.as == 'h5'" :class="`${customSizeClass} ${customWeightClass} ${colorClass}`">
    <slot></slot>
  </h5>

  <h6 v-else-if="props.as == 'h6'" :class="`${customSizeClass} ${customWeightClass} ${colorClass}`">
    <slot></slot>
  </h6>

  <p v-else :class="`${customSizeClass} ${customWeightClass} ${colorClass}`">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
import { FontWeightType, FontSizesType, ColorType } from '@/plugins/vuetify'

export type TextTagTypes = 'p' | 'span' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5'

interface IProps {
  as?: TextTagTypes
  size?: FontSizesType
  weight?: FontWeightType
  color?: ColorType
}

const props = defineProps<IProps>()

const customSizeClass = computed(() => {
  let classStr = ''

  switch (props.size) {
    case 'xs':
      classStr = 'app-font-size-xs'
      break
    case 'sm':
      classStr = 'app-font-size-sm'
      break

    case 'md':
      classStr = 'app-font-size-md'
      break

    case 'lg':
      classStr = 'app-font-size-lg'
      break

    case 'xl':
      classStr = 'app-font-size-xl'
      break
    case '2xl':
      classStr = 'app-font-size-2xl'
      break
    case '3xl':
      classStr = 'app-font-size-3xl'
      break
    case '4xl':
      classStr = 'app-font-size-4xl'
      break
  }

  return classStr
})

const customWeightClass = computed(() => {
  let classStr = ''
  switch (props.weight) {
    case 'regular':
      classStr = 'app-font-weight-regular'
      break
    case 'medium':
      classStr = 'app-font-weight-medium'
      break

    case 'semibold':
      classStr = 'app-font-weight-semibold'
      break
    case 'bold':
      classStr = 'app-font-weight-bold'
      break
  }

  return classStr
})

const colorClass = computed(() => {
  return `text-${props.color}`
})
</script>

<style lang="scss" scoped>
.button--disabled > .text {
  color: rgb(var(--v-theme-text-500)) !important;
}
</style>
