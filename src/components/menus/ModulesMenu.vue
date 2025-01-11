<template>
  <v-dialog
    v-for="(module, index) in modules"
    :key="index"
    v-model="module.dialog"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <template #activator="{ props: activatorProps }">
      <div class="hidden-md-and-up">
        <v-card
          v-bind="activatorProps"
          class="mx-2 my-2 d-flex flex-column align-center justify-center border border-opacity-50 border-warning"
          rounded="lg"
          height="300"
          min-width="200"
          max-width="300"
        >
          <v-card-item class="border rounded-lg bg-warning mb-6">
            <v-icon
              size="46"
              :icon="module.icon_card"
              class="hidden-sm-and-down"
            />
            <v-icon
              size="26"
              :icon="module.icon_card"
              class="hidden-md-and-up"
            />
          </v-card-item>
  
          <v-card-title class="text-uppercase font-weight-light">
            {{ module.title_card }}
          </v-card-title>
        </v-card>
      </div>
      <div class="hidden-sm-and-down w-100 my-2 mx-1">
        <v-card
          v-bind="activatorProps"
          class="mx-2 w-100 my-2 d-flex flex-column align-center justify-center border border-opacity-50 border-warning"
          rounded="lg"
          height="300"
        >
          <v-card-item class="border rounded-lg bg-warning mb-6">
            <v-icon
              size="46"
              :icon="module.icon_card"
              class="hidden-sm-and-down"
            />
            <v-icon
              size="26"
              :icon="module.icon_card"
              class="hidden-md-and-up"
            />
          </v-card-item>
  
          <v-card-title class="text-uppercase font-weight-light">
            {{ module.title_card }}
          </v-card-title>
        </v-card>
      </div>
    </template>

    <v-card>
      <v-toolbar color="background">
        <v-btn
          icon="mdi-close"
          @click="module.dialog = false"
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
        <component
          :is="module.componentId"
          v-if="module.componentId"
        />
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
import FormCategory from '../modules/FormCategory.vue';
import FormProduct from '../modules/FormProduct.vue';

  export default {
    components: {
      FormCategory,
      FormProduct
    },
    data () {
      return {
        modules: [
          {
            id: '1',
            title: 'Registro de Produtos',
            title_card: 'Registrar Novo Produto',
            icon_card: 'mdi-package-variant-closed-plus',
            componentId: 'FormProduct',
            dialog: false
          },
          {
            id: '2',
            title: 'Registro de Categorias',
            title_card: 'Registrar Nova Categoria',
            icon_card: 'mdi-tag-plus',
            componentId: 'FormCategory',
            dialog: false
          },
        ]
      }
    },
  }
</script>
