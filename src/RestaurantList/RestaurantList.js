import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const RestaurantList = ({ restaurants, navigation, onSaveDish }) => {
  const keyExtractor = item => item.id.toString();
  const handleRestaurantPress = item => {
    navigation.navigate("DishesScreen", {
      restaurant: item,
      onSaveDish
    });
  };
  renderItem = ({ item }) => (
    <ListItem
      onPress={() => handleRestaurantPress(item)}
      title={item.name}
      bottomDivider
      chevron
    />
  );
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={restaurants}
      renderItem={renderItem}
    />
  );
};

export default RestaurantList;
