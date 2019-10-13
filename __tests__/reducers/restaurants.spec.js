import restaurants from "../../src/reducers/restaurants";
import { ADD_RESTAURANT, ADD_DISH } from "../../src/actions/Types";

describe("Restaurants Reducer", () => {
  describe("ADD_RESTAURANT case", () => {
    it("should return the state with a new restaurant object when the store is in the initial state", () => {
      const newRestaurant = "Test Restaurant";

      const action = {
        type: ADD_RESTAURANT,
        payload: newRestaurant
      };
      const returnedStore = restaurants(undefined, action);
      const expectedStore = {
        restaurants: [{ name: newRestaurant, dishes: [], id: 1 }],
        lastInsertedId: 1
      };

      expect(returnedStore).toEqual(expectedStore);
    });

    it("should return the state with a new restaurant object when the store is not in the initial state", () => {
      const state = {
        lastInsertedId: 1,
        restaurants: [{ name: "Test Restaurant", dishes: [], id: 1 }]
      };
      const newRestaurant = "Test Restaurant 2";

      const action = {
        type: ADD_RESTAURANT,
        payload: newRestaurant
      };
      const returnedStore = restaurants(state, action);
      const expectedStore = {
        restaurants: [
          state.restaurants[0],
          { name: newRestaurant, dishes: [], id: 2 }
        ],
        lastInsertedId: 2
      };

      expect(returnedStore).toEqual(expectedStore);
    });
  });

  describe("Add Dish Case", () => {
    it("should return the state with the updated restaurant having the new dish", () => {
      const state = {
        lastInsertedId: 1,
        restaurants: [{ name: "Test Restaurant", id: 1, dishes: [] }]
      };
      const action = {
        type: ADD_DISH,
        payload: {
          name: "Test Dish",
          id: 1
        }
      };

      const returnedStore = restaurants(state, action);
      const expectedStore = {
        lastInsertedId: 1,
        restaurants: [
          { name: "Test Restaurant", id: 1, dishes: [action.payload.name] }
        ]
      };
      expect(returnedStore).toEqual(expectedStore);
    });

    it("should return the initialState as it is if there is no restaurant with the given id", () => {
      const state = {
        lastInsertedId: 1,
        restaurants: [{ name: "Test Restaurant", id: 1, dishes: [] }]
      };
      const action = {
        type: ADD_DISH,
        payload: {
          name: "Test Dish",
          id: 2
        }
      };

      const returnedStore = restaurants(state, action);
      expect(returnedStore).toEqual(state);
    });
  });

  describe("Default case", () => {
    it("should return the state as it is", () => {
      initialState = { lastInsertedId: 0, restaurants: [] };
      action = {};
      const returnedStore = restaurants(initialState, action);
      expect(returnedStore).toEqual(initialState);
    });
  });
});
