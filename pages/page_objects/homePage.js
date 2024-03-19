const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = process.env['URL'];

    // defined by static locator with css selector
    this.image_title = 'header > a > img';
    // defined with built-in locator functions
    this.elements_menu = page.getByRole('heading', { name: 'Elements' });
    this.forms_menu = page.getByRole('heading', { name: 'Forms' });
    this.alert_frame_window_menu = page.getByRole('heading', { name: 'Alerts, Frame & Windows' });
    this.widget_menu = page.getByRole('heading', { name: 'Widgets' });
    this.interaction_menu = page.getByRole('heading', { name: 'Interactions' });
    this.books_app_menu = page.getByRole('heading', { name: 'Book Store Application' });
  }

  async navigateToHomePage() {
    await this.page.goto(this.url, {waitUntil:"domcontentloaded"});
  }

  async validateHomePage(){
    await this.page.waitForSelector(this.image_title);
    await expect(this.page.locator(this.image_title)).toBeVisible();
    await expect(this.elements_menu).toBeVisible();
    await expect(this.forms_menu).toBeVisible();
    await expect(this.alert_frame_window_menu).toBeVisible();
    await expect(this.widget_menu).toBeVisible();
    await expect(this.interaction_menu).toBeVisible();
    await expect(this.books_app_menu).toBeVisible();
  }

}

