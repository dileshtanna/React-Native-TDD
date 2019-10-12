import React from "react";
import { shallow } from "enzyme";
import AddDishModal from "../../src/AddDishModal/AddDishModal";

describe("Add Dish Modal", () => {
  const testID = id => cmp => cmp.props().testID === id;
  let wrapper;

  describe("Upon Submit", () => {
    const onSaveDish = jest.fn();
    const messageText = "Hello, World!";
    beforeAll(() => {
      wrapper = shallow(<AddDishModal dishes={[]} onSaveDish={onSaveDish} />);
      wrapper
        .findWhere(testID("dishNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("submitDish")).simulate("press");
    });

    it("should call the onSaveDish handler with the entered text", () => {
      expect(onSaveDish).toHaveBeenCalledWith(messageText);
    });
    it("should not have an error message", () => {
      expect(
        wrapper.findWhere(testID("dishNameField")).props().errorMessage
      ).toEqual("");
    });
    it("should clear the text field", () => {
      expect(wrapper.findWhere(testID("dishNameField")).props().value).toEqual(
        ""
      );
    });
  });

  describe("Upon Cancel", () => {
    const onCancel = jest.fn();
    const messageText = "Hello, World!";
    beforeAll(() => {
      wrapper = shallow(<AddDishModal dishes={[]} onCancel={onCancel} />);
      wrapper
        .findWhere(testID("dishNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("cancel")).simulate("press");
    });

    it("should clear the text field", () => {
      expect(wrapper.findWhere(testID("dishNameField")).props().value).toEqual(
        ""
      );
    });
    it("should not have an error message", () => {
      expect(
        wrapper.findWhere(testID("dishNameField")).props().errorMessage
      ).toEqual("");
    });
    it("calls the onCancel handler", () => {
      expect(onCancel).toHaveBeenCalled();
    });
  });

  describe("Upon Invalid Input", () => {
    const onSaveDish = jest.fn();
    const messageText = "";
    beforeAll(() => {
      wrapper = shallow(<AddDishModal dishes={[]} onSaveDish={onSaveDish} />);
      wrapper
        .findWhere(testID("dishNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("submitDish")).simulate("press");
    });
    it("should have an error message", () => {
      expect(
        wrapper.findWhere(testID("dishNameField")).props().errorMessage
      ).toEqual("Dish name is required.");
    });
    it("should not call the onSaveDish handler with the entered text", () => {
      expect(onSaveDish).not.toHaveBeenCalled();
    });
  });

  describe("Upon Submit with dish already existing", () => {
    const onSaveDish = jest.fn();
    const messageText = "Hello, World";
    beforeAll(() => {
      wrapper = shallow(
        <AddDishModal dishes={[messageText]} onSaveDish={onSaveDish} />
      );
      wrapper
        .findWhere(testID("dishNameField"))
        .simulate("changeText", messageText);
      wrapper.findWhere(testID("submitDish")).simulate("press");
    });
    it("should have an error message", () => {
      expect(
        wrapper.findWhere(testID("dishNameField")).props().errorMessage
      ).toEqual("Dish already exists.");
    });

    it("should not call the onSaveDish handler with the entered text", () => {
      expect(onSaveDish).not.toHaveBeenCalled();
    });
  });
});
