import { Page, Locator } from "@playwright/test";

export default class loginPage {
    page: Page;
    username: Locator;
    password: Locator;
    loginButton: Locator;
    errorMessage: Locator;
    fieldErrorMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("[name='username']");
        this.password = page.locator("[name='password']");
        this.loginButton = page.locator("//button[@type='submit']");
        this.errorMessage = page.locator(".oxd-alert-content-text")
        this.fieldErrorMessage = page.locator("[class*='error-message']")
}

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }


}