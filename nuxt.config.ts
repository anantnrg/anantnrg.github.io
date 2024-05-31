export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@unocss/nuxt', 'nuxt-icon', "@nuxt/ui"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_catppuccin.scss" as *;'
        }
      }
    }
  }
});