import { makeAutoObservable } from "mobx";

import workerApi from "../tasks";

class Categories {
  categories = {
    data: [],
    loading: true,
    error: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const response = await workerApi.fetchCategories();

      this.categories.data = response;
    } catch (error) {
      this.categories.error = error;
    } finally {
      this.categories.loading = false;
    }
  };
}

const categoriesStore = new Categories();

export default categoriesStore;
