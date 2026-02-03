# Test Automation & CI/CD Documentation  
## Customer Web Portal – QA-led SDLC Simulation

---

## 1. Purpose of This Document

This document describes, step by step, how **test automation** and **CI/CD integration** were implemented as part of the QA-led SDLC simulation project.

The objective is to demonstrate:
- How automation fits into the QA lifecycle
- How Playwright was set up and executed
- How GitHub Actions was used to run tests automatically
- How test evidence is generated and accessed

This documentation reflects a **QA Lead perspective**, focusing on structure, reliability, and integration rather than exhaustive automation.

---

## 2. Automation Scope & Strategy

### 2.1 Automation Objectives
- Validate critical user journeys (P0 / smoke tests)
- Reduce manual regression effort
- Provide fast feedback on build quality
- Integrate automation into CI for continuous validation

### 2.2 Automation Scope
Automated tests cover:
- Login
- Product selection
- Add to cart
- Cart verification

Automation is intentionally limited to **smoke coverage** to keep tests stable and meaningful.

---

## 3. Tooling & Technology Stack

| Area | Tool |
|-----|-----|
| Automation framework | Playwright |
| Programming language | JavaScript |
| Test runner | Playwright Test |
| Browser | Chromium |
| Version control | Git / GitHub |
| CI/CD | GitHub Actions |
| Reporting | Playwright HTML Report |

---

## 4. Local Automation Setup

### 4.1 Prerequisites
- Node.js (LTS)
- Git
- Code editor (VS Code recommended)

Verification:
```bash
node -v
npm -v
git --version
```

---

### 4.2 Repository Setup
```bash
git clone https://github.com/<username>/customer-web-portal-qa-sdlc.git
cd customer-web-portal-qa-sdlc
```

---

### 4.3 Playwright Initialization
```bash
cd automation
npm init playwright@latest playwright
```

Configuration:
- Language: JavaScript
- Test directory: tests
- Install browsers: Yes

---

## 5. Automation Project Structure

```
automation/playwright/
├── tests/
│   └── saucedemo.smoke.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 6. Test Execution

### 6.1 Local Execution
```bash
cd automation/playwright
npm test
npm run test:smoke
```

---

### 6.2 Local Test Report
Generated at:
```
automation/playwright/playwright-report/
```

Opened via:
```bash
npm run report
```

---

## 7. Test Evidence

### 7.1 Test Results Folder
On failures, Playwright creates:
```
automation/playwright/test-results/
```

This folder contains screenshots, videos, and traces and is not committed to Git.

---

## 8. CI/CD Integration with GitHub Actions

### 8.1 Workflow Location
```
.github/workflows/playwright-smoke.yml
```

### 8.2 CI Steps
1. Checkout repository
2. Setup Node.js
3. Install dependencies
4. Install Playwright browsers
5. Run @smoke tests
6. Upload reports as artifacts

---

## 9. Accessing CI Artifacts

1. Go to GitHub → Actions
2. Open the latest workflow run
3. Download artifacts:
   - playwright-report
   - playwright-test-results (on failure)

---

## 10. CI Status Badge
The main README includes a CI badge showing automation health.

---

## 11. Best Practices Applied
- Smoke tests only in CI
- Chromium-only execution
- No generated artifacts committed
- Automation aligned with QA strategy

