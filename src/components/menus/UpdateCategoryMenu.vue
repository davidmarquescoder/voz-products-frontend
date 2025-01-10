<template>
  <v-dialog
    v-for="(module, index) in modules"
    :key="index"
    v-model="module.dialog_category"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        prepend-icon="mdi-tag-edit"
        text="Editar Categoria"
        variant="outlined"
        color="warning"
        size="x-small"
        class="my-6 mx-10 mb-0"
      />
    </template>

    <v-card>
      <v-toolbar color="background">
        <v-btn
          icon="mdi-close"
          @click="module.dialog_category = false"
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
        <FormCategory :categoryId="$route.params.id" />
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        modules: [
          {
            id: '1',
            title: 'Atualização da Categoria',
            dialog_category: false
          },
        ]
      }
    },
  }
</script>
