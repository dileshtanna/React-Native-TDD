import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

export default class RestaurantList extends Component {
  keyExtractor = item => item.id.toString();
  handleRestaurantPress = item => {
    this.props.navigation.navigate("DishesScreen", {
      restaurant: item,
      onSaveDish: this.props.onSaveDish
    });
  };
  renderItem = ({ item }) => (
    <ListItem
      onPress={() => this.handleRestaurantPress(item)}
      title={item.name}
      bottomDivider
      chevron
    />
  );
  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.restaurants}
        renderItem={this.renderItem}
      />
    );
  }
}
