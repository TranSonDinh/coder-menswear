import axios from "axios";

const URL = "http://localhost:5000";

export const fetchProducts = () => axios.get(`${URL}/products`);
export const createProduct = (payload) => axios.post(`${URL}/products`, payload);

