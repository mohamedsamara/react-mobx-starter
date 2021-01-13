import { makeAutoObservable, autorun, computed } from "mobx";

class Cart {
  cart = [];

  constructor() {
    makeAutoObservable(this, {
      cartItems: computed,
    });
  }

  addToCart = (product) => {
    const index = this.cart.findIndex((i) => i.id === product.id);

    if (index !== -1) {
      this.cart[index].quantity = Number(this.cart[index].quantity) + 1;
    } else {
      this.cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(this.cart));
  };

  removeFromCart = (product) => {
    const index = this.cart.findIndex((i) => i.id === product.id);
    this.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  };

  updateQuantity = (product, quantity) => {
    const index = this.cart.findIndex((i) => i.id === product.id);
    this.cart[index].quantity = quantity;

    localStorage.setItem("cart", JSON.stringify(this.cart));
  };

  get cartItems() {
    return this.cart.length;
  }
}

const cartStore = new Cart();

autorun(() => {
  if (localStorage.getItem("cart") != null) {
    cartStore.cart = JSON.parse(localStorage.getItem("cart"));
  }
});

export default cartStore;
