import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";
import { H4 } from "baseui/typography";

import productsStore from "../../stores/Products";
import ProductList from "./ProductList";

const Shop = observer(() => {
  useEffect(() => {
    productsStore.fetchProducts();
  }, []);

  return (
    <div>
      <H4>Shop</H4>
      <ProductList products={productsStore.products.data} />
    </div>
  );
});

export default Shop;
