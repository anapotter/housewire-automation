# Houswire Automation Testing Framework

Automated testing framework for www.houswire.com using Playwright + TypeScript with Cucumber (Gherkin).

## Overview

This project provides comprehensive end-to-end testing for the Houswire real estate website. It includes:
- **Sanity Tests**: Critical path tests for quick smoke testing (5 scenarios)
- **Regression Tests**: Comprehensive feature coverage (50+ scenarios)
- **BDD Framework**: Gherkin syntax for readable test scenarios
- **Page Object Model**: Maintainable and reusable page objects
- **CI/CD Integration**: GitHub Actions workflows for automated testing

## Technology Stack

- **Playwright**: Modern browser automation framework
- **TypeScript**: Type-safe test development
- **Cucumber**: BDD framework with Gherkin syntax
- **Node.js**: JavaScript runtime environment

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 20.x, 22.x, or 24.x
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm**: Comes with Node.js
  - Verify installation: `npm --version`
- **Java**: Required for Allure reporting (JDK 8 or higher)
  - **macOS**: `brew install --cask temurin`
  - **Windows**: Download from [adoptium.net](https://adoptium.net/)
  - **Linux**: `sudo apt-get install openjdk-11-jdk`
  - Verify installation: `java -version`

## Installation

### 1. Clone or Navigate to Project Directory

```bash
cd /path/to/housewire-automation
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- @playwright/test
- @cucumber/cucumber
- TypeScript and ts-node
- All other required dependencies

### 3. Install Playwright Browsers

```bash
npx playwright install
```

This downloads Chromium, Firefox, and WebKit browsers.

### 4. Verify Installation

```bash
npx playwright --version
```

## Project Structure

```
housewire-automation/
├── features/
│   ├── sanity/                    # Sanity test scenarios
│   │   ├── 01-homepage-load.feature
│   │   ├── 02-listings-page.feature
│   │   ├── 03-property-details.feature
│   │   └── 04-about-page.feature
│   ├── regression/            hensive.feature
│   │   ├── 02-listings-comprehensive.feature
│   │   ├── 03-property-details-comprehensive.feature
│   │   ├── 04-about-page-comprehensive.feature
│   │   └── 05-navigation-flows.feature
│   ├── step-definitions/          # Step implementations
│   │   ├── common.steps.ts
│   │   ├── homepage.steps.ts
│   │   ├── listings.steps.ts
│   │   ├── property-details.steps.ts
│   │   └── about.steps.ts
│   └── support/                   # Test configuration
│       ├── world.ts              # Cucumber Wo```

## Project Stru   ├── BasePage.ts
│       ├── HomePage.ts
│       ├── ListingsPage.ts
│       ├── PropertyDetailsPage.ts
│       └── AboutPage.ts
├── .github/
│   └── workflows/
│       ├── playwright-sanity.yml    # Sanity test CI workflow
│       └── playwright-regression.yml # Regression test CI workflow
├── cucumber.js                    # Cucumber configuration
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Project dependencies

```

## Running Tests Locally

### Run All Tests

```bash
npm test
```

### Run Sanity Tests Only

```bash
npm run test:sanity
```

### Run Regression Tests Only

```bash
npm run test:regression
```

### Run Tests in Headed Mode (See Browser)

```bash
HEADLESS=false npm run test:sanity
```

### Run Specific Feature File

```bash
npx cucumber-js features/sanity/01-homepage-load.feature
```

### Run Tests with Specific Tag

```bash
npx cucumber-js --tags @sanity
npx cucumber-js --tags @regression
```

## Viewing Test Reports

### HTML Reports

After running tests, HTML reports are generated in the `reports/` directory.

### View Sanity Test Report

```bash
npm run test:sanity:report
```

### View Regression Test Report

```bash
npm run test:regression:report
```

### View Default Test Report

```bash
npm run test:report
```

## Allure Reports

### What is Allure?

Allure Framework is a flexible, lightweight multi-language test reporting tool that provides clear graphical reports and allows you to extract maximum information from your test execution. It shows a concise representation of what has been tested with detailed breakdown of failures.

### Installing Allure

Allure is already included as a dev dependency in this project. However, you may want to install the Allure command-line tool globally for easier access:

#### macOS (using Homebrew)

```bash
brew install allure
```

#### Windows (using Scoop)

```bash
scoop install allure
```

#### Linux

```bash
# Download and extract Allure
sudo apt-add-repository ppa:qameta/allure
sudo apt-get update
sudo apt-get install allure
```

#### Verify Installation

```bash
allure --version
```

### Generating and Viewing Allure Reports Locally

#### Option 1: Run Tests and Open Report Automatically

```bash
# Run all tests with Allure report
npm run test:allure

# Run sanity tests with Allure report
npm run test:sanity:allure

# Run regression tests with Allure report
npm run test:regression:allure
```

These commands will:
1. Run the tests
2. Generate the Allure report
3. Automatically open it in your browser

#### Option 2: Generate Report from Existing Results

If you've already run tests and have `allure-results/` directory:

```bash
# Generate Allure report
npm run allure:generate

# Open the generated report
npm run allure:open
```

#### Option 3: Serve Report (Live Server)

This starts a local web server to view the report:

```bash
# Serve the report (generates and opens in one step)
npm run allure:serve
```

### Understanding Allure Reports

The Allure report provides:

- **Overview**: High-level summary of test execution
- **Suites**: Tests organized by feature files
- **Graphs**: Visual representation of test results
- **Timeline**: Test execution timeline
- **Behaviors**: Tests grouped by BDD scenarios
- **Packages**: Tests organized by package structure
- **Categories**: Failure categories and analysis

### Viewing Allure Reports from GitHub Actions

When tests run in GitHub Actions, Allure reports are generated and uploaded as artifacts. Here's how to download and view them locally:

#### Step 1: Download Allure Artifacts from GitHub

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. Select the workflow run you want to review
4. Scroll down to the **Artifacts** section
5. Download the artifact (e.g., `allure-results-sanity` or `allure-report-regression-shard-1`)

#### Step 2: View Downloaded Results Locally

##### Method A: Using Allure Results (Recommended)

If you downloaded `allure-results-*` artifact:

```bash
# Extract the downloaded zip file
unzip allure-results-sanity.zip -d downloaded-results

# Serve the results with Allure
allure serve downloaded-results/
```

This will generate the report and open it in your browser automatically.

##### Method B: Using Pre-Generated Report

If you downloaded `allure-report-*` artifact:

```bash
# Extract the downloaded zip file
unzip allure-report-sanity.zip -d downloaded-report

# Serve the report using a simple HTTP server
cd downloaded-report
python3 -m http.server 8080
# Or use npx
npx http-server -p 8080
```

Then open `http://localhost:8080` in your browser.

#### Step 3: Merge Multiple Shard Results (For Regression Tests)

If you have multiple shards from regression tests:

```bash
# Download all shard artifacts
# Extract them into separate folders
unzip allure-results-regression-shard-1.zip -d shard1
unzip allure-results-regression-shard-2.zip -d shard2

# Create a merged directory
mkdir -p merged-results
cp shard1/* merged-results/
cp shard2/* merged-results/

# Generate combined report
allure serve merged-results/
```

### Allure Report Screenshots

Allure automatically captures and attaches:
- Screenshots on test failures (via Cucumber hooks)
- Browser logs
- Test execution timeline
- Step-by-step execution details

### Customizing Allure Reports

You can add additional information to Allure reports by using decorators in your step definitions:

```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';

Given('user has homepage opened', async function (this: ICustomWorld) {
  // Allure will automatically capture this step
  await this.homePage!.open();
});
```

### Allure Report Best Practices

1. **Always generate reports after test runs** - Use `npm run test:allure` commands
2. **Keep allure-results clean** - Old results can affect new reports
3. **Use Allure Serve for quick viewing** - Fastest way to see results
4. **Archive important reports** - Save HTML reports for historical reference
5. **Review trends** - Allure tracks test history and trends over time

### Troubleshooting Allure

#### "allure: command not found"

Install Allure globally as described in the Installation section above.

#### Empty or Missing Reports

```bash
# Clear old results and regenerate
rm -rf allure-results allure-report
npm run test:sanity
npm run allure:generate
```

#### Report Not Opening

```bash
# Use serve instead of open
npm run allure:serve
```

#### Permission Issues

```bash
# Fix permissions on macOS/Linux
chmod -R 755 allure-report allure-results
```

## Test Categories

### Sanity Tests (5 scenarios)

Critical smoke tests covering:
- Homepage loads successfully
- Listings page displays properties
- Property details page functionality
- About page loads correctly
- Essential UI elements visible

**Run Time**: ~2-3 minutes

### Regression Tests (50+ scenarios)

Comprehensive test coverage including:
- Homepage sections and elements
- Property listings and filtering
- Property details information
- About page content
- Navigation flows between pages
- Contact information display
- Team member i```

### Run Specifty specifications (bedrooms, bathrooms, price, etc.)

**Run Time**: ~15-20 minutes

## CI/CD Integration

### GitHub Actions Workflows

Two workflows are configured for automated testing:

#### Sanity Workflow (`playwright-sanity.yml`)
- Triggers: On every push and pull request
- Runs: Sanity test suite
- Purpose: Quick validation of critical functionality

#### Regression Workflow (`playwright-regression.yml`)
- Triggers: On push to main branch, pull requests, manual dispatch
- Runs: Full regression test suite
- Purpose: Comprehensive feature validation

### Workflow Features
- Automatic browser installation
- Parallel test execution
- Screenshot capture on fai
**Run Time**: ~2-3 minutes

#
- Test result artifacts

## Configuration

### Browser Configuration

Edit `playwright.config.ts` to modify:
- Browser types (Chromium, Firefox, WebKit)
- Viewport size
- Timeouts
- Screenshots and videos
- Base URL

### Cucumber Configuration

Edit `cucumber.js` to modify:
- Test paths
- Report formats
- Parallel execution settings
- Step definition paths

## Writing New Tests

### 1. Create Feature File

Create a new `.feature` file in `features/sanity/` or `features/regression/`:

```gherkin
Feature: New Feature Testing

  @regression
  Scenario: Verify new functionality
    Given user has homepage opened
    When user performs some action
    Then user should see expected result
```

### 2. Implement Step Definitions

If new steps are needed, add them to appropriate step definition file in `features/step-definitions/`:

```typescript
When('user performs some action', async function (this: ICustomWorld) {
  await this.page!.click('button.action');
}**Run Time**: ~2-3 minutesexpected result', async function (this: ICustomWorld) {
  await expect(this.page!.locator('.result')).toBeVisible();
});
```

### 3. Update Page Objects (if needed)

Add new page elements and methods to page object files in `src/pages/`:

```typescript
export class NewPage extends BasePage {
  readonly newElement: Locator;

