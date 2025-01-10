<template>
  <LogoMaker
    :gradient="colors"
    :color="colors[1]"
    icon="mdi-tag"
    avatarSize="56"
    iconSize="26"
    lineWidth="380px"
  />

  <h1 class="mt-1 mb-6 text-center text-subtitle-1 text-uppercase font-weight-light">
    Categorias
  </h1>

  <v-container
    class="bg-surface d-flex flex-wrap align-center justify-center border-s-sm border-e-sm border-t-sm rounded-ts-lg rounded-te-lg  border-warning"
    max-width="1200"
  >
    <v-card
      v-for="(category, index) in categories"
      :key="index"
      class="bg-background w-25 mx-2 my-2 d-flex flex-column align-center justify-center border border-opacity-50 border-warning"
      rounded="lg"
      height="300"
    >
      <v-card-item class="border rounded-lg bg-warning mb-6">
        <v-icon
          size="46"
          icon="mdi-tag-hidden"
        />
      </v-card-item>

      <v-card-title class="text-uppercase font-weight-light">
        {{ category.name }}
      </v-card-title>

      <v-card-actions class="d-flex align-center justify-center w-100">
        <v-btn
          :to="{ 'name': 'CategoryDetails', 'params': { 'id': category.id } }"
          variant="tonal"
          icon="mdi-eye"
          rounded="lg"
          size="x-small"
          color="primary"
        />
        <v-btn
          variant="tonal"
          icon="mdi-trash-can-outline"
          rounded="lg"
          size="x-small"
          color="warning"
          @click="deleteData(category.id)"
        />
      </v-card-actions>
    </v-card>
  </v-container>

  <v-container
    max-width="1200"
    class=" pa-0"
  >
    <v-pagination
      v-model="page"
      :length="totalPages"
      rounded="circle"
      color="warning"
      class="border border-warning bg-surface rounded-bs-lg rounded-be-lg"
      @update:model-value="onPageChange"
    />
  </v-container>
</template>

<script>
import { notifyError, notifySuccess } from '@/helpers/notifyHelper';
import CategoryService from '@/services/category/CategoryService';

  export default {
    data() {
      return {
        page: 1,
        totalPages: 0,
        categories: [

        ],
        colors: ['#FF3D00', '#FF8E53'],
      }
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

          const { data } = await CategoryService.fetchData(token, this.page);

          this.categories = data.data.data;
          this.totalPages = data.data.last_page;
        } catch(error) {
          notifyError(error.response.data.message);;
        }
      },
      async deleteData(id) {
        try {
          const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

          await CategoryService.deleteData(token, id);

          notifySuccess('Categoria deletada com sucesso!');
          await this.fetchData();
        } catch(error) {
          notifyError(error.response.data.message);;
        }
      },
      async onPageChange() {
        await this.fetchData();
      },
    }
  }
</script>
