import React from "react";

import Button from "../Button";

const THEME = {
  light: "light",
  dark: "dark",
};

const ThemeToggler = (props) => {
  return (
    <Button
      {...props}
      onClick={() =>
        props.setTheme(props.theme === THEME.light ? THEME.dark : THEME.light)
      }
    >
      Switch Theme
    </Button>
  );
};

export default ThemeToggler;
