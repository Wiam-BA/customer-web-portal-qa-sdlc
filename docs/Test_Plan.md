# Test Plan: Customer Web Portal

## 1. Introduction
This Test Plan defines the **execution framework for testing activities** related to the Customer Web Portal.  
It operationalizes the QA Strategy by detailing **test phases, feature coverage, execution responsibilities, defect handling, and deliverables**.

This document focuses on **how testing is performed in practice** for the defined scope.

---

## 2. Test Objectives
The objectives of this test plan are to:
- Validate that implemented features meet acceptance criteria
- Detect functional and non-functional defects before release
- Ensure critical user journeys are tested end to end
- Provide clear evidence to support release readiness decisions

---

## 3. Scope of Testing

### 3.1 In Scope
- User registration and login
- Product browsing
- Cart management
- Checkout (mocked payment flow)
- Purchase history
- Web application behavior on supported browsers

### 3.2 Out of Scope
- Real payment gateway integration
- Mobile native applications
- Admin or back-office functionality
- Email notifications and password recovery

---

## 4. Test Phases & Schedule

Testing activities are organized into the following phases:

1. **Test Preparation**
   - Test scenarios definition
   - Test data preparation
2. **Test Execution**
   - Functional testing
   - Regression testing
3. **Defect Retesting and Verification**
   - Validation of fixes
   - Regression impact checks
4. **Release Validation Testing**
   - Final checks before release sign-off

Regression testing is executed **before each release candidate**.

---

## 5. Feature Coverage & Test Mapping

| Feature | Test Type | Coverage |
|-------|----------|----------|
| Registration & Login | Functional / E2E | Manual + Automated |
| Product Browsing | Functional | Manual |
| Cart Management | Functional / E2E | Manual + Automated |
| Checkout | E2E | Automated |
| Purchase History | Functional | Manual |

This mapping ensures **risk-based coverage**, with automation focused on critical user journeys.

---

## 6. Test Types & Execution Approach

### 6.1 Functional Testing
- Manual execution based on test scenarios and test cases
- Validation of positive, negative, and boundary cases

### 6.2 Integration / API Testing
- Verification of interactions between authentication, cart, and order components
- Focus on data consistency and error handling

### 6.3 End-to-End (E2E) Testing
- Automated validation of complete user journeys
- Executed using Playwright for stable and high-risk flows

### 6.4 Non-Functional Testing
- Basic performance validation (page load, responsiveness)
- Basic security checks (authentication, session handling)
- Usability and error message validation

---

## 7. Test Environment & Data

### 7.1 Environments
- **Test Environment**  
  Used for functional, integration, and regression testing

- **Staging Environment (simulated)**  
  Used for release validation and sign-off

### 7.2 Test Data
- Predefined test users
- Static product data
- Mocked payment responses

Test data is reusable and resettable where required.

---

## 8. Roles & Execution Responsibilities

- **QA Team / QA Lead**
  - Manual test execution
  - Automated test execution
  - Defect analysis and reporting
  - Test progress tracking

- **Automation Execution**
  - Automated tests are executed locally and via CI (GitHub Actions)
  - Failed tests are analyzed and reported by QA

- **Developers (assumed)**
  - Fix reported defects
  - Support root cause analysis

---

## 9. Defect Lifecycle & Management

### 9.1 Defect Lifecycle
1. Defect identification during testing
2. Defect logging in Jira
3. Triage and prioritization
4. Fix verification
5. Defect closure or formal acceptance

### 9.2 Defect Documentation
Each defect includes:
- Summary and description
- Steps to reproduce
- Expected vs actual result
- Severity and priority
- Supporting evidence (screenshots, logs, videos)

---

## 10. Entry Criteria
Testing activities can begin when:
- User stories and acceptance criteria are approved
- Test environment is available
- Test data is prepared
- Relevant unit tests are completed

---

## 11. Exit Criteria
Testing is considered complete when:
- No open critical or blocking defects remain
- All high-risk test scenarios are executed successfully
- Regression testing is completed
- Known issues are documented and accepted
- QA approval is granted based on overall risk assessment

---

## 12. Test Evidence & Deliverables

The following artifacts are produced during testing:
- Test execution reports
- Defect reports
- Automation execution logs
- Test scenarios and test cases
- Release sign-off documentation

All reports are stored in the `/reports` folder.

---

## 13. Risks & Mitigation

| Risk | Impact | Mitigation |
|-----|--------|-----------|
| Late requirement changes | Medium | Early reviews and clear acceptance criteria |
| Limited test time | Medium | Risk-based prioritization |
| Environment instability | High | Early environment validation |

---

## 14. Approval
This Test Plan is approved by the QA Lead and serves as the execution baseline for all testing activities related to this project.
