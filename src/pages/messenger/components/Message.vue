<template>
  <div class="message" :class="`${computedMessageClass}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  isMine: boolean
}
const props = defineProps<IProps>()

const computedMessageClass = computed(() => {
  if (props.isMine) {
    return 'message--mine'
  }
  return ''
})
</script>

<style scoped lang="scss">
.message {
  padding: 2rem;
  border-radius: 30px 30px 30px 0px;

  background-color: rgb(var(--v-theme-dark-300));

  margin-right: auto;

  max-width: 671px;
  width: 100%;

  &--mine {
    margin-right: 0;
    margin-left: auto;

    border-radius: 30px 30px 0px 30px;

    background-color: rgb(var(--v-theme-blue-600));
  }
}
</style>
