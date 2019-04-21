import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from ".././App";
import Beers from "./Beers";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/beers/:beerName" component={Beers} />
    </Switch>
  </BrowserRouter>
);

export default Router;
