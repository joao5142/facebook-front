<template>
  <component :is="props.as" :class="`text ${computedClasses}`"><slot></slot></component>
</template>

<script setup lang="ts">
import { FontWeightTypes, FontSizesTypes, ColorTypes } from '@/plugins/vuetify'

export type TextTagTypes = 'p' | 'span' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5'

interface IProps {
  as?: TextTagTypes
  size?: FontSizesTypes
  weight?: FontWeightTypes
  color?: ColorTypes
}

const props = withDefaults(defineProps<IProps>(), { as: 'p' })

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

const computedClasses = computed(() => {
  return `${customSizeClass.value} ${customWeightClass.value} ${colorClass.value}`
})
</script>

<style lang="scss" scoped>
.button--disabled > .text {
  color: rgb(var(--v-theme-text-500)) !important;
}
</style>
