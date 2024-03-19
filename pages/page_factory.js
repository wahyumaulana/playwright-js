const { HomePage } = require('./page_objects/homePage');

exports.PageFactory = class PageFactory {

  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page){
    this.page = page 
    this.homePage = new HomePage(page);
  }

  getHomePage(){
    return this.homePage
  }
}