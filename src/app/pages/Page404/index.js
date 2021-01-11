import React from "react";

import { useHistory } from "react-router-dom";
import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { H4 } from "baseui/typography";

import Button from "../../components//Button";

const Page404 = () => {
  const history = useHistory();
  const [css, theme] = useStyletron();

  return (
    <Block
      className={css({
        backgroundColor: theme.colors.primary50,
        borderRadius: theme.borders.radius200,
        padding: theme.sizing.scale1200,
        justifyContent: "center",
        textAlign: "center",
        width: "450px",
        margin: "0 auto",
      })}
    >
      <Block
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "250px",
          margin: "0 auto",
        })}
      >
        <H4 color={theme.colors.primary400}>Page404</H4>
        <Button onClick={() => history.push("/")} kind="primary" shape="pill">
          Back To Home Page
        </Button>
      </Block>
    </Block>
  );
};

export default Page404;
