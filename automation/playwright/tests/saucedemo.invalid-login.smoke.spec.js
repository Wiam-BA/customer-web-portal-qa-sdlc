const { test, expect } = require("@playwright/test");

test("SauceDemo smoke: invalid login shows error @smoke", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Intentionally invalid credentials
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("wrong_password");
  await page.locator("#login-button").click();

  // Verify error message and that we stay on login page
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page).toHaveURL(/saucedemo\.com\/?$/);
});