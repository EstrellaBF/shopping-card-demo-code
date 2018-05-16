const initialState = {
  value: "Pollo",
  numero: 0
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        // value: (state.value = "hola"),
        numero: state.numero + 1
      };
    // case "DECREASE":
    //   return { ...state, value: (state.value = "chau") };
    default:
      return state;
  }
}

export default addReducer;
