import React from "react";

import { Button } from "baseui/button";
import { useStyletron } from "baseui";

const THEME = {
  light: "light",
  dark: "dark",
};

const ThemeToggler = (props) => {
  const [css, theme] = useStyletron();

  return (
    <Button
      className={css({
        ...props.style,
      })}
      onClick={() =>
        props.setTheme(props.theme === THEME.light ? THEME.dark : THEME.light)
      }
    >
      Switch Theme
    </Button>
  );
};

export default ThemeToggler;
