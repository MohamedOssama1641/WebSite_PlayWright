import { Page } from "@playwright/test";
import MainPage from "./MainPage";

export default class Login {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get usernameInput() {
        return this.page.locator('#user-name');
    }

    private get passwordInput() {
        return this.page.locator('#password');
    }

    private get submitButton() {
        return this.page.locator('#login-button');
    }

    async load(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(): Promise<MainPage> {
        await this.usernameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.submitButton.click();
        return new MainPage(this.page);
    }
}