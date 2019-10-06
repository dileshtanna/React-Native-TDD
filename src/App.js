import React, { Component } from "react";
import { Text, View } from "react-native";
import Restaurants from "./Restaurants/Restaurants";

export default class App extends Component {
  render() {
    return (
      <View>
        <Restaurants />
      </View>
    );
  }
}
