// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  ssr: false
})
