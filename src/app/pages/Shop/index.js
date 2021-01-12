import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";
import { H4 } from "baseui/typography";

import productsStore from "../../stores/Products";
import ProductList from "./ProductList";

const Shop = observer(() => {
  useEffect(() => {
    productsStore.fetchProducts();
  }, []);

  console.log(productsStore.products, "products");

  return (
    <div>
      <H4>Shop Page</H4>
      <ProductList />
    </div>
  );
});

export default Shop;
