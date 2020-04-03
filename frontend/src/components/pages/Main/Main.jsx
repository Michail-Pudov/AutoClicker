import React, { Component } from "react";
import Filters from "./Filters/Filters";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Главная страница</h1>
        <Filters />
      </div>
    );
  }
}

export default Main;
