import React from "react";

import { observer } from "mobx-react-lite";
import { useStyletron } from "baseui";
import { StyledTable, StyledHeadCell, StyledBodyCell } from "baseui/table-grid";
import Delete from "baseui/icon/delete";
import { H5 } from "baseui/typography";
import { Input } from "baseui/input";

import cartStore from "../../stores/Cart";
import Button from "../../components/Button";

const Quantity = observer(({ item }) => {
  const handleQuantityChange = (e) => {
    cartStore.updateQuantity(item, e.target.value);
  };

  return (
    <Input
      type="number"
      min={1}
      value={item.quantity}
      onChange={handleQuantityChange}
      clearOnEscape
    />
  );
});

const Cart = observer(() => {
  const [css] = useStyletron();

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {cartStore.cart.length > 0 ? (
        <div className={css({ height: "300px", overflowX: "scroll" })}>
          <StyledTable
            role="grid"
            $gridTemplateColumns="minmax(400px, max-content) 150px 150px 100px"
          >
            <div role="row" className={css({ display: "contents" })}>
              <StyledHeadCell>Item</StyledHeadCell>
              <StyledHeadCell> Price</StyledHeadCell>
              <StyledHeadCell> Quantity</StyledHeadCell>
              <StyledHeadCell></StyledHeadCell>
            </div>
            {cartStore.cart.map((item, index) => (
              <div
                role="row"
                className={css({ display: "contents" })}
                key={index}
              >
                <StyledBodyCell>{item.title}</StyledBodyCell>
                <StyledBodyCell>{item.price}</StyledBodyCell>
                <StyledBodyCell>
                  <Quantity item={item} />
                </StyledBodyCell>
                <StyledBodyCell>
                  <Button onClick={() => cartStore.removeFromCart(item)}>
                    <Delete />
                  </Button>
                </StyledBodyCell>
              </div>
            ))}
          </StyledTable>
        </div>
      ) : (
        <H5>Empty Cart</H5>
      )}
    </div>
  );
});

export default Cart;
