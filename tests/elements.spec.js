const {test} = require('@playwright/test');
const {PageFactory} = require('../pages/page_factory');

test.describe.configure({ mode: 'parallel' });

let pf, homePage, elementPage, textBoxPage;

test.beforeEach( async ( {page} )=>
{
    pf = new PageFactory(page);
    homePage = pf.getHomePage();
    textBoxPage = pf.getTextBoxPage();
    elementPage = pf.getElementPage();

    // Precondition : Navigate from Homepage to Element Pages first
    await homePage.navigateToHomePage();
    await homePage.validateHomePage();
    await homePage.openElementsMenu();

    // Directly via access to elements Page URL
    // await elementPage.navigateToElementsPage();
    
});

test('Verify Text Box functionality', async () => {
    const user = {name:'John Doe', email:'johndoe@example.com', current_address:'Current Address', permanent_address:'Permanent Address'}

    // Navigate to Text Box Page
    await elementPage.navigateToElementsMenuLists('Text Box');
    // Validate already in Text Box Page
    await textBoxPage.validateInTexBoxPage();
    // Enter text in the text boxes
    await textBoxPage.enterTextInTextBox(user.name, user.email, user.current_address, user.permanent_address);
    // Click the Submit button
    await textBoxPage.clickSubmitButton();
    // Verify the entered values
    await textBoxPage.verifyOutput(user.name,user.email,user.current_address, user.permanent_address);
  });
  