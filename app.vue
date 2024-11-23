<template>
  <VConfigProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VConfigProvider>
</template>

<script setup lang="ts">
import VConfigProvider from './components/common/VConfigProvider/index.vue';
</script>
