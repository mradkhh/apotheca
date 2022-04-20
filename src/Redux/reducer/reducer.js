import { ADD_TO_BASKET, ADD_TO_FAVORITES } from './types';
const initialState = {
  basket: [],
  favorites: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: action.basket,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
      default:
        return state;
    }
  };
  export default reducer;