import React, { useState } from "react";

import { Router } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import { Grid } from "baseui/layout-grid";

import "./styles";
import history from "./history";
import Routes from "./routes";
import Navigation from "./components/Navigation";

const engine = new Styletron();

const THEME = {
  light: "light",
  dark: "dark",
};

const App = () => {
  const [theme, setTheme] = useState(THEME.light);

  return (
    <div className="application">
      <Router history={history}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
            <Navigation theme={theme} setTheme={setTheme} />
            <div className="wrapper">
              <Grid>
                <Routes />
              </Grid>
            </div>
          </BaseProvider>
        </StyletronProvider>
      </Router>
    </div>
  );
};

export default App;
