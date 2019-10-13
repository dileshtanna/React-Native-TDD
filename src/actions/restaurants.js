import { ADD_RESTAURANT, ADD_DISH } from "./Types";

export const addRestaurant = newRestaurantName => {
  return {
    type: ADD_RESTAURANT,
    payload: newRestaurantName
  };
};

export const addDish = (idOfRestaurant, newDishName) => {
  return {
    type: ADD_DISH,
    payload: {
      id: idOfRestaurant,
      name: newDishName
    }
  };
};
