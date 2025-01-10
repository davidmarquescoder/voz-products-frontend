<template>
  <div
    v-if="category"
  >
    <v-container class="d-flex justify-space-between align-center" max-width="none">
      <v-btn
        :to="{'name': 'Index'}"
        icon="mdi-arrow-left"
        variant="outlined"
        color="warning"
        size="x-small"
        class="my-6 mx-10 mb-0"
      />

      <UpdateCategoryMenu />
    </v-container>
    <div class="mt-8 d-flex align-center justify-center">
      <span>
        <v-icon
          size="36"
          color="warning"
          icon="mdi-progress-tag"
        />
      </span>
      <h1 class="text-h4 font-weight-light text-uppercase mx-2">
        {{ category.name }}
      </h1>
    </div>

    <v-container v-if="!category.products.length > 0" class="text-center text-warning d-flex align-center" max-width="500" height="300">
      <span>Você ainda não possui produtos cadastrados nessa categoria,
        cadastre algum produto selecionando a categoria para que eles apareçam aqui.</span>
    </v-container>

    <v-container
      v-if="category.products.length > 0"
      max-width="none"
    >
      <v-container
        class="bg-surface d-flex align-center justify-center border rounded-lg border-warning"
        max-width="none"
      >
        <v-card
          v-for="(product, index) in category.products"
          :key="index"
          class="bg-background w-50 mx-2 my-2 d-flex flex-column align-center justify-center border border-opacity-50 border-warning"
          rounded="lg"
          height="300"
        >
          <v-card-item class="border rounded-lg bg-warning mb-6">
            <v-icon
              size="46"
              icon="mdi-package-variant-closed"
            />
          </v-card-item>

          <v-card-title class="text-uppercase font-weight-light text-truncated text-center w-75">
            {{ product.name }}
          </v-card-title>

          <v-card-actions class="d-flex align-center justify-center w-100">
            <UpdateProductMenu :productId="product.id" />

            <v-btn
              :to="{'name': '', 'params': ''}"
              variant="tonal"
              icon="mdi-trash-can-outline"
              rounded="lg"
              size="x-small"
              color="warning"
              @click="deleteData(product.id)"
            />
          </v-card-actions>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { notifyError, notifySuccess } from '@/helpers/notifyHelper';
import CategoryService from '@/services/category/CategoryService';
import ProductService from '@/services/product/ProductService';

export default {
  data() {
    return {
      category: '',
    };
  },
  mounted() {
    this.showData(this.$route.params.id);
  },
  methods: {
    async showData(id) {
      try {
        this.$loadingStore.isLoading = true;
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        const { data } = await CategoryService.showData(token, id);

        this.category = data.data;
        notifySuccess(data.message);
      } catch(error) {
        notifyError(error.response.data.message);;
      } finally {
        this.$loadingStore.isLoading = false;
      }
    },
    async deleteData(id) {
      try {
        this.$loadingStore.isLoading = true;
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        await ProductService.deleteData(token, id);

        notifySuccess('Produto deletado com sucesso!');
        this.showData(this.$route.params.id);
      } catch(error) {
        notifyError(error.response.data.message);;
      } finally {
        this.$loadingStore.isLoading = false;
      }
    }
  }
};
</script>
