import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Button, Input, Text, Overlay } from "react-native-elements";

export default class AddRestaurantModal extends Component {
  state = {
    restaurantName: "",
    errorMessage: ""
  };
  handleTextChange = restaurantName => {
    this.setState({ restaurantName });
  };
  handleOnSave = () => {
    const { restaurantName } = this.state;
    const { onSaveRestaurant, restaurants } = this.props;

    if (restaurants.includes(restaurantName))
      return this.setState({ errorMessage: "Restaurant already exists." });
    else if (restaurantName === "")
      return this.setState({ errorMessage: "Restaurant name is required." });
    else {
      onSaveRestaurant(restaurantName);
      this.setState({ restaurantName: "", errorMessage: "" });
    }
  };
  handkeOnCancel = () => {
    this.props.onCancel();
    this.setState({ restaurantName: "", errorMessage: "" });
  };
  render() {
    return (
      <Overlay
        animationType="slide"
        fullScreen={true}
        isVisible={this.props.visible}
      >
        <View style={{ padding: 20 }}>
          <Text h3>Add Restaurant</Text>
          <View>
            <Input
              autoFocus={true}
              label="Restaurant Name"
              value={this.state.restaurantName}
              onChangeText={val => this.handleTextChange(val)}
              testID="reataurantNameField"
              errorMessage={this.state.errorMessage}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              onPress={this.handleOnSave}
              testID="submitRestaurant"
              title="Submit"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              onPress={this.handkeOnCancel}
              testID="cancel"
              title="Cancel"
            />
          </View>
        </View>
      </Overlay>
    );
  }
}
