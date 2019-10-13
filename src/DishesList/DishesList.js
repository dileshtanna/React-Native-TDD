import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const DishesList = ({ dishes }) => {
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem title={item} bottomDivider chevron />
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={dishes}
      renderItem={renderItem}
    />
  );
};

export default DishesList;
