<template>
  <div class="search">
    <app-avatar
      :size="30"
      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <input type="text" placeholder="No que voce esta pensando" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.search {
  margin: 0 auto;

  input {
    word-wrap: break-word;
    word-break: break-all;
    text-overflow: clip;

    flex: 1;

    outline: 0;

    margin-inline: 1rem;

    &::placeholder {
      color: rgb(var(--v-theme-text-500));
    }
  }

  background-color: rgb(var(--v-theme-dark-300));

  border-radius: 60px;

  display: flex;
  align-items: center;

  padding: 0.6rem 0.3rem;

  width: 100%;
}
</style>
