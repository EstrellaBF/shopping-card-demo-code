import React from 'react';
// import ProductRow from './ProductRow'
import ProductRow from '../containers/ProductRowContainer';

const ProductCategoryRow = ({category}) => (
  <tr>
    <th colSpan="2">{category}</th>
  </tr>
)

const ProductRow = ({name, price, addingProduct}) => {
  return(
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td><button 
        type="button" 
        onClick={addingProduct}
        // onClick={e => {console.log(e.target)}}
      >+</button></td>
    </tr>
  )
}

const ProductTable = ({ products }) => {  
  const rows = [];
  let lastCategory = null;
  products.map(product => {
    if(product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
    }
    lastCategory = product.category;
    rows.push(<ProductRow name= {product.name} price= {product.price} key={product.name} />)
  })

  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ProductTable;