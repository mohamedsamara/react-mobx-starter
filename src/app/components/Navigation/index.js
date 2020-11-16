import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { ChevronDown, Delete } from "baseui/icon";

import ThemeToggler from "../ThemeToggler";

const Navigation = (props) => {
  const [mainItems, setMainItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setMainItems([
      {
        active: true,
        label: "Home",
        link: "/",
      },
      {
        icon: ChevronDown,
        label: "Shop",
        navExitIcon: Delete,
        children: [
          { label: "Products", link: "/products" },
          { label: "Cart", link: "/cart" },
        ],
      },
      {
        label: <ThemeToggler theme={props.theme} setTheme={props.setTheme} />,
      },
    ]);
  }, [props.theme]);

  const handleMenuItems = (item) => {
    const { link } = item;

    if (link) {
      history.push(link);
    }

    setMainItems((prev) => setItemActive(prev, item));
  };

  return (
    <AppNavBar
      title="React MobX"
      mainItems={mainItems}
      onMainItemSelect={handleMenuItems}
    />
  );
};

export default Navigation;
