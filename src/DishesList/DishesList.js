import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

export default class DishesList extends Component {
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => <ListItem title={item} bottomDivider chevron />;
  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.dishes}
        renderItem={this.renderItem}
      />
    );
  }
}
