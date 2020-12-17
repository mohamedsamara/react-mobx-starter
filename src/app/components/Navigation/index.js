import React, { useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { useStyletron } from "baseui";
import { Menu } from "baseui/icon";
import { Block } from "baseui/block";
import { Drawer } from "baseui/drawer";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Navigation as BaseNavigation } from "baseui/side-navigation";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";

import Button from "../Button";
import Link from "../Link";
import Logo from "../Logo";
import ThemeToggler from "../ThemeToggler";

const navItems = [
  {
    title: "Home",
    itemId: "/",
  },
  {
    title: "About",
    itemId: "/about",
  },
  {
    title: "Shop",
    itemId: "/shop",
  },
  {
    title: "Cart",
    itemId: "/cart",
  },
];

const Navigation = (props) => {
  const history = useHistory();
  const loc = useLocation();
  const [css, theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(loc.pathname);

  const itemProps = {
    display: "flex",
    alignItems: "center",
  };

  const narrowItemProps = {
    ...itemProps,
    overrides: {
      Block: {
        style: ({ $theme }) => ({
          width: $theme.sizing.scale1600,
          flexGrow: 0,
          justifyContent: "center",
        }),
      },
    },
  };

  return (
    <>
      <Drawer renderAll onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <BaseNavigation
          items={navItems}
          activeItemId={location}
          onChange={({ event, item }) => {
            event.preventDefault();
            history.push(item.itemId);
            setLocation(item.itemId);
          }}
          overrides={{
            NavItem: {
              style: ({ $active, $theme }) => {
                if (!$active)
                  return {
                    ":hover": {
                      color: $theme.colors.primaryA,
                      backgroundColor: $theme.colors.backgroundSecondary,
                    },
                    ":active": {
                      color: $theme.colors.primaryA,
                      backgroundColor: $theme.colors.backgroundSecondary,
                    },
                  };
                return {
                  backgroundColor: $theme.colors.primaryA,
                  //   color: $theme.colors.primary300,
                  ":hover": {
                    color: $theme.colors.accent400,
                  },
                };
              },
            },
          }}
        />
      </Drawer>

      <Block display={["block", "block", "none"]}>
        <FlexGrid
          flexGridColumnCount={[2]}
          flexGridColumnGap="scale400"
          flexGridRowGap="scale0"
          className={css({
            backgroundColor: theme.colors.primaryB,
          })}
        >
          <FlexGridItem {...narrowItemProps}>
            <Button onClick={() => setIsOpen(true)} kind="minimal">
              <Menu size={30} />
            </Button>
          </FlexGridItem>

          <FlexGridItem>
            <Logo />
          </FlexGridItem>
        </FlexGrid>
      </Block>

      <Block display={["none", "none", "block"]}>
        <HeaderNavigation>
          <StyledNavigationList $align={ALIGN.left}>
            <StyledNavigationItem>
              <Logo />
            </StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.center} />
          <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <Link to="/">Home</Link>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <Link to="/about">About</Link>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <Link to="/shop">Shop</Link>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <Link to="/cart">Cart</Link>
            </StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem
              className={css({
                marginRight: theme.sizing.scale400,
              })}
            >
              <ThemeToggler
                theme={props.theme}
                setTheme={props.setTheme}
                kind="primary"
              />
            </StyledNavigationItem>
          </StyledNavigationList>
        </HeaderNavigation>
      </Block>
    </>
  );
};

export default Navigation;
