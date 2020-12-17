import React from "react";

import { useStyletron } from "baseui";
import { Button as BaseButton, KIND } from "baseui/button";

const Button = ({ children, onClick, style, kind }) => {
  const [css] = useStyletron();

  return (
    <BaseButton
      kind={KIND[kind]}
      className={css({
        ...style,
      })}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  kind: "primary",
};

export default Button;
