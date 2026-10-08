import { test, expect } from '@playwright/test';
import Login from '../Pages/LoginPage';

test("Check login", async ({ page }) => {
    const login = new Login(page);
    await login.load();
    const main = await login.login();

    await main.verifyLogin();
});