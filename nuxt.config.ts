export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', 'nuxt-icon', "@nuxtjs/tailwindcss"],
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