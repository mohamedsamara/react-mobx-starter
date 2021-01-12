import React from "react";

import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

import ProductItem from "./ProductItem";

const itemProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ProductList = ({ products }) => {
  return (
    <>
      <FlexGrid
        flexGridColumnCount={[1, 1, 2, 3]}
        flexGridColumnGap="scale900"
        flexGridRowGap="scale900"
      >
        {products.map((product, index) => (
          <FlexGridItem {...itemProps} key={index}>
            <ProductItem product={product} />
          </FlexGridItem>
        ))}
      </FlexGrid>
    </>
  );
};

export default ProductList;
