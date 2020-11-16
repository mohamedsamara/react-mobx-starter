import React, { useState } from "react";

import { Router, Route, Switch } from "react-router";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";

import history from "./history";
import routes from "./routes";

import Navigation from "./components/Navigation";

const engine = new Styletron();

const THEME = {
  light: "light",
  dark: "dark",
};

const App = () => {
  const [theme, setTheme] = useState(THEME.light);

  return (
    <Router history={history}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
          <Navigation theme={theme} setTheme={setTheme} />
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </BaseProvider>
      </StyletronProvider>
    </Router>
  );
};

export default App;
