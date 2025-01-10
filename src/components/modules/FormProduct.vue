<template>
  <v-container>
    <LogoMaker
      :gradient="colors"
      :color="colors[1]"
      icon="mdi-package-variant-closed-plus"
      avatarSize="56"
      iconSize="26"
      lineWidth="380px"
    />

    <v-container class="my-10" max-width="900">
      <v-row>
        <v-col>
          <v-text-field
            v-model="payload.name"
            color="warning"
            prepend-inner-icon="mdi-package-variant-closed-plus"
            variant="outlined"
            label="Informe o nome do produto"
            rounded
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="payload.description"
            color="warning"
            prepend-inner-icon="mdi-format-text"
            variant="outlined"
            label="Informe a descrição do produto"
            rounded
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="payload.price"
            color="warning"
            prepend-inner-icon="mdi-cash-multiple"
            variant="outlined"
            label="Informe o preço do produto"
            type="number"
            rounded
          />
        </v-col>

        <v-col>
          <v-select
            v-model="payload.category_id"
            color="warning"
            prepend-inner-icon="mdi-tag"
            variant="outlined"
            label="Informe a categoria do produto"
            :items="categories"
            item-title="name"
            item-value="id"
            rounded
            @click="fetchData"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn
            v-if="productId"
            color="warning"
            variant="outlined"
            prepend-icon="mdi-package-variant"
            text="Atualizar produto"
            rounded
            block
            @click="updateData"
          />

          <v-btn
            v-if="!productId"
            color="warning"
            variant="outlined"
            prepend-icon="mdi-plus-circle"
            text="Criar novo produto"
            rounded
            block
            @click="createData"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { notifyError, notifySuccess } from '@/helpers/notifyHelper';
import CategoryService from '@/services/category/CategoryService';
import ProductService from '@/services/product/ProductService';

export default {
  props: {
    productId: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      colors: ['#FF3D00', '#FF8E53'],
      categories: [],
      payload: {
        name: '',
        description: '',
        price: '',
        category_id: '',
      }
    }
  },
  async mounted() {
    if(this.productId) {
      try {
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
        const { data } = await ProductService.showData(token, this.productId);

        this.payload.name        = data.data.name;
        this.payload.description = data.data.description;
        this.payload.price       = data.data.price;
        this.payload.category_id = data.data.category_id;
      } catch(error) {
        notifyError(error.response.data.message);
      }
    }
  },
  methods: {
    async fetchData() {
      try {
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        const { data } = await CategoryService.fetchData(token, 1);

        this.categories = data.data.data.map(category => ({
          id: category.id,
          name: category.name,
        }));
      } catch (error) {
        notifyError(error.response.data.message);
      }
    },
    async createData() {
      try {
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        const { data } = await ProductService.createData(token, this.payload);

        notifySuccess(data.message);
        this.$router.push({ 'name': 'CategoryDetails', 'params': {'id': this.payload.category_id} });
      } catch(error) {
        notifyError(error.response.data.message);
      }
    },
    async updateData() {
      try {
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        const { data } = await ProductService.updateData(token, this.payload, this.productId);

        notifySuccess(data.message);
        this.$router.push({ 'name': 'Index' });
      } catch(error) {
        notifyError(error.response.data.message);
      }
    }
  }
}
</script>
