import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";
import AddDishModal from "../AddDishModal/AddDishModal";
import DishesList from "../DishesList/DishesList";

export default class Dishes extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.restaurant.name
  });
  state = {
    addDishModalVisibility: false,
    dishes: []
  };
  componentDidMount() {
    this.setState({
      dishes: this.props.navigation.state.params.restaurant.dishes
    });
  }
  toggleAddDishModal = () => {
    this.setState({ addDishModalVisibility: true });
  };
  handleDishSave = newDishName => {
    this.props.navigation.state.params.onSaveDish(
      this.props.navigation.state.params.restaurant.id,
      newDishName
    );
    this.setState(prevState => ({
      ...prevState,
      dishes: [...prevState.dishes, newDishName],
      addDishModalVisibility: false
    }));
  };
  onCancel = () => {
    this.setState({ addDishModalVisibility: false });
  };
  render() {
    return (
      <View style={{ margin: 20 }}>
        <Button
          title="Add New Dish"
          onPress={this.toggleAddDishModal}
          testID="addNewDishButton"
        />
        <AddDishModal
          dishes={this.state.dishes}
          onCancel={this.onCancel}
          onSaveDish={this.handleDishSave}
          visible={this.state.addDishModalVisibility}
        />
        <DishesList dishes={this.state.dishes} />
      </View>
    );
  }
}
