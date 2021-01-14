import { makeAutoObservable } from "mobx";
import axios from "axios";

import workerApi from "../tasks";

class Products {
  products = {
    data: [],
    loading: true,
    error: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      this.products.data = response.data;
    } catch (error) {
      this.products.error = error;
    } finally {
      this.products.loading = false;
    }
  };

  fetchCategoryProducts = async (category) => {
    try {
      this.products.loading = true;

      const response = await workerApi.fetchCategoryProducts(category);

      this.products.data = response;
    } catch (error) {
      this.products.error = error;
    } finally {
      this.products.loading = false;
    }
  };
}

const productsStore = new Products();

export default productsStore;
