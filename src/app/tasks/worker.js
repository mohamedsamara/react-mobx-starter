import "core-js";
import "regenerator-runtime/runtime";

import { expose } from "comlink";

import { fetchCategories } from "./categories";
import { fetchCategoryProducts } from "./products";

const exports = {
  fetchCategories,
  fetchCategoryProducts,
};

expose(exports);
