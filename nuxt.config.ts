export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-icon',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_catppuccin.scss" as *;'
        }
      }
    }
  },
  colorMode: {
    classSuffix: ''
  }
});