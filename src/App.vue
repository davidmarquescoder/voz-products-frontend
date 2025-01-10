<template>
  <v-app>
    <v-main>
      <v-overlay :model-value="$loadingStore.isLoading" class="align-center justify-center">
        <v-progress-circular color="warning" size="84" indeterminate />
      </v-overlay>

      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>
