<template>
  <div class="form-error font-400-14-20">
    {{ props.message }}
  </div>
</template>

<script lang="ts" setup>
import type { FormErrorProps } from './types';

const props = defineProps<FormErrorProps>();
</script>

<style lang="scss" scoped>
.form-error {
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  text-align: center;
  color: $colorErrorBase;
  background-color: $colorErrorBg; 
}
</style>
