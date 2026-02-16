import {Page, Locator} from "@playwright/test";
import loginPage from "./loginPage";
export default class poManager {
    page: Page;
    loginPage: loginPage;
    constructor(page: Page) {
        this.page = page;
        this.loginPage = new loginPage(page);
    }
}
