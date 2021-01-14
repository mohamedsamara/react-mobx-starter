import React from "react";

import { useStyletron } from "baseui";
import { Heading, HeadingLevel } from "baseui/heading";

const Logo = () => {
  const [, theme] = useStyletron();

  return (
    <HeadingLevel>
      <Heading styleLevel={6} color={theme.colors.primaryA}>
        React MobX
      </Heading>
    </HeadingLevel>
  );
};

export default Logo;
