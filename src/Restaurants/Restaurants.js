import React, { Component } from "react";
import { Button, View } from "react-native";
import AddRestaurantModal from "../AddRestaurantModal/AddRestaurantModal";
import RestaurantList from "../RestaurantList/RestaurantList";

export default class Restaurants extends Component {
  state = {
    addRestaurantModalVisible: false,
    restaurantNames: []
  };
  toggleAddRestaurantModal = () => {
    this.setState({
      addRestaurantModalVisible: !this.state.addRestaurantModalVisible
    });
  };
  onSaveRestaurant = newRestaurantName => {
    this.setState(prevState => ({
      ...prevState,
      restaurantNames: [...prevState.restaurantNames, newRestaurantName],
      addRestaurantModalVisible: false
    }));
  };
  render() {
    return (
      <View>
        <Button
          onPress={this.toggleAddRestaurantModal}
          testID="addNewRestaurantButton"
          title="Add New Restaurant`"
        />
        <AddRestaurantModal
          onSaveRestaurant={this.onSaveRestaurant}
          visible={this.state.addRestaurantModalVisible}
        />
        <RestaurantList restaurantNames={this.state.restaurantNames} />
      </View>
    );
  }
}
