import { actionTypes } from './actions';

const PRODUCTS = [
  { id: '1', category: 'Sporting Goods', price: '49', stocked: true, name: 'Footbal' },
  { id: '2', category: 'Sporting Goods', price: '9', stocked: true, name: 'Baseball' },
  { id: '3', category: 'Sporting Goods', price: '29', stocked: false, name: 'Basketball' },
  { id: '4', category: 'Electronics', price: '99', stocked: true, name: 'Ipad' },
  { id: '5', category: 'Electronics', price: '300', stocked: false, name: 'Smartphone' },
  { id: '6', category: 'Electronics', price: '1600', stocked: true, name: 'Nexus 7' } 
]

const initialState = {
  filteredProducts: PRODUCTS,
  numero: 0,
  nombre: []
};

function addReducer(state = initialState, action) {
  // console.log(state.filteredProducts),
  // console.log(state.filteredProducts[0])
  //   console.log(actionTypes.ADD_PRODUCT);
  //   console.log(action.type);

  if(action.type === actionTypes.ADD_PRODUCT) {
    const filterProducts = state.filteredProducts.filter (p => {
      console.log(p)
      
    })
    // const filteredProducts = state.originalProducts.filter(p => {
    //   console.log(state.originalProducts); // Lanza toda la data
    //   console.log(p); //cada objeto de la data {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"}
      
    // })
  }
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        // value: (state.value = "hola"),
        numero: state.numero + 1,
        nombre: state.name
      };
    // case "DECREASE":
    //   return { ...state, value: (state.value = "chau") };
    default:
      return state;
  }    
  // state = {
  //   ...state,
  //   filteredProducts
  // }
}

export default addReducer;
