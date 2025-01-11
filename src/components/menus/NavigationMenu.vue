<template>
  <v-app-bar :elevation="0">
    <template #prepend>
      <v-icon
        color="warning"
        class="ml-4"
        icon="mdi-view-dashboard"
      />
    </template>

    <v-app-bar-title class="font-weight-light hidden-sm-and-down">
      DASH<span class="text-warning font-weight-bold">VOZ</span>
    </v-app-bar-title>

    <template #append>
      <v-btn
        text="Backend"
        size="small"
        class="mx-1"
        color="warning"
        variant="text"
        append-icon="mdi-github"
        href="https://github.com/davidmarquescoder/teste-voz-backEnd"
        target="_blank"
      />
      <v-btn
        text="Frontend"
        size="small"
        class="mx-1"
        color="warning"
        variant="text"
        append-icon="mdi-github"
        href="https://github.com/davidmarquescoder/voz-products-frontend"
        target="_blank"
      />
      <v-btn
        text="Sair"
        size="small"
        class="mx-2 mx-lg-10"
        color="warning"
        variant="outlined"
        append-icon="mdi-logout"
        @click="handlerLogout"
      />
    </template>
  </v-app-bar>
</template>

<script>
import { notifyError, notifySuccess } from '@/helpers/notifyHelper';
import AuthService from '@/services/auth/AuthService';

  export default {
    data() {
      return {

      }
    },
    methods: {
      async handlerLogout() {
        try {
          this.$loadingStore.isLoading = true;

          const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
          await AuthService.logout(token);

          localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);

          this.$router.push({ 'name': 'Login' });
          notifySuccess('Logout realizado com sucesso!');
        } catch(error) {
          notifyError(error.response.data.message);;
        } finally {
          this.$loadingStore.isLoading = false;
        }
      }
    }
  }
</script>
