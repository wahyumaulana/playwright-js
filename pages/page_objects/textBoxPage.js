const { expect } = require('@playwright/test');

exports.TextBoxPage = class TextBoxPage {

  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.url = process.env['URL'] + '/text-box';
    this.username_field = '#userName';
    this.email_field = '#userEmail';
    this.current_address_field = '#currentAddress';
    this.permanent_address_field = '#permanentAddress';
    this.submit_button = '#submit';
    this.name = '#name';
    this.email = '#email';
    this.current_address = 'p#currentAddress';
    this.permanent_address = 'p#permanentAddress';
  }

  async navigateToTextBoxPage() {
    await this.page.goto(this.url, {waitUntil:"domcontentloaded"});
  }

  async validateInTexBoxPage(){
    await expect(this.page.locator(this.username_field)).toBeVisible();
    await expect(this.page.locator(this.email_field)).toBeVisible();
    await expect(this.page.locator(this.current_address_field)).toBeVisible();
    await expect(this.page.locator(this.permanent_address_field)).toBeVisible();
    await expect(this.page.locator(this.submit_button)).toBeVisible();
  }

  async enterTextInTextBox(name, email, currentAddress, permanentAddress) {
    await this.page.locator(this.username_field).fill(name);
    await this.page.locator(this.email_field).fill(email);
    await this.page.locator(this.current_address_field).fill(currentAddress);
    await this.page.locator(this.permanent_address_field).fill(permanentAddress);
  }

  async clickSubmitButton() {
    await this.page.locator(this.submit_button).click();
  }

  async verifyOutput(name, email, currentAddress, permanentAddress) {
    const outputName = await this.page.locator(this.name).textContent();
    const outputEmail = await this.page.locator(this.email).textContent();
    const outputCurrentAddreess = await this.page.locator(this.current_address).textContent();
    const outputPermanentAddress = await this.page.locator(this.permanent_address).textContent();
  
    expect(outputName.trim()).toBe(`Name:${name}`);
    expect(outputEmail.trim()).toBe(`Email:${email}`);
    expect(outputCurrentAddreess.trim()).toBe(`Current Address :${currentAddress}`);
    expect(outputPermanentAddress.trim()).toBe(`Permananet Address :${permanentAddress}`);
  }
}