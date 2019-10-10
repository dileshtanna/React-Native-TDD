import React, { Component } from "react";
import { View, Modal } from "react-native";
import { Button, Input, Text, Overlay } from "react-native-elements";

export default class AddRestaurantModal extends Component {
  state = {
    restaurantName: ""
  };
  handleTextChange = restaurantName => {
    this.setState({ restaurantName });
  };
  handleOnSave = () => {
    this.props.onSaveRestaurant(this.state.restaurantName);
    this.setState({ restaurantName: "" });
  };
  render() {
    return (
      <Overlay
        animationType="slide"
        fullScreen={true}
        isVisible={this.props.visible}
      >
        <View>
          <Text h3>Add Restaurant</Text>
          <View>
            <Input
              label="Restaurant Name"
              value={this.state.restaurantName}
              onChangeText={val => this.handleTextChange(val)}
              testID="reataurantNameField"
            />
          </View>
          <View>
            <Button
              onPress={this.handleOnSave}
              testID="submitRestaurant"
              title="Submit"
            />
          </View>
        </View>
      </Overlay>
    );
  }
}
