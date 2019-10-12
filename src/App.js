import Restaurants from "./Restaurants/Restaurants";
import Dishes from "./Dishes/Dishes";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  RestaurantsScreen: {
    screen: Restaurants
  },
  DishesScreen: {
    screen: Dishes
  }
});

export default createAppContainer(AppNavigator);
