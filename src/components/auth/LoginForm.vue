<template>
  <v-form
    class="login-form"
    @submit.prevent="handleLogin"
  >
    <div class="mb-8">
      <h2 class="text-h6 gradient-text text-center text-uppercase">
        Bem-vindo de volta
      </h2>
      <p class="text-subtitle-1 text-grey-darken-1 text-center">
        Acesse sua conta para continuar ...
      </p>
    </div>

    <v-text-field
      v-model="email"
      label="E-mail"
      type="email"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
      :error-messages="emailError"
      @input="emailError = ''"
    />

    <v-text-field
      v-model="password"
      label="Senha"
      :type="showPassword ? 'text' : 'password'"
      prepend-inner-icon="mdi-lock-outline"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      variant="outlined"
      class="mb-2"
      :error-messages="passwordError"
      @click:append-inner="showPassword = !showPassword"
      @input="passwordError = ''"
    />

    <div class="d-flex align-center justify-space-between mb-6">
      <v-checkbox
        v-model="rememberMe"
        label="Lembrar de mim"
        class="mt-0 font-weight-light"
        hide-details
      />
    </div>

    <v-btn
      type="submit"
      :loading="loading"
      class="login-button mb-4"
      size="large"
      block
    >
      Entrar
      <template #append>
        <v-icon
          icon="mdi-arrow-right"
          class="ml-2"
        />
      </template>
    </v-btn>
  </v-form>
</template>

<script>
import { notifyError, notifySuccess } from '@/helpers/notifyHelper';
import AuthService from '@/services/auth/AuthService';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      rememberMe: false,
      loading: false,
      emailError: '',
      passwordError: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        this.loading = true;

        if (!this.email) {
          this.emailError = 'O e-mail é obrigatório!';
          this.loading = false;
          return;
        }
        if (!this.password) {
          this.passwordError = 'A senha é obrigatória!';
          this.loading = false;
          return;
        }

        const { data } = await AuthService.login({ email: this.email, password: this.password });

        localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, data.data.token);

        this.$router.push({ 'name': 'Index' });
        notifySuccess(data.message);
      } catch(error) {
        notifyError(error.response.data.message);
      } finally {
        this.loading = false;
      }
    },
  }
}
</script>

<style scoped>
.login-button {
  background: linear-gradient(45deg, #FF3D00, #FB8C00) !important;
  font-weight: 400;
  letter-spacing: 0.5px;
  border-radius: 12px;
  height: 48px;
}

.forgot-password-link {
  color: #FB8C00 !important;
  font-size: 0.775rem;
  font-weight: 400;
}

:deep(.v-field) {
  border-radius: 12px !important;
}

:deep(.v-field__outline) {
  color: #FB8C00 !important;
}

:deep(.v-field--focused .v-field__outline) {
  color: #FB8C00 !important;
}
</style>
