import {Page, Locator} from "@playwright/test";

export default class commonElements {
    page: Page;
    userDropdown: Locator;
    logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userDropdown = page.locator(".oxd-userdropdown-name");
        this.logoutButton = page.locator("a[href*='logout']");
    }
}