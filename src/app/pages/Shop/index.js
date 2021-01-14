import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { H4 } from "baseui/typography";
import { StatefulTabs, Tab } from "baseui/tabs-motion";

import categoriesStore from "../../stores/Categories";
import productsStore from "../../stores/Products";
import cartStore from "../../stores/Cart";
import ProductList from "./ProductList";
import Loader from "../../components/Loader";

const Shop = observer(() => {
  const history = useHistory();

  useEffect(() => {
    categoriesStore.fetchCategories();
    productsStore.fetchProducts();
  }, []);

  const handleTabSelect = (category) => {
    productsStore.fetchCategoryProducts(category);

    history.push({
      search: `?category=${category}`,
    });
  };

  return (
    <div>
      <H4>Shop</H4>

      {categoriesStore.categories.loading ? (
        <Loader />
      ) : (
        <StatefulTabs initialState={{ activeKey: "0" }}>
          {categoriesStore.categories.data.map((category, key) => (
            <Tab
              title={category}
              key={key}
              onClick={() => handleTabSelect(category)}
            >
              {productsStore.products.loading ? (
                <Loader />
              ) : (
                <ProductList
                  products={productsStore.products.data}
                  addToCart={cartStore.addToCart}
                  removeFromCart={cartStore.removeFromCart}
                />
              )}
            </Tab>
          ))}
        </StatefulTabs>
      )}
    </div>
  );
});

export default Shop;
