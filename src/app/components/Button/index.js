import React from "react";

import { useStyletron } from "baseui";
import { Button as BaseButton, KIND, SHAPE } from "baseui/button";

const Button = ({ children, onClick, style, kind, shape }) => {
  const [css] = useStyletron();

  return (
    <BaseButton
      kind={KIND[kind]}
      shape={SHAPE[shape]}
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
  shape: "",
};

export default Button;
