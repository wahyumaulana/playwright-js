const {test} = require('@playwright/test');
const {PageFactory} = require('./../pages/page_factory');

test.describe.configure({ mode: 'parallel' });

let pf, homePage;

test.beforeEach( async ( {page} )=>
{
    pf = new PageFactory(page);
    homePage = pf.getHomePage();
});

test('( Navigate to DemoQA website (tags: @test-1 )', async ({page})=>
{
    await homePage.navigateToHomePage();
    await homePage.validateHomePage();
});