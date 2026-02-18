import {Page, Locator} from "@playwright/test";
import loginPage from "./loginPage";
import commonElements from "./commonElements";
export default class poManager {
    page: Page;
    loginPage: loginPage;
    commonElements: commonElements;
    constructor(page: Page) {
        this.page = page;
        this.loginPage = new loginPage(page);
        this.commonElements = new commonElements(page);
    }
}
