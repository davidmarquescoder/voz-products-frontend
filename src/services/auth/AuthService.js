import axios from "axios";

export default {
  async login(payload) {
    return axios.post(`${import.meta.env.VITE_API_BASE_URL}/login/`, payload);
  },

  async logout(token) {
    return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/logout/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  async auth(token) {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
}
