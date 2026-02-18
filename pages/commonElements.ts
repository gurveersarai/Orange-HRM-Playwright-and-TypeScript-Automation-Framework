import {Page, Locator} from "@playwright/test";

export default class commonElements {
    page: Page;
    userDropdown: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userDropdown = page.locator(".oxd-userdropdown-name");
        this.loginButton = page.locator("a[href*='logout']");
    }
}