export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  // devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            `@use "~/assets/scss/variables/_borderRadius.scss" as *;
             @use "~/assets/scss/variables/_breakpoints.scss" as *;
             @use "~/assets/scss/variables/_margins.scss" as *;
             @use "~/assets/scss/variables/_paddings.scss" as *;
             @use "~/assets/scss/_fonts.scss" as *;
             @use "~/assets/scss/mixins/_media.scss" as *;`,
        },
      },
    }
  },

  css: [
    '~/assets/scss/base.scss',
  ],

  modules: [
    '@nuxt/eslint',
    'nuxtjs-naive-ui',
    '@nuxt/fonts',
    '@pinia/nuxt',
  ],

  imports: {
    dirs: ['config'],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    }
  },
});