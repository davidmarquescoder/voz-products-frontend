<template>
  <v-btn
    v-if="product"
    :to="{ 'name': 'CategoryDetails', 'params': { id: product.category.id } }"
    icon="mdi-arrow-left"
    variant="outlined"
    color="warning"
    size="x-small"
    class="my-6 mx-10 mb-0"
  />

  <v-container v-if="product" class="h-75 d-flex flex-column justify-center">
    <div>
      <v-card class="mx-auto border" max-width="700" elevation="4" rounded="lg">
        <v-card-item>
          <v-card-title class="text-h5 mb-1 text-uppercase text-wrap d-flex justify-space-between align-center">
            <span class="font-weight-light mr-2">
              {{ product.name }}
            </span>

            <v-chip
              size="small"
              class="mb-4 mt-2"
              color="#FB8C00"
              text-color="white"
              prepend-icon="mdi-tag"
              label
            >
              {{ product.category?.name }}
            </v-chip>
          </v-card-title>

          <v-card-item class="d-flex align-center text-h6 font-weight-light text-warning mt-4 pa-1">
            <v-icon icon="mdi-cash-multiple" />
            R$ {{ product.price }}
          </v-card-item>

          <v-card-text>
            <v-divider class="my-4" />
            <div class="text-body-1 mb-4 text-wrap text-justify">
              {{ product.description }}
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { notifyError, notifySuccess } from '@/helpers/notifyHelper';
import ProductService from '@/services/product/ProductService';

export default {
  data() {
    return {
      product: '',
    }
  },
  async mounted() {
    this.showData(this.$route.params.id);
  },
  methods: {
    async showData(id) {
      try {
        this.$loadingStore.isLoading = true;
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
        const { data } = await ProductService.showData(token, id);
        this.product = data.data;
        notifySuccess(data.message);
      } catch(error) {
        notifyError(error.response.data.message);
      } finally {
        this.$loadingStore.isLoading = false;
      }
    },
  }
}
</script>

<style scoped>
.primary-color {
  color: #FB8C00;
}
</style>
