export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  // devtools: { enabled: true },

  css: [
    '~/assets/scss/base.scss',
  ],

  modules: [
    '@nuxt/eslint',
  ],

  imports: {
    dirs: ['config'],
  },

  runtimeConfig: {
    apiBase: process.env.API_BASE_URL,
  }
});