  constructor(page: Page) {
    super(page);
    this.newElement = page.locator('.new-element');
  }

  async performAction(): Promise<void> {
    await this.clickElement(this.newElement);
  }
}
```

## Gherkin Style Guide

All feature files follow these conventions:
- **Scenarios**: Start with "Verify"
- **Steps**: Start with "user" (not "I")
- **Given**: Setup/preconditions starting with "user has" or "user navigates"
- **When**: Ac
```typescript
When('user performs some action', async function (this: ICustomWorld) {
  await this.puld see"

Example:
```gherkin
Scenario: Verify homepage loads successfully
  Given user has homepage opened
  When user scrolls to footer
  Then user should see contact information
```

## Troubleshooting

### Tests Failing to Start

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Reinstall browsers
npx playwright install --with-deps
```

### Browser Not Launching

```bash
# Install system dependencies (Linux)
npx playwright install-deps

# Or install browsers with dependencies
npx playwright install --with-deps
```

### TypeScript Compilation Errors

```bash
# Clean and rebuild
rm -rf dist/
npx tsc --noEmit
```

### Port Already in Use

If running local server:
```bash
# Find and kill process on port
lsof -ti:3000 | xargs kill -9
```

## Best Practices

1. **Keep tests independent**: Each test should setup and teardown its own state
2. **Use Page Objects**: Don't put locators directly in step definitions
3. **Write descriptive scenarios**: Make it clear what's being tested
4. **Tag appropriately**: Use @sanity and @regression tags
5. **Handle waits properly**: Use explicit waits, not sleep/timeout
6. **Screenshot failures**: Automatically captured in hooks
7. **Follow Gherkin style**: "user" prefix, "Verify" in scenarios

## Support

For issues or questions:
- Review test reports in `reports/` directory
- Check GitHub Actions logs for CI failures
- Review Playwright documentation: [playwright.dev](https://playwright.dev)
- Review Cucumber documentation: [cucumber.io](https://cucumber.io)

## License

ISC
