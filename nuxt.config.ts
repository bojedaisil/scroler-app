// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  components: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-lazy-load",
    "@element-plus/nuxt",
  ],
  tailwindcss: {},
  runtimeConfig: {
    public: {
      unsplashAccessKey: process.env.NUXT_PUBLIC_UNSPLASH_ACCESS_KEY,
    },
  },
  image: {
    domains: ["images.unsplash.com"],
    unsplash: {},
  },
});
