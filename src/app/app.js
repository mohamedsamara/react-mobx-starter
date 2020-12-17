import React, { useState } from "react";

import { Router, Switch, Route } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import { Grid } from "baseui/layout-grid";

import history from "./history";
import routes from "./routes";

import Navigation from "./components/Navigation";
import "./styles";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

const engine = new Styletron();

const THEME = {
  light: "light",
  dark: "dark",
};

const App = () => {
  const [theme, setTheme] = useState(THEME.light);

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route key={key} path={path} component={component} exact />
  ));

  return (
    <div className="application">
      <Router history={history}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
            <Navigation theme={theme} setTheme={setTheme} />
            <Grid>
              <Switch>{routeComponents}</Switch>
            </Grid>
          </BaseProvider>
        </StyletronProvider>
      </Router>
    </div>
  );
};

export default App;
