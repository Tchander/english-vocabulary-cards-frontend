<template>
  <NFormItem
    :validation-status="errorMessage ? 'error' : undefined"
    :feedback="feedback"
  >
    <template #label>
      <div class="password-label">
        <span>
          {{ props.label }}
        </span>
        <NTooltip
          trigger="hover"
          :style="{ maxWidth: '254px' }"
        >
          <template #default>
            {{ props.tooltipMessage }}
          </template>
          <template #trigger>
            <Icon
              name="ph:info-fill"
              class="password-info"
              size="16"
            />
          </template>
        </NTooltip>
      </div>
    </template>
    <template #default>
      <NInput
        v-model:value="value"
        size="large"
        type="password"
        show-password-on="click"
        :input-props="props.inputProps"
        @keydown.space.prevent
      />
    </template>
  </NFormItem>
</template>

<script lang="ts" setup>
import { NFormItem, NTooltip, NInput } from 'naive-ui';
import { useField } from 'vee-validate';
import { computed } from 'vue';
import type { PasswordInputProps } from './types';

const props = withDefaults(defineProps<PasswordInputProps>(), {
  label: 'Password',
  tooltipMessage: 'Password must be more then 4 symbols',
  path: 'password',
});

const { value, errorMessage } = useField<string>(() => props.path);

const feedback = computed(() => {
  // TODO: костыль для 1 сообщения, подумать как нормально выводить одинаковые сообщения
  if (errorMessage.value === 'Пароли не совпадают') return errorMessage.value;
  return errorMessage.value ? 'Неверный формат' : undefined;
});
</script>

<style lang="scss" scoped>
.password-label {
  display: flex;
  align-items: center;
  gap: $marginXXS;
}

.password-info {
  color: $colorTextDisabled;
}
</style>
