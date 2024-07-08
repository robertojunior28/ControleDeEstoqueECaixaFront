import React from "react";
import "./App.css";
import AppRoutes from "./principal/AppRoutes";
import NavBar from "./componentes/NavBar";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <AppRoutes />
      </div>
    );
  }
}
