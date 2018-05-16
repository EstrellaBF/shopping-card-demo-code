import React, { Component } from "react";
import Cart from "./Cart";
import ListProduct from "./ListProduct";

class App extends Component {
  render() {
    return (
      <div>
        <Cart />
        <ListProduct />
      </div>
    );
  }
}

export default App;
