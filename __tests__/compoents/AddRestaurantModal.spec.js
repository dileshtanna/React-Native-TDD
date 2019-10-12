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
        <AddRestaurantModal
          restaurants={[]}
          onSaveRestaurant={onSaveRestaurant}
        />
      );
      wrapper
        .findWhere(testID("reataurantNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("submitRestaurant")).simulate("press");
    });
    it("should clear the text field after saving", () => {
      expect(
        wrapper.findWhere(testID("reataurantNameField")).props().value
      ).toEqual("");
    });
    it("should not have an error message", () => {
      expect(
        wrapper.findWhere(testID("reataurantNameField")).props().errorMessage
      ).toEqual("");
    });
    it("calls the onSaveRestaurant handler with the entered text", () => {
      expect(onSaveRestaurant).toHaveBeenCalledWith(messageText);
    });
  });

  describe("Upon Cancel", () => {
    const onCancel = jest.fn();
    const messageText = "Hello, World!";
    beforeAll(() => {
      wrapper = shallow(<AddRestaurantModal onCancel={onCancel} />);
      wrapper
        .findWhere(testID("reataurantNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("cancel")).simulate("press");
    });

    it("should clear the text field after pressing cancel", () => {
      expect(
        wrapper.findWhere(testID("reataurantNameField")).props().value
      ).toEqual("");
    });
    it("should not have an error message", () => {
      expect(
        wrapper.findWhere(testID("reataurantNameField")).props().errorMessage
      ).toEqual("");
    });
    it("calls the onCancel handler", () => {
      expect(onCancel).toHaveBeenCalled();
    });
  });

  describe("Upon Invalid Input", () => {
    const onSaveRestaurant = jest.fn();
    const messageText = "";
    beforeAll(() => {
      wrapper = shallow(
        <AddRestaurantModal
          restaurants={[]}
          onSaveRestaurant={onSaveRestaurant}
        />
      );
      wrapper
        .findWhere(testID("reataurantNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("submitRestaurant")).simulate("press");
    });
    it("should have an error message", () => {
      expect(
        wrapper.findWhere(testID("reataurantNameField")).props().errorMessage
      ).toEqual("Restaurant name is required.");
    });

    it("should not call the onSaveRestaurant handler with the entered text", () => {
      expect(onSaveRestaurant).not.toHaveBeenCalled();
    });
  });

  describe("Upon Submit with already existing restaurant", () => {
    const onSaveRestaurant = jest.fn();
    const messageText = "Hello, World!";
    beforeAll(() => {
      wrapper = shallow(
        <AddRestaurantModal
          restaurants={[messageText]}
          onSaveRestaurant={onSaveRestaurant}
        />
      );
      wrapper
        .findWhere(testID("reataurantNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("submitRestaurant")).simulate("press");
    });
    it("should have an error message", () => {
      expect(
        wrapper.findWhere(testID("reataurantNameField")).props().errorMessage
      ).toEqual("Restaurant already exists.");
    });

    it("calls the onSaveRestaurant handler with the entered text", () => {
      expect(onSaveRestaurant).not.toHaveBeenCalled();
    });
  });
});
