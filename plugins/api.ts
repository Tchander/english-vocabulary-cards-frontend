export default defineNuxtPlugin((nuxtApp) => {
  const { apiBase } = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: apiBase,
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