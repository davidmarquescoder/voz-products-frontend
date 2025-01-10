<template>
  <v-dialog
    v-for="(module, index) in modules"
    :key="index"
    v-model="module.dialog_product"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        icon="mdi-package-variant"
        variant="tonal"
        color="primary"
        size="x-small"
        rounded="lg"
      />
    </template>

    <v-card>
      <v-toolbar color="background">
        <v-btn
          icon="mdi-close"
          @click="module.dialog_product = false"
        />

        <v-toolbar-title class="text-uppercase font-weight-light">
          {{ module.title }}
        </v-toolbar-title>

        <v-spacer />
      </v-toolbar>

      <v-list
        lines="two"
        subheader
      >
        <FormProduct :productId="productId" />
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      productId: {
        type: String,
        default: '',
        required: true,
      }
    },
    data () {
      return {
        modules: [
          {
              id: '1',
              title: 'Atualização do Produto',
              dialog_product: false
          },
        ]
      }
    },
  }
</script>
