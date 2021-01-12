import React from "react";

import { useStyletron } from "baseui";
import { Button as BaseButton, KIND, SHAPE } from "baseui/button";

const Button = ({
  children,
  onClick,
  style,
  kind,
  shape,
  overrides,
  props,
}) => {
  const [css] = useStyletron();

  return (
    <BaseButton
      kind={KIND[kind]}
      shape={SHAPE[shape]}
      className={css({
        ...style,
      })}
      onClick={onClick}
      overrides={overrides}
      {...props}
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
