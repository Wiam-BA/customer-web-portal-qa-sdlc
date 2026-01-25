# User Stories – Customer Web Portal

## Overview
This document defines the **core user stories** for the Customer Web Portal.  
These user stories represent the **functional expectations from an end-user perspective** and serve as the basis for deriving test scenarios and test cases.

Traceability between user stories, test scenarios, and test cases is maintained through the **Traceability Matrix** in `Manual_Test_Cases.xlsx`.

---

## US-001 — User Registration

**As a** new user  
**I want to** register an account  
**So that** I can access the customer web portal

### Acceptance Criteria
- User can register using a valid email and password
- Email format is validated
- Password strength rules are enforced
- Registration fails if the email already exists
- Clear validation messages are displayed on failure

---

## US-002 — User Login & Logout

**As a** registered user  
**I want to** log in and log out securely  
**So that** I can access and protect my account

### Acceptance Criteria
- User can log in with valid credentials
- Login fails with invalid credentials
- User can log out successfully
- Logged-out users cannot access protected pages
- Session handling is secure and consistent

---

## US-003 — Product Browsing

**As a** user  
**I want to** browse available digital products  
**So that** I can decide what to purchase

### Acceptance Criteria
- Product list is displayed with basic information (name, price)
- Product data loads correctly
- User receives clear feedback if products cannot be loaded
- Product browsing behavior matches defined access rules (logged in / logged out)

---

## US-004 — Cart Management

**As a** user  
**I want to** manage products in my cart  
**So that** I can prepare my purchase before checkout

### Acceptance Criteria
- User can add products to the cart
- User can update product quantities
- User can remove products from the cart
- Cart totals are calculated correctly
- Cart state is preserved during navigation
- Empty cart state is handled gracefully

---

## US-005 — Checkout (Mocked Payment)

**As a** user  
**I want to** complete checkout using a mocked payment flow  
**So that** I can finalize my purchase

### Acceptance Criteria
- User can proceed to checkout when the cart contains items
- Checkout is blocked if the cart is empty
- Successful payment creates an order
- Failed payment does not create an order
- Duplicate order submissions are prevented
- User receives clear confirmation or error messages

---

## US-006 — Purchase History

**As a** user  
**I want to** view my purchase history  
**So that** I can review my past orders

### Acceptance Criteria
- Completed orders appear in purchase history
- Order data (items, dates) is accurate
- Empty purchase history is handled gracefully
- Purchase history is accessible only to authenticated users

---

## US-007 — Access Control & Security

**As a** user  
**I want** protected pages to be secured  
**So that** my data is not exposed without authentication

### Acceptance Criteria
- Unauthenticated users are redirected to login
- Protected pages are not accessible without a valid session
- Sensitive data is never exposed to unauthorized users

---

## US-008 — Session Management

**As a** user  
**I want** my session to be handled safely  
**So that** expired or invalid sessions do not cause errors or security issues

### Acceptance Criteria
- Expired sessions are detected
- User is prompted to log in again when session expires
- No actions are performed with an invalid session
- Application remains stable during session expiration

---

## Notes
- User stories are intentionally kept **concise and focused on behavior**
- Detailed validation paths are covered in:
  - `test-cases/Test_Scenarios.md`
  - `test-cases/Manual_Test_Cases.xlsx`
- Coverage and alignment are ensured through the traceability matrix
