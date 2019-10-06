describe("Managing Restaurants", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    const restaurantName = "Chinese Restaurant";
    await expect(element(by.id("addNewRestaurantButton"))).toBeVisible();
    await expect(element(by.id("reataurantNameField"))).toBeNotVisible();
    await element(by.id("addNewRestaurantButton")).tap();
    await expect(element(by.id("addNewRestaurantButton"))).toBeNotVisible();
    await expect(element(by.id("reataurantNameField"))).toBeVisible();
    await element(by.id("reataurantNameField")).typeText(restaurantName);
    await element(by.id("submitRestaurant")).tap();
    await expect(element(by.id("reataurantNameField"))).toBeNotVisible();
    await expect(element(by.id("addNewRestaurantButton"))).toBeVisible();
    await expect(element(by.text(restaurantName))).toBeVisible();
  });
});
