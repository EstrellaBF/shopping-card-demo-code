import React from "react";
import { connect } from 'react-redux';
import { addingProduct } from "../actions";

const Cart = ({products, numero, nombre }) => {
  console.log(numero)
  return(
  <div>
    <p>Carrito:</p>
    <h3>{numero}</h3>
    <p>{nombre}</p>
  </div>
  )
};

const mapStateToProps = state => ({
  value: state.value,
  numero: state.numero
});

const mapDispatchToProps = dispatch => ({
  addingProduct: () => dispatch(addingProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


