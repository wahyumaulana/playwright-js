const { HomePage } = require('./page_objects/homePage');
const { TextBoxPage } = require('./page_objects/textBoxPage');
const { ElementPage } = require('./page_objects/elementPage');

exports.PageFactory = class PageFactory {

  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page){
    this.page = page 
    this.homePage = new HomePage(page);
    this.textBoxPage = new TextBoxPage(page);
    this.elementPage = new ElementPage(page);
  }

  getHomePage(){
    return this.homePage
  }

  getTextBoxPage(){
    return this.textBoxPage
  }

  getElementPage(){
    return this.elementPage
  }
}