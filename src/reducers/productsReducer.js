/* eslint-disable import/prefer-default-export */

const initialState = {
  products: [],
  carrito: [],
  tarjetas: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addFirestoreProduct':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'getFirestoreProducts':
      return {
        ...state,
        products: action.payload,
      };
    case 'getFirestoreCarrito':
      return {
        ...state,
        carrito: action.payload,
      };
    case 'addFirestoreCarrito':
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };
    case 'getFirestoreCards':
      return {
        ...state,
        tarjetas: action.payload,
      };
    default:
      return state;
  }
};

export const getProducts = (state) => state.products.products;
export const getCarrito = (state) => state.products.carrito;
export const getTarjetas = (state) => state.products.tarjetas;
