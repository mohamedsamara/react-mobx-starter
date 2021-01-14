import "core-js";
import "regenerator-runtime/runtime";

import { expose } from "comlink";

import { fetchCategories } from "./categories";

const exports = {
  fetchCategories,
};

expose(exports);
