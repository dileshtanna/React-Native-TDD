import React from "react";
import { shallow } from "enzyme";
import AddRestaurantModal from "../../src/AddRestaurantModal/AddRestaurantModal";

describe("AddRestaurantModal", () => {
  const testID = id => cmp => cmp.props().testID === id;
  const onSaveRestaurant = jest.fn();
  it("calls the onSaveRestaurant handler with the entered text", () => {
    const messageText = "Hello, World!";
    const wrapper = shallow(
      <AddRestaurantModal onSaveRestaurant={onSaveRestaurant} />
    );
    wrapper
      .findWhere(testID("reataurantNameField"))
      .simulate("changeText", messageText);
    wrapper.findWhere(testID("submitRestaurant")).simulate("press");
    expect(onSaveRestaurant).toHaveBeenCalledWith(messageText);
  });
});
