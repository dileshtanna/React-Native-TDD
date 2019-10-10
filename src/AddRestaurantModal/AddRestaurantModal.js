import React, { Component } from "react";
import { View, Modal } from "react-native";
import { Button, Input, Text, Overlay } from "react-native-elements";

export default class AddRestaurantModal extends Component {
  state = {
    restaurantName: ""
  };
  handleTextChange = val => {
    this.setState({ restaurantName: val });
  };
  render() {
    return (
      <Overlay fullScreen={true} isVisible={this.props.visible}>
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
              onPress={() =>
                this.props.onSaveRestaurant(this.state.restaurantName)
              }
              testID="submitRestaurant"
              title="Submit"
            />
          </View>
        </View>
      </Overlay>
    );
  }
}
