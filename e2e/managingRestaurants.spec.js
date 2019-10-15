describe("Managing Restaurants", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should manage restaurants", async () => {
    const restaurantName = "Chinese Restaurant";
    await createRestaurant(restaurantName);
    await createDish(restaurantName);
  });

  const createRestaurant = async restaurantName => {
    await expect(element(by.id("addNewRestaurantButton"))).toBeVisible();
    await expect(element(by.id("reataurantNameField"))).toBeNotVisible();
    await element(by.id("addNewRestaurantButton")).tap();
    await expect(element(by.id("addNewRestaurantButton"))).toBeNotVisible();
    await expect(element(by.id("reataurantNameField"))).toBeVisible();
    await expect(element(by.id("submitRestaurant"))).toBeVisible();
    await expect(element(by.id("cancel"))).toBeVisible();
    await element(by.id("reataurantNameField")).typeText(restaurantName);
    await element(by.id("submitRestaurant")).tap();
    await expect(element(by.id("reataurantNameField"))).toBeNotVisible();
    await expect(element(by.id("addNewRestaurantButton"))).toBeVisible();
    await expect(element(by.text(restaurantName))).toBeVisible();
  };

  const createDish = async restaurantName => {
    const dishName = "Fried Rice";
    await element(by.text(restaurantName)).tap();
    await expect(element(by.id("addNewDishButton"))).toBeVisible();
    await element(by.id("addNewDishButton")).tap();
    await expect(element(by.id("dishNameField"))).toBeVisible();
    await expect(element(by.id("submitDish"))).toBeVisible();
    await expect(element(by.id("cancel"))).toBeVisible();
    await expect(element(by.id("addNewDishButton"))).toBeNotVisible();
    await element(by.id("dishNameField")).typeText(dishName);
    await element(by.id("submitDish")).tap();
    await expect(element(by.id("dishNameField"))).toBeNotVisible();
    await expect(element(by.id("addNewDishButton"))).toBeVisible();
    await expect(element(by.text(dishName))).toBeVisible();
  };
});
