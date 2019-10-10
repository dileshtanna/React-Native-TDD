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
