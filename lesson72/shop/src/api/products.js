import axios from 'axios';
// const url = 'http://192.168.0.139:3001/';
const url = 'http://localhost:3001/';


export default {
  getProducts: () => axios.get(url + 'products'),
};
