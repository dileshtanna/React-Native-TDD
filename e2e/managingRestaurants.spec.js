describe("Managing Restaurants", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should create a restaurant", async () => {
    const restaurantName = "Chinese Restaurant";
    await expect(element(by.id("addNewRestaurantButton"))).toBeVisible();
    await expect(element(by.id("reataurantNameField"))).toBeNotVisible();
    await element(by.id("addNewRestaurantButton")).tap();
    await expect(element(by.id("addNewRestaurantButton"))).toBeNotVisible();
    await expect(element(by.id("reataurantNameField"))).toBeVisible();
    await expect(element(by.id("submitRestaurant"))).toBeVisible();
    await element(by.id("reataurantNameField")).typeText(restaurantName);
    await element(by.id("submitRestaurant")).tap();
    await expect(element(by.id("reataurantNameField"))).toBeNotVisible();
    await expect(element(by.id("addNewRestaurantButton"))).toBeVisible();
    await expect(element(by.text(restaurantName))).toBeVisible();
  });
  it("should not create a restaurant and hide the modal", async () => {
    const restaurantName = "Indian Restaurant";
    await expect(element(by.id("addNewRestaurantButton"))).toBeVisible();
    await expect(element(by.id("reataurantNameField"))).toBeNotVisible();
    await element(by.id("addNewRestaurantButton")).tap();
    await expect(element(by.id("addNewRestaurantButton"))).toBeNotVisible();
    await expect(element(by.id("reataurantNameField"))).toBeVisible();
    await expect(element(by.id("cancel"))).toBeVisible();
    await element(by.id("reataurantNameField")).typeText(restaurantName);
    await element(by.id("cancel")).tap();
    await expect(element(by.id("reataurantNameField"))).toBeNotVisible();
    await expect(element(by.id("addNewRestaurantButton"))).toBeVisible();
    await expect(element(by.text(restaurantName))).toBeNotVisible();
  });
});
