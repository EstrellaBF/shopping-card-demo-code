import React from "react";
import { connect } from "react-redux";
import ProductItem from './ProductItem'
// import { addingProduct } from "../actions";

const products = [
  { id: '1', category: 'Sporting Goods', price: '49', stocked: true, name: 'Footbal' },
  { id: '2', category: 'Sporting Goods', price: '9', stocked: true, name: 'Baseball' },
  { id: '3', category: 'Sporting Goods', price: '29', stocked: false, name: 'Basketball' },
  { id: '4', category: 'Electronics', price: '99', stocked: true, name: 'Ipad' },
  { id: '5', category: 'Electronics', price: '300', stocked: false, name: 'Smartphone' },
  { id: '6', category: 'Electronics', price: '1600', stocked: true, name: 'Nexus 7' } 
]

const ListProduct = () => {
  console.log(products)
  return (
    <div>
      {products.map(product =>
        <ProductItem 
          key = {product.id}
          {...product}
          name = {product.name}
          price = {product.price}
        />
      )}
    </div>
  );
};

const ListContainer = connect(
  function mapStateToProps(state) {
    // del MainReducer en el estado inicial
    const { 
      filteredProducts
    } = state.AppReducer;

    return {
      products: filteredProducts
    };
  }
)(ListProduct)

// export default ListContainer;

// // const mapStateToProps = state => ({
// //   value: state.value,
// //   numero: state.numero
// // });

// // const mapDispatchToProps = dispatch => ({
// //   addingProduct: () => dispatch(addingProduct())
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);


export default ListProduct;
