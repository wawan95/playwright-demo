# Test Plan — SauceDemo UI Automation

## 1. Objective
Demonstrate maintainable UI functional automation using Playwright Test, JavaScript, and the Page Object Model (POM).

## 2. Scope
In scope:
- Login success and validation errors
- Inventory page visibility
- Add-to-cart interaction
- Product price sorting

Out of scope:
- Payment processing
- Security penetration testing
- Load/performance testing
- Backend/API verification

## 3. Test approach
- Use independent test cases with Playwright's test runner.
- Use POM classes to separate page locators/actions from test assertions.
- Use web-first assertions for dynamic UI state.
- Capture screenshots, video, and traces on failure according to configuration.
- Run on Chromium locally and in GitHub Actions CI.

## 4. Entry criteria
- Node.js and npm installed
- Dependencies installed with `npm ci` or `npm install`
- Chromium installed through Playwright
- Demo website reachable

## 5. Exit criteria
- All planned tests executed
- Failures reviewed and classified
- HTML report reviewed
- Any limitations or environment issues documented

## 6. Risks and assumptions
- The test site is a third-party public demo and may be unavailable or change.
- Internet access is required.
- This project is a portfolio demonstration, not evidence of testing a production banking system.
