const { expect } = require('@playwright/test');

exports.ElementPage = class ElementPage {

  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.url = process.env['URL'] + '/elements';
  }

  async navigateToElementsPage() {
    await this.page.goto(this.url, {waitUntil:"domcontentloaded"});
  }

  async navigateToElementsMenuLists(menu_name){
    // using filter locator by text
    await this.page.locator('li').filter({ hasText: menu_name }).click();
  }
}
