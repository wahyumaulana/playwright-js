# playwright-js
This is a test automation framework designed using Playwright and JavaScript. implementing the [Page Object Model (POM) design pattern](https://playwright.dev/docs/test-pom).
The framework aims to provide a structured and maintainable approach to automated testing of web applications.
The Example for this project is to test the [DemoQA](https://demoqa.com) website.

## Features
- Utilizes Playwright, a powerful automation library for web testing.
- Implements the Page Object Model for better code organization and maintainability.
- Supports writing tests in JavaScript.
- Easily extensible and customizable for various testing needs.

## Getting started

### Pre-requisites
* Download and install Node.js 
* Download and install any Text Editor like Visual Studio Code (Recommended) / Sublime / Brackets

### Install
* Install project dependencies
```sh
$ npm install
```

```sh
$ npx playwright install
```

### How to write Test
* Add new spec under `tests` folder and name the file as <testname>.spec.js (e.g. login.spec.js)
* Add page object file under `pages/pages_objects` folder and name the file as <page-name>.js (e.g. loginPage.js)
* Declare the page object in `pages_factory.js`


### Run
You can run your tests with the `playwright test command`. This will run your tests on all browsers as configured in the `playwright.config` file.

```sh
$ npx playwright test
```
To specify which browser you would like to run your tests on, use the `--project` flag followed by the name of the browser.
```sh
$ npx playwright test --project chromium
```
By default and are run in a headless manner, meaning no browser window will be opened. To run your tests in headed mode, use the `--headed` flag. This will give you the ability to visually see how Playwright interacts with the website.
```sh
$ npx playwright test --headed
```
Using test `@tag` strategy will help to run a test with a specific tag that we define on **test title**, use the `-g` flag followed by the `@tag`of the test.
```sh
$ npx playwright test -g "@tag-1"
```

### Report
After your test completes, an [HTML Reporter](https://playwright.dev/docs/intro#html-test-reports) will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests.
```sh
$ npx playwright show-report 
```
