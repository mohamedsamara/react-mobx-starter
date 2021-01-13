import { makeAutoObservable } from "mobx";
import axios from "axios";

class Products {
  products = {
    data: [],
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
    }
  };
}

const productsStore = new Products();

export default productsStore;
