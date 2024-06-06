export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-icon',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  }
});