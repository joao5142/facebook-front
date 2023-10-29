<template>
  <div
    aria-label="card"
    class="card"
    :class="`${computedCardDetailClass} ${computedBackgroundClass} ${computedBorderCardClass} ${computedDisabledClass}`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { ColorType } from '@/plugins/vuetify'

interface IProps {
  background?: ColorType
  borderColor?: ColorType
  detailColor?: ColorType
  disabled?: boolean
}
const theme = useTheme()
const props = withDefaults(defineProps<IProps>(), {
  background: 'card',
  borderColor: 'gray-100',
})

const computedBackgroundClass = computed(() => {
  return `bg-${props.background}`
})

const computedColorDetail = computed(() => {
  if (props.detailColor) {
    return theme.current.value.colors[props!.detailColor]
  }
  return 'white'
})

const computedCardDetailClass = computed(() => {
  if (props.detailColor !== undefined && props.detailColor) {
    return 'card--detail'
  }

  return ''
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

console.log(computedColorDetail)
</script>

<style scoped lang="scss">
.card {
  position: relative;

  width: 100%;

  border-radius: 8px;

  border: 1px solid rgb(var(--v-border-color));

  display: block;

  &--detail {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::before {
      content: '';
      position: absolute;

      left: 0px;
      top: 0px;

      height: 100%;
      width: 3px;
      background-color: v-bind(computedColorDetail);
      border-radius: 0px 8px 8px 0px;
    }
  }
  &--disabled {
    pointer-events: none;
  }
}
</style>
~/plugins/_vuetify
