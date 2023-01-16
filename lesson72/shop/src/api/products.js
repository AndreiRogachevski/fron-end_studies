import axios from 'axios';
const url = 'http://194.87.94.216/';
// const url = 'http://localhost:3001/';

export const productsApi = {
  getProducts: (page = 1, perPage = 10) =>
    axios.get(url + `api/products?page=${page}&per_page=${perPage}`),
};
