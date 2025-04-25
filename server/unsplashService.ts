export interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description?: string;
  description?: string;
}

export const useUnsplash = () => {
  const config = useRuntimeConfig();
  const accessKey = config.public.unsplashAccessKey;

  if (!accessKey) {
    throw new Error("error");
  }

  const getPhotos = async (page = 1, perPage = 30): Promise<Photo[]> => {
    const url = `https://api.unsplash.com/photos?page=${page}&per_page=${perPage}&client_id=${accessKey}`;
    return await $fetch(url);
  };

  return { getPhotos };
};
