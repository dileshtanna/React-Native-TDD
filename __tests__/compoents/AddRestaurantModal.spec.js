import React from "react";
import { shallow } from "enzyme";
import AddRestaurantModal from "../../src/AddRestaurantModal/AddRestaurantModal";

describe("AddRestaurantModal", () => {
  const testID = id => cmp => cmp.props().testID === id;
  let wrapper;

  describe("Upon Submit", () => {
    const onSaveRestaurant = jest.fn();
    const messageText = "Hello, World!";
    beforeAll(() => {
      wrapper = shallow(
        <AddRestaurantModal onSaveRestaurant={onSaveRestaurant} />
      );
      wrapper
        .findWhere(testID("reataurantNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("submitRestaurant")).simulate("press");
    });

    it("calls the onSaveRestaurant handler with the entered text", () => {
      expect(onSaveRestaurant).toHaveBeenCalledWith(messageText);
    });

    it("should clear the text field after saving", () => {
      expect(
        wrapper.findWhere(testID("reataurantNameField")).props().value
      ).toEqual("");
    });
  });
});
``;
