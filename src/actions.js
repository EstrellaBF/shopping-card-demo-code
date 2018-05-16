export const actionTypes = {
  ADD_PRODUCT: "ADD_PRODUCT"
};

// const addToCart = productId => ({
//   type: actionTypes.ADD_PRODUCT,
//   productId
// })

// export const addingProduct = productId => (dispatch, getState) => {
//   console.log(productId)
//   // if (getState().products.byId[productId].inventory > 0) {
//     dispatch(addToCart(productId))
//   // }
// }

export const addingProduct = productId => ({
  type: actionTypes.ADD_PRODUCT,
  productId
})


// export const addingProduct = productId => (dispatch, getState) => {
//   console.log(getState())
//   // if (getState().products.byId[productId].inventory > 0) {
//   //   dispatch(addToCart(productId))
//   // }
// }