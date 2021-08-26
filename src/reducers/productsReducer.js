/* eslint-disable import/prefer-default-export */

const initialState = {
  products: [],
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
    default:
      return state;
  }
};

export const getProducts = (state) => state.products.products;
