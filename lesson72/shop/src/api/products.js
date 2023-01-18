import axios from 'axios';
const url = 'http://194.87.94.216/';
// const url = 'http://localhost:3001/';

export const productsApi = {
  getProducts: (page = 1) => axios.get(url + `api/products?page=${page}`),
  getProduct: (id) => axios.get(url + `api/products/${id}`),
  register: (payload) => axios.post(url + 'api/register', payload),
  login: (payload) => axios.post(url + 'api/login', payload),
};
