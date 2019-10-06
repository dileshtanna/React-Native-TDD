import React, { Component } from "react";
import { FlatList, Text } from "react-native";

export default class RestaurantList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.restaurantNames}
        keyExtractor={item => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    );
  }
}
