import Root from "./Root";
import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Restaurants from "./Restaurants/Restaurants";
import Dishes from "./Dishes/Dishes";

const AppNavigator = createStackNavigator({
  RestaurantsScreen: {
    screen: Restaurants
  },
  DishesScreen: {
    screen: Dishes
  }
});
let Navigation = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return (
      <Root>
        <Navigation />
      </Root>
    );
  }
}
