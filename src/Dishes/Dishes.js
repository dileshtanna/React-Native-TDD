import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import AddDishModal from "../AddDishModal/AddDishModal";
import DishesList from "../DishesList/DishesList";

import { connect } from "react-redux";
import { addDish } from "../actions/restaurants";
export class Dishes extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("restaurant").name
  });
  state = {
    addDishModalVisibility: false
  };
  toggleAddDishModal = () => {
    this.setState({ addDishModalVisibility: true });
  };
  handleDishSave = newDishName => {
    const { addDish, navigation } = this.props;
    const { id } = navigation.getParam("restaurant");
    addDish(id, newDishName);
    this.setState({
      addDishModalVisibility: false
    });
  };
  onCancel = () => {
    this.setState({ addDishModalVisibility: false });
  };
  render() {
    const { restaurants, navigation } = this.props;
    const { id } = navigation.getParam("restaurant");
    const restaurant = restaurants.find(rs => rs.id === id);
    const { dishes } = restaurant;
    const { addDishModalVisibility } = this.state;
    return (
      <View style={{ margin: 20 }}>
        <Button
          title="Add New Dish"
          onPress={this.toggleAddDishModal}
          testID="addNewDishButton"
        />
        <AddDishModal
          dishes={dishes}
          onCancel={this.onCancel}
          onSaveDish={this.handleDishSave}
          visible={addDishModalVisibility}
        />
        <DishesList dishes={dishes} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurantsStore.restaurants
});

export default connect(
  mapStateToProps,
  { addDish }
)(Dishes);
