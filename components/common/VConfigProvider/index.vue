<template>
  <NConfigProvider
    :locale="ruRU"
    :date-locale="dateRuRU"
    :theme-overrides="lightGlobalTheme"
  >
    <NMessageProvider>
      <NGlobalStyle />
      <slot />
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { dateRuRU, NConfigProvider, NGlobalStyle, NMessageProvider } from 'naive-ui';
import { ruRU } from './locale';
import { lightGlobalTheme } from '@/themes';
</script>
