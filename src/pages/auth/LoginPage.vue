<template>
  <v-container
    fluid
    class="fill-height"
  >
    <v-row
      class="fill-height"
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="4"
      >
        <v-card class="login-card">
          <div class="brand-accent" />
          <v-card-item class="text-center pt-8">
            <v-avatar
              size="64"
              class="brand-avatar mb-4"
            >
              <v-icon
                size="32"
                icon="mdi-view-dashboard"
                color="white"
              />
            </v-avatar>
          </v-card-item>

          <v-card-text>
            <login-form />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.login-card {
  border-radius: 24px;
}

.brand-accent {
  height: 4px;
  width: 100%;
  position: absolute;
  top: 0;
  background: linear-gradient(90deg, #FF3D00, #FB8C00);
}

.brand-avatar {
  background: linear-gradient(45deg, #FF3D00, #FB8C00);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
