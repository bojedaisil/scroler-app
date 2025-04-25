// composables/useUnsplash.ts
import { ref, onMounted, onBeforeUnmount } from "vue";

interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description?: string;
  description?: string;
  links: {
    html: string;
  };
}

export const useUnsplash = () => {
  const config = useRuntimeConfig();
  const apiKey = config.public.unsplashAccessKey;

  const photos = ref<Photo[]>([]);
  const isLoading = ref(false);
  const imagesLoaded = ref(0);
  const totalImages = ref(0);
  const error = ref<string | null>(null);

  const regularCount = 10;

  const imageLoaded = () => {
    imagesLoaded.value++;
    if (imagesLoaded.value === totalImages.value) {
      isLoading.value = false;
    }
  };

  // Загрузка фотографий
  const getPhotos = async (query = "nature") => {
    if (isLoading.value) return;

    try {
      isLoading.value = true;
      error.value = null;

      const count = regularCount;
      const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${query}`;

      const response = await $fetch<Photo[]>(url);
      photos.value.push(...response);
      totalImages.value = photos.value.length;
    } catch (err) {
      error.value = "Failed to load photos";
      console.error(err);
    }
  };

  // Обработчик скролла
  const handleScroll = () => {
    if (
      process.client &&
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      !isLoading.value
    ) {
      getPhotos();
    }
  };

  // Инициализация
  onMounted(() => {
    if (process.client) {
      window.addEventListener("scroll", handleScroll);
      getPhotos();
    }
  });

  // Очистка
  onBeforeUnmount(() => {
    if (process.client) {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return {
    photos,
    isLoading,
    error,
    getPhotos,
    imageLoaded,
  };
};
