export const actionTypes = {
  ADD_PRODUCT: "ADD_PRODUCT"
};

export function addingProduct() { //incrementAction
  return {
    type: actionTypes.ADD_PRODUCT
  };
}