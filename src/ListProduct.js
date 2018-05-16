import React from "react";
import { connect } from "react-redux";

import { addingProduct } from "./actions";

const Page = ({ addingProduct }) => {
  return (
    <div>
      <h1>hola</h1>
      <button onClick={addingProduct}>+</button>
    </div>
  );
};

const mapStateToProps = state => ({
  // value: state.value
});

const mapDispatchToProps = dispatch => ({
  addingProduct: () => dispatch(addingProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
