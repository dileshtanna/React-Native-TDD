import * as actions from "../../src/actions/restaurants";
import { ADD_RESTAURANT, ADD_DISH } from "../../src/actions/Types";

describe("Restaurant Actions", () => {
  describe("Add Restaurants", () => {
    it("should dispatch an action with type as ADD_RESTAURANT and payload as the name of the new restaurant", () => {
      const newRestaurantName = "Test Restaurant";
      const expectedAction = {
        type: ADD_RESTAURANT,
        payload: newRestaurantName
      };
      expect(actions.addRestaurant(newRestaurantName)).toEqual(expectedAction);
    });
  });

  describe("Add Dish", () => {
    const idOfRestaurant = 1;
    const newDishName = "Test Dish";
    const expectedAction = {
      type: ADD_DISH,
      payload: {
        id: idOfRestaurant,
        name: newDishName
      }
    };
    expect(actions.addDish(idOfRestaurant, newDishName)).toEqual(
      expectedAction
    );
  });
});
