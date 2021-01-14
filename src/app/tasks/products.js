import axios from "axios";

export const fetchCategoryProducts = async (category) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
