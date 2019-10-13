import React, { Component } from "react";
import { View } from "react-native";
import AddRestaurantModal from "../AddRestaurantModal/AddRestaurantModal";
import RestaurantList from "../RestaurantList/RestaurantList";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { addRestaurant } from "../actions/restaurants";

export class Restaurants extends Component {
  static navigationOptions = {
    headerTitleStyle: { textAlign: "center" },
    title: "Restaurants"
  };
  state = {
    addRestaurantModalVisible: false
  };
  toggleAddRestaurantModal = () => {
    this.setState({
      addRestaurantModalVisible: true
    });
  };
  onSaveRestaurant = newRestaurantName => {
    const { addRestaurant } = this.props;
    addRestaurant(newRestaurantName);
    this.setState({
      addRestaurantModalVisible: false
    });
  };
  onCancel = () => {
    this.setState({ addRestaurantModalVisible: false });
  };
  render() {
    const { restaurants, navigation } = this.props;
    const { addRestaurantModalVisible } = this.state;
    return (
      <View style={{ margin: 20 }}>
        <Button
          onPress={this.toggleAddRestaurantModal}
          testID="addNewRestaurantButton"
          title="Add New Restaurant"
        />
        <AddRestaurantModal
          restaurants={restaurants}
          onCancel={this.onCancel}
          onSaveRestaurant={this.onSaveRestaurant}
          visible={addRestaurantModalVisible}
        />
        <RestaurantList
          onSaveDish={this.onSaveDish}
          navigation={navigation}
          restaurants={restaurants}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurantsStore.restaurants
});

export default connect(
  mapStateToProps,
  { addRestaurant }
)(Restaurants);
