import React from "react";
// import { connect } from "react-redux";
import ProductItem from './ProductItem'
// import { addingProduct } from "../actions";

const products = [
  { id: '1', category: 'Sporting Goods', price: '49', stocked: true, name: 'Footbal' },
  { id: '2', category: 'Sporting Goods', price: '9', stocked: true, name: 'Baseball' },
  { id: '3', category: 'Sporting Goods', price: '29', stocked: false, name: 'Basketball' },
  { id: '4', category: 'Electronics', price: '99', stocked: true, name: 'Ipad' },
  { id: '5', category: 'Electronics', price: '300', stocked: false, name: 'Smartphone' },
  { id: '6', category: 'Electronics', price: '1600', stocked: true, name: 'Nexus 7' } ]

const ListProduct = () => {
  return (
    <div>
      {products.map(product =>
        <ProductItem 
          key = {product.id}
          {...product}
        />
      )}
    </div>
  );
};


export default ListProduct;
