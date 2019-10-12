import React, { Component } from "react";
import { View } from "react-native";
import AddRestaurantModal from "../AddRestaurantModal/AddRestaurantModal";
import RestaurantList from "../RestaurantList/RestaurantList";
import { Button, Text } from "react-native-elements";

export default class Restaurants extends Component {
  static navigationOptions = {
    headerTitleStyle: { textAlign: "center" },
    title: "Restaurants"
  };
  state = {
    addRestaurantModalVisible: false,
    restaurants: []
  };
  toggleAddRestaurantModal = () => {
    this.setState({
      addRestaurantModalVisible: !this.state.addRestaurantModalVisible
    });
  };
  onSaveRestaurant = newRestaurantName => {
    if (this.state.restaurants.includes(newRestaurantName)) return;
    this.setState(prevState => ({
      ...prevState,
      restaurants: [...prevState.restaurants, newRestaurantName],
      addRestaurantModalVisible: false
    }));
  };
  onCancel = () => {
    this.setState({ addRestaurantModalVisible: false });
  };
  render() {
    return (
      <View style={{ margin: 20 }}>
        <Button
          onPress={this.toggleAddRestaurantModal}
          testID="addNewRestaurantButton"
          title="Add New Restaurant"
        />
        <AddRestaurantModal
          restaurants={this.state.restaurants}
          onCancel={this.onCancel}
          onSaveRestaurant={this.onSaveRestaurant}
          visible={this.state.addRestaurantModalVisible}
        />
        <RestaurantList restaurants={this.state.restaurants} />
      </View>
    );
  }
}
