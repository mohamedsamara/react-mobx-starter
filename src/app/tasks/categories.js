import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
