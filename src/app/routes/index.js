import React from "react";

import { Route, Switch } from "react-router-dom";

import {
  LoadableHome,
  LoadableAbout,
  LoadableShop,
  LoadableCart,
  LoadableNotFoundPage,
} from "./routes";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <LoadableHome />
    </Route>
    <Route path="/about">
      <LoadableAbout />
    </Route>
    <Route path="/shop">
      <LoadableShop />
    </Route>
    <Route path="/cart">
      <LoadableCart />
    </Route>
    <Route>
      <LoadableNotFoundPage />
    </Route>
  </Switch>
);

export default Routes;
