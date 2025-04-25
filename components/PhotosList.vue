<template>
  <div>
    <div
      class="grid grid-cols-2 items-center gap-3 bg-slate-500 rounded-3xl overflow-hidden p-5"
    >
      <el-image
        lazy
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.urls.small"
        class="rounded-3xl"
        hide-on-click-modal
        @load="imageLoaded"
      />
    </div>
    <div class="" v-if="isLoading">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { useUnsplash } from "~/server/unsplashService";

const { photos, isLoading, imageLoaded } = useUnsplash();
</script>
<style scoped lang="scss">
.reference-breakpoint {
  height: 1rem;
  background-color: red;
}
</style>
