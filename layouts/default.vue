<script setup lang="ts"></script>

<template>
  <div class="container flex gap-10 flex-col">
    <AppHeader />

    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: auto;
  padding: 40px;
  height: 100svh;
  color: var(--text-color);
  background: var(--bg-color);
}
</style>
