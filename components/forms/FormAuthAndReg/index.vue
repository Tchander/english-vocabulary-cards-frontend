<template>
  <VForm
    :error-message="state.errorMessage"
  >
    <VFormSection>
      <PasswordInput />
    </VFormSection>

    <!-- <template #submitButton>
      <div class="actions">
        <NButton
          strong
          type="primary"
          size="large"
          icon-placement="right"
          :color="disableLogin ? undefined : coreColors.blue700"
          :loading="state.loginLoading"
          :disabled="disableLogin"
          @click="handleLogin"
        >
          Вход
        </NButton>
        <NButton
          strong
          size="large"
          icon-placement="right"
          :loading="state.registrationLoading"
          :disabled="disableRegistration"
          @click="handleRegistration"
        >
          Регистрация
        </NButton>
      </div>
    </template> -->
  </VForm>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

type State = {
  errorMessage: string;
};
const state = reactive<State>({
  errorMessage: '',
});
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  gap: $marginXS;

  & > * {
    flex: 1 1 0;
  }
}
</style>
