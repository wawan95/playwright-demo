# Playwright QA Automation Portfolio

A UI functional automation project using **Playwright Test**, **JavaScript**, and the **Page Object Model (POM)** against the public SauceDemo practice site.

## Coverage

- Valid login
- Invalid password
- Empty username and password validation
- Inventory page content
- Add product to cart
- Sort products by price, low to high

## Tech stack

- Node.js
- JavaScript
- Playwright Test
- Chromium
- HTML Reporter
- GitHub Actions CI

## Project structure

```text
playwright-qa-portfolio/
├── .github/workflows/playwright.yml
├── docs/
│   ├── test-cases.md
│   └── test-plan.md
├── pages/
│   ├── InventoryPage.js
│   └── LoginPage.js
├── tests/
│   ├── inventory.spec.js
│   └── login.spec.js
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## Prerequisites

- Node.js 20+ (Node.js 22 LTS recommended)
- npm
- Internet access

## Install and run

```bash
npm install
npx playwright install chromium
npm test
```

Run with a visible browser:

```bash
npm run test:headed
```

Run only Chromium:

```bash
npm run test:chromium
```

Run smoke tests:

```bash
npm run test:smoke
```

Open the HTML report after running tests:

```bash
npm run test:report
```

## Reports and debugging

The configuration generates an HTML report in `playwright-report/`. Screenshots, video, and trace artifacts are configured to be retained on failure; see `test-results/` and the HTML report after execution.

## Test documentation

- [Panduan lengkap Bahasa Indonesia](PANDUAN-LENGKAP-ID.md)

- [Test plan](docs/test-plan.md)
- [Test case design](docs/test-cases.md)

## CI

A GitHub Actions workflow is included at `.github/workflows/playwright.yml`. It installs dependencies and Chromium, runs the suite, and uploads the HTML report as an artifact.

## Important note

This repository contains the automation code and designed test cases. Do not claim tests passed until you run them and review the report. The demo website is external and may change or be unavailable.

## Suggested next steps

- Add logout and cart checkout-flow tests
- Add API tests if a suitable public test API is selected
- Add environment configuration and reusable test data
- Publish an execution report or CI badge after the workflow has actually passed
