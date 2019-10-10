import RestaurantsScreen from "./Restaurants/Restaurants";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  Home: {
    screen: RestaurantsScreen
  }
});

export default createAppContainer(AppNavigator);
