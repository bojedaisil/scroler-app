<template>
  <div>
    <div
      class="grid grid-cols-2 items-center gap-3 bg-slate-500 rounded-3xl overflow-hidden p-5"
    >
      <el-image
        v-for="img in images"
        :key="img.id"
        :src="img.urls.small"
        class="rounded-3xl"
        hide-on-click-modal
        lazy
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from "#components";
import { useUnsplash, type Photo } from "~/server/unsplashService";
const { getPhotos } = useUnsplash();

const images = ref<Photo[]>([]);

const renderPhotos = async () => {
  try {
    images.value = await getPhotos();
    console.log(images.value);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  renderPhotos();
});
</script>
<style scoped lang="scss">
.reference-breakpoint {
  height: 1rem;
  background-color: red;
}
</style>
