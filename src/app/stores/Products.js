import { makeAutoObservable } from "mobx";
import axios from "axios";

class Products {
  products = {
    data: [],
    error: "",
  };
  comments = ["hello", "hi"];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      this.products.data = response.data;
    } catch (error) {
      this.products.error = error;
    }
  }

  pushProduct(newProduct) {
    this.products.data.push(newProduct);
  }

  //   increaseTimer() {
  //     this.secondsPassed += 1;
  //   }

  //   updateCount() {
  //     this.likesCount++;
  //   }

  postComment(comment) {
    this.comments.push(comment);
  }

  //   get commentsCount() {
  //     return this.comments.length;
  //   }
}

const productsStore = new Products();

export default productsStore;
