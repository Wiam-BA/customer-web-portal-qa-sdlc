# Test Report – Customer Web Portal  
**Version:** v1  
**Test Cycle:** Initial QA Cycle  
**Prepared by:** QA Lead  
**Date:** [25/01/2026]

---

## 1. Purpose
This Test Report summarizes the **testing activities, execution results, defects, and quality assessment** for the Customer Web Portal.

It provides a clear view of the **current quality status** and supports the **release decision-making process**.

---

## 2. Test Scope Summary
Testing was conducted according to the defined **QA Strategy** and **Test Plan**, covering the following areas:

- User registration and authentication
- Product browsing
- Cart management
- Checkout (mocked payment flow)
- Purchase history
- Access control and session handling

Out-of-scope features were not tested as defined in the Test Plan.

---

## 3. Test Execution Overview

### 3.1 Test Types Executed
- Functional testing (manual)
- End-to-end (E2E) testing
- Regression testing
- Basic non-functional checks (usability, access control)

### 3.2 Test Suites Executed
- Smoke Test Suite (P0)
- Regression Test Suite (P0 + P1)

---

## 4. Test Execution Results

### 4.1 Test Case Execution Summary

| Metric | Count |
|------|-------|
| Total Test Cases Executed | 27 |
| Passed | 23 |
| Failed | 3 |
| Blocked | 1 |
| Not Run | 0 |

### 4.2 Pass Rate
- **Overall Pass Rate:** 85%

---

## 5. Defect Summary

### 5.1 Defect Overview

| Severity | Count |
|--------|-------|
| Critical | 0 |
| High | 1 |
| Medium | 2 |
| Low | 0 |

### 5.2 Defect Highlights
- **High Severity**
  - Intermittent issue observed during mocked payment failure handling
- **Medium Severity**
  - Cart quantity update delay under specific navigation flow
  - Non-blocking UI validation message inconsistency

No **critical or blocking defects** remain open.

---

## 6. Automation Status

### 6.1 Automation Coverage
Automation focused on **critical user journeys**, including:
- Login
- Add to cart
- Checkout happy path
- Purchase history validation

| Metric | Value |
|------|------|
| Automated Scenarios | 6 |
| Manual Scenarios | 21 |
| Automation Coverage (Critical Flows) | ~70% |

### 6.2 CI Execution
- Automated tests executed locally and via GitHub Actions
- Failures reviewed and analyzed by QA
- No blocking automation failures detected

---
### 6.3 Test Evidence (CI Artifacts)

Automation evidence is generated and stored per CI run using GitHub Actions artifacts.

### Where to find the CI run
1. Open the repository on GitHub
2. Go to **Actions**
3. Open the latest workflow run: **Playwright Smoke (SauceDemo)**

### Download the HTML report
1. Inside the workflow run page, scroll to **Artifacts**
2. Download: **playwright-report** (ZIP)
3. Extract it locally
4. Open: `index.html` (inside the extracted folder)

### Failure evidence (when tests fail)
If a test fails, Playwright generates evidence in `test-results/` (screenshots/traces/videos depending on configuration).
In CI, this is uploaded as the artifact:
- **playwright-test-results**

To use it:
1. Download **playwright-test-results**
2. Extract the ZIP
3. Review screenshots/videos
4. Open traces via:
   ```bash
   npx playwright show-trace <path-to-trace.zip>
   ```

> Note: `playwright-report/` and `test-results/` are generated artifacts and are intentionally not committed to the repository.
---
## 7. Risk Assessment Update
Based on test execution:
- High-risk areas (authentication, checkout, access control) were **successfully validated**
- Identified defects are classified as **acceptable risk** for the current release
- No new high-risk issues discovered beyond those listed in `Risk_Analysis.md`

Residual risks are documented and tracked.

---

## 8. Entry & Exit Criteria Evaluation

### Entry Criteria
✔ All entry criteria were met before execution:
- Approved user stories
- Stable test environment
- Test data prepared
- Unit testing assumed complete

### Exit Criteria
✔ Exit criteria are considered **satisfied**:
- No open critical or blocking defects
- High-risk scenarios executed successfully
- Regression suite completed
- Known issues documented and accepted

---

## 9. Limitations & Constraints
- Mocked payment flow limits real-world payment validation
- Limited non-functional testing due to scope constraints
- Mobile testing not included (out of scope)

These limitations are documented and accepted.

---

## 10. QA Recommendation
Based on the executed tests, defect analysis, and risk assessment:

> **QA recommends proceeding with release**, with the current known issues documented and accepted.

Overall product risk is assessed as **acceptable for release**.

---

## 11. Sign-Off
Final QA sign-off and release approval are documented in: docs/Release_Signoff.md
