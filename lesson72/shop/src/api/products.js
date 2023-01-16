import axios from 'axios';
// const url = 'http://192.168.0.139:3001/';
const url = 'http://localhost:3001/';

export const productsApi = {
  getProducts: (page = 1) => axios.get(url + `products?page=${page}`),
};
