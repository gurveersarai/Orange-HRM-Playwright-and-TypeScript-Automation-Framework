import {Page, Locator} from "@playwright/test";

export default class dashboardPage {
    page: Page;
    navigationPanel: Locator;
    clientLogo: Locator;
    mainMenuButton: Locator;
    dashboardWidgets: Locator;
    constructor(page: Page) {
        this.page = page;
        this.navigationPanel = page.locator(".oxd-sidepanel");
        this.clientLogo = page.locator(".oxd-brand-banner");
        this.mainMenuButton = page.locator(".oxd-main-menu-button");
        this.dashboardWidgets = page.locator(".oxd-sheet");
    }

    async dashboardWidgetsCountandNames() {
        const count = await this.dashboardWidgets.count();
        const names = [];
        for (let i = 0; i < count; i++) {
            const name = await this.dashboardWidgets.nth(i).locator(".orangehrm-dashboard-widget-name").textContent();
            if (name) {
                names.push(name.trim());
            }
        }
        return { count, names };
    }
}