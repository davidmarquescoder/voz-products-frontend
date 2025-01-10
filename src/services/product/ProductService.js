import axios from "axios";

const prefixName = 'products';

export default {
  async createData(token, payload) {
    return axios.post(`${import.meta.env.VITE_API_BASE_URL}/${prefixName}/`, payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  async showData(token, id) {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/${prefixName}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  async updateData(token, payload, id) {
    return axios.put(`${import.meta.env.VITE_API_BASE_URL}/${prefixName}/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  async deleteData(token, id) {
    return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/${prefixName}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
}
