import React, { Component } from "react";
import { TextInput, View, Modal, Button } from "react-native";

export default class AddRestaurantModal extends Component {
  state = {
    restaurantName: ""
  };
  handleTextChange = val => {
    this.setState({ restaurantName: val });
  };
  render() {
    return (
      <Modal visible={this.props.visible}>
        <View>
          <TextInput
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
      </Modal>
    );
  }
}
