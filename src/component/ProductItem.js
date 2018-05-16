import React from "react";
import { connect } from "react-redux";
import { addingProduct } from "../actions";

const ProductItem = ({ name, price, addingProduct }) => (
  <div>
    <p>{name}</p><span>{price}</span>
    <button onClick={addingProduct}>+</button>
  </div>
)

const mapStateToProps = state => ({
  // value: state.value
});

const mapDispatchToProps = dispatch => ({
  addingProduct: () => dispatch(addingProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);