import { ADD_TO_BASKET, ADD_TO_FAVORITES } from './types';
export const addToBasket = (basket) => {
  return {
    type: ADD_TO_BASKET,
    basket: basket,
  };
};
export const addToFavorites = (favorites) => {
  return {
    type: ADD_TO_FAVORITES,
    favorites: favorites,
  };
};
