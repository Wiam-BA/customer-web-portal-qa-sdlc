const { test, expect } = require("@playwright/test");

test("SauceDemo smoke: login and add item to cart @smoke", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Login (public demo credentials)
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  // Verify login success
  await expect(page).toHaveURL(/inventory/);

  // Add first item to cart
  await page.locator("button:has-text('Add to cart')").first().click();

  // Go to cart
  await page.locator(".shopping_cart_link").click();
  await expect(page).toHaveURL(/cart/);

  // Verify cart has at least one item
  await expect(page.locator(".cart_item").first()).toBeVisible();
});
