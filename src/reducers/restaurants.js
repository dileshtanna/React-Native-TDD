import { ADD_RESTAURANT, ADD_DISH } from "../actions/Types";

const initialState = { lastInsertedId: 0, restaurants: [] };

const addDish = (restaurants, newDishData) => {
  const indexOfRestaurantToUpdate = restaurants.findIndex(
    restaurant => restaurant.id === newDishData.id
  );
  const restaurant = restaurants[indexOfRestaurantToUpdate];
  const updatedRestaurant = {
    ...restaurant,
    dishes: [...restaurant.dishes, newDishData.name]
  };
  const updatedRestaurants = [
    ...restaurants.slice(0, indexOfRestaurantToUpdate),
    updatedRestaurant,
    ...restaurants.slice(indexOfRestaurantToUpdate + 1)
  ];
  return updatedRestaurants;
};

const addRestaurant = (restaurants, newRestaurantName, lastInsertedId) => [
  ...restaurants,
  { name: newRestaurantName, dishes: [], id: lastInsertedId + 1 }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESTAURANT:
      return {
        ...state,
        restaurants: addRestaurant(
          state.restaurants,
          action.payload,
          state.lastInsertedId
        ),
        lastInsertedId: state.lastInsertedId + 1
      };
    case ADD_DISH:
      return {
        ...state,
        restaurants: addDish(state.restaurants, action.payload)
      };
    default:
      return state;
  }
};
