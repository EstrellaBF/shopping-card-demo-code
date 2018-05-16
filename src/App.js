import React, { Component } from "react";
// import Cart from "./component/Cart";
import Cart from "./component/Cart";
import ListProduct from "./component/ListProduct";

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
