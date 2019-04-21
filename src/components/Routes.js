import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from ".././App";
import Beers from "./Beers";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/beer/:beerName" render={props => <Beers {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
