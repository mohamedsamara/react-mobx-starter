import React from "react";

import { Router, Route, Switch } from "react-router";

import history from "./history";
import routes from "./routes";

const App = () => {
  return (
    <div className="application">
      <Router history={history}>
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
      </Router>
    </div>
  );
};

export default App;
