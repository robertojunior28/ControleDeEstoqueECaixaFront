import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "../telas/home/Home";
import VerProdutos from "../telas/produto/verProdutos";

function AppRoutes(props) {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={VerProdutos} path="/produtos"/>

      </Switch>
    </Router>
  );
}

export default AppRoutes;
