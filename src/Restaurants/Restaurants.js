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
    id: 1,
    addRestaurantModalVisible: false,
    restaurants: []
  };
  toggleAddRestaurantModal = () => {
    this.setState({
      addRestaurantModalVisible: true
    });
  };
  onSaveRestaurant = newRestaurantName => {
    newRestaurant = {
      id: this.state.id,
      name: newRestaurantName,
      dishes: []
    };
    this.setState(prevState => ({
      ...prevState,
      restaurants: [...prevState.restaurants, newRestaurant],
      addRestaurantModalVisible: false,
      id: prevState.id + 1
    }));
  };
  onSaveDish = (id, newDishName) => {
    let indexOfRestaurantToUpdate = this.state.restaurants.findIndex(
      restaurant => restaurant.id === id
    );
    let updatedRestaurant = {
      ...this.state.restaurants[indexOfRestaurantToUpdate],
      dishes: [
        ...this.state.restaurants[indexOfRestaurantToUpdate].dishes,
        newDishName
      ]
    };
    this.setState(prevState => ({
      ...prevState,
      restaurants: [
        ...prevState.restaurants.slice(0, indexOfRestaurantToUpdate),
        updatedRestaurant,
        ...prevState.restaurants.slice(indexOfRestaurantToUpdate + 1)
      ]
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
        <RestaurantList
          onSaveDish={this.onSaveDish}
          navigation={this.props.navigation}
          restaurants={this.state.restaurants}
        />
      </View>
    );
  }
}
