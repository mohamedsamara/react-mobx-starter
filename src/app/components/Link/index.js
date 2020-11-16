import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { useStyletron } from "baseui";

const Link = ({ children, style, to, isExternal, ...props }) => {
  const [css, theme] = useStyletron();
  console.log({ props });

  if (isExternal) {
    return (
      <a
        href={to}
        {...props}
        className={css({
          cursor: "pointer",
          textDecoration: "none",
          color: theme.colors.accent,
          ":after": {
            content: "🔗",
          },
          ...style,
        })}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={to}
      className={css({
        cursor: "pointer",
        textDecoration: "none",
        color: theme.colors.accent,
        ...style,
      })}
    >
      {children}
    </RouterLink>
  );
};

Link.defaultProps = {
  isExternal: false,
};

export default Link;
