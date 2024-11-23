export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    async onResponseError({ response }) {
      if (response.status === HttpCodes.UNAUTHORIZED) {
        await nuxtApp.runWithContext(() => navigateTo('/login'));
      }
    }
  });
  
  return {
    provide: {
      api
    }
  };
});