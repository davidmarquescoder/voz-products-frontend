<template>
  <v-container>
    <LogoMaker
      :gradient="colors"
      :color="colors[1]"
      icon="mdi-tag"
      avatarSize="56"
      iconSize="26"
      lineWidth="380px"
    />

    <v-container class="my-10" max-width="600">
      <v-text-field
        v-model="payload.name"
        color="warning"
        prepend-inner-icon="mdi-tag"
        variant="outlined"
        label="Informe o nome da categoria"
        rounded
      />

      <v-btn
        v-if="!categoryId"
        color="warning"
        variant="outlined"
        prepend-icon="mdi-plus-circle"
        text="Criar nova categoria"
        rounded
        block
        @click="createData"
      />

      <v-btn
        v-if="categoryId"
        color="warning"
        variant="outlined"
        prepend-icon="mdi-tag-edit"
        text="Atualizar categoria"
        rounded
        block
        @click="updateData"
      />
    </v-container>
  </v-container>
</template>

<script>
import { notifyError, notifySuccess } from '@/helpers/notifyHelper';
import CategoryService from '@/services/category/CategoryService';

export default {
  props: {
    categoryId: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      colors: ['#FF3D00', '#FF8E53'],
      payload: {
        name: ''
      }
    }
  },
  async mounted() {
    if(this.categoryId) {
      try {
        this.$loadingStore.isLoading = true;

        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
        const { data } = await CategoryService.showData(token, this.categoryId);

        this.payload.name = data.data.name;
      } catch(error) {
        notifyError(error.response.data.message);
      } finally {
        this.$loadingStore.isLoading = false;
      }
    }
  },
  methods: {
    async createData() {
      try {
        this.$loadingStore.isLoading = true;
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        const { data } = await CategoryService.createData(token, this.payload);

        notifySuccess(data.message);
        this.$router.push({ 'name': 'CategoryDetails', 'params': {'id': data.data.id} });
      } catch(error) {
        notifyError(error.response.data.message);
      } finally {
        this.$loadingStore.isLoading = false;
      }
    },
    async updateData() {
      try {
        this.$loadingStore.isLoading = true;
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        const { data } = await CategoryService.updateData(token, this.payload, this.categoryId);

        notifySuccess(data.message);
        this.$router.push({ 'name': 'Index' });
      } catch(error) {
        notifyError(error.response.data.message);
      } finally {
        this.$loadingStore.isLoading = false;
      }
    }
  }
}
</script>
