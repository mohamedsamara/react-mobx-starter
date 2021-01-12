import React from "react";

import {
  Card,
  StyledTitle,
  StyledBody,
  StyledAction,
  StyledThumbnail,
} from "baseui/card";

import Button from "../../components/Button";

const ProductItem = ({ product }) => {
  return (
    <>
      <Card
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              width: "328px",
              height: "100%",
              backgroundColor: $theme.colors.white,
            }),
          },
        }}
      >
        <StyledThumbnail
          src={product.image}
          style={{
            height: "320px",
            width: "100%",
            objectFit: "contain",
            marginLeft: 0,
          }}
        />
        <StyledTitle className="">{product.title}</StyledTitle>

        <StyledBody className="text-ellipsis">{product.description}</StyledBody>
        <StyledAction>
          <Button
            overrides={{ BaseButton: { style: { width: "100%" } } }}
            kind="secondary"
          >
            Add To Cart
          </Button>
        </StyledAction>
      </Card>
    </>
  );
};

export default ProductItem;
