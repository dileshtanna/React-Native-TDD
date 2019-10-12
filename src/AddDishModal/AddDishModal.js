import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Button, Input, Text, Overlay } from "react-native-elements";

export default class AddDishModal extends Component {
  state = {
    dishName: "",
    errorMessage: ""
  };
  handleTextChange = dishName => {
    this.setState({ dishName });
  };
  handleOnSave = () => {
    const { dishName } = this.state;
    const { onSaveDish, dishes } = this.props;

    if (dishes.includes(dishName))
      return this.setState({ errorMessage: "Dish already exists." });
    if (dishName === "")
      return this.setState({ errorMessage: "Dish name is required." });
    onSaveDish(dishName);
    this.setState({ dishName: "" });
  };
  handkeOnCancel = () => {
    this.props.onCancel();
    this.setState({ dishName: "", errorMessage: "" });
  };
  render() {
    return (
      <Overlay
        animationType="slide"
        fullScreen={true}
        isVisible={this.props.visible}
      >
        <View style={{ padding: 20 }}>
          <Text h3>Add Dish</Text>
          <View>
            <Input
              autoFocus={true}
              label="Dish Name"
              value={this.state.dishName}
              onChangeText={val => this.handleTextChange(val)}
              testID="dishNameField"
              errorMessage={this.state.errorMessage}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              onPress={this.handleOnSave}
              testID="submitDish"
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
