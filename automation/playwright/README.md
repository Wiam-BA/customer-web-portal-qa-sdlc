# Playwright Automation – Customer Web Portal (Demo)

## Overview
This folder contains **end-to-end (E2E) automated tests** implemented using **Playwright**.

For the purpose of this QA-led portfolio project, automation is demonstrated against the **public SauceDemo application**:
https://www.saucedemo.com/

The goal is to showcase:
- Automation setup and structure
- Smoke test implementation
- CI-ready configuration
- Integration within a broader QA lifecycle

This is **not intended to be a full automation suite**, but a realistic demonstration of how automation fits into the SDLC.

---

## Why SauceDemo?
SauceDemo is a publicly available demo e-commerce site that provides:
- Authentication
- Product listing
- Cart management
- Checkout flow

Using SauceDemo allows demonstrating automation skills **without building a custom application**, which aligns with a **QA Lead / Manager role** focus.

---

## Tech Stack
- **Automation Framework:** Playwright
- **Language:** JavaScript
- **Test Runner:** Playwright Test Runner
- **Browser:** Chromium (Desktop)
- **Reporting:** Playwright HTML Report
- **CI Ready:** Yes (GitHub Actions compatible)

---

## Project Structure

```
playwright/
├── tests/                      # Automated test specifications
│   └── saucedemo.smoke.spec.js # Smoke test (P0)
│
├── pages/                      # Optional page objects (future extension)
│
├── playwright.config.js        # Playwright configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

---

## Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** (comes with Node.js)
- Internet access (to reach SauceDemo)

---

## Installation
From the `automation/playwright/` directory, run:

```bash
npm install
npx playwright install
```

---

## Test Credentials (SauceDemo)
SauceDemo provides public demo credentials:
- **Username:** `standard_user`
- **Password:** `secret_sauce`

These credentials are used directly in the smoke test.

---

## Running Tests

### Run all tests (headless)
```bash
npm test
```

### Run smoke tests only
```bash
npm run test:smoke
```

### Run tests in headed mode
```bash
npm run test:headed
```

### Run tests with Playwright UI
```bash
npm run test:ui
```

---

## Test Coverage (Current)
Current automation coverage focuses on **critical smoke flow (P0)**:
- User login
- Product selection
- Add item to cart
- Cart verification

This aligns with the **Smoke Test Suite** defined in:
- `test-cases/Manual_Test_Cases.xlsx`
- `test-cases/Test_Scenarios.md`

---

## Reporting
After test execution, an HTML report is generated automatically.

To open the report:
```bash
npm run report
```

The report includes:
- Test execution results
- Screenshots on failure
- Traces (when enabled)

---

## CI Integration
This automation setup is designed to run in **GitHub Actions**:
- Dependencies installed via `npm install`
- Tests executed via `npm test`
- Reports generated as artifacts

This demonstrates how automation integrates into a **CI/CD pipeline**.

---

## Notes & Limitations
- This automation targets a **public demo application**
- Selectors are based on SauceDemo’s current UI and may change
- The focus is on **structure and integration**, not exhaustive coverage
- Page Object Model is intentionally minimal for simplicity

---

## Future Improvements
- Expand coverage to checkout and order confirmation
- Introduce Page Object Model fully
- Add negative and edge-case automation
- Parameterize test data
- Cross-browser execution

---

## Ownership
This automation suite is part of a **QA-focused SDLC simulation project** and is owned and maintained by the QA Lead.

It demonstrates how automation complements:
- Manual testing
- Risk-based testing
- Release decision-making
