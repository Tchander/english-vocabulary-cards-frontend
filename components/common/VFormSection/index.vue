<template>
  <section
    class="v-form-section"
    :class="{ 'form-fields': !hasTitle }"
  >
    <slot name="title">
      <p
        v-if="props.title"
        class="title font-700-16-20"
      >
        {{ props.title }}
      </p>
    </slot>

    <!-- form-fields from VForm -->
    <div
      v-if="hasTitle"
      class="form-fields"
    >
      <slot />
    </div>
    <template v-else>
      <slot />
    </template>
  </section>
</template>

<!-- Basic component for form fields section. Includes basic styles and ability to set title -->
<script lang="ts" setup>
import { computed } from 'vue';
import type { VFormSectionProps, VFormSectionSlots } from './types';

const props = defineProps<VFormSectionProps>();
const slots = defineSlots<VFormSectionSlots>();

const hasTitle = computed(() => Boolean(props.title || slots.title));
</script>

<style lang="scss" scoped>
.v-form-section > .title {
  text-align: center;
  margin-bottom: $marginXS;
}
</style>
