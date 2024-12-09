<template>
  <NForm
    class="v-form"
    @keydown.enter="onSubmit"
  >
    <!-- slot for form fields, if fields are combined with a tag with the form-fields class,
    they will have additional indents -->
    <slot />

    <slot
      name="formError"
      :error-message="props.errorMessage"
    >
      <FormError
        v-if="errorMessage"
        :message="errorMessage"
      />
    </slot>

    <slot
      name="submitButton"
      :disabled="!isValid"
      :loading="props.loading"
    >
      <NButton
        strong
        size="large"
        icon-placement="right"
        :color="!isValid ? undefined : colors.primaryBase"
        :loading="props.loading"
        :disabled="!isValid"
        @click="onSubmit"
      >
        {{ props.buttonText }}
        <template #icon>
          <slot name="buttonIcon" />
        </template>
      </NButton>
    </slot>
  </NForm>
</template>

<!-- Basic form component that includes styles for fields (padding), an error, and a submit button. -->
<script setup lang="ts">
import { NButton, NForm } from 'naive-ui';
import { useIsFormValid } from 'vee-validate';
import colors from '@/assets/scss/modules/colors.module.scss';
import type { VFormProps, VFormEmits } from './types';

const props = withDefaults(defineProps<VFormProps>(), {
  buttonText: '',
  loading: false,
});
const emit = defineEmits<VFormEmits>();

const isValid = useIsFormValid();

function onSubmit() {
  if (props.loading) return;

  emit('submit');
}
</script>

<style lang="scss" scoped>
.v-form {
  display: flex;
  flex-direction: column;
  gap: $marginLG;

  & :deep(.form-fields) {
    display: flex;
    flex-direction: column;
    gap: $marginBase;
  }
}
</style>
