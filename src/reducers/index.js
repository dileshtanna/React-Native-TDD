import { combineReducers } from "redux";
import restaurants from "./restaurants";
const rootReducer = combineReducers({
  restaurantsStore: restaurants
});

export default rootReducer;
