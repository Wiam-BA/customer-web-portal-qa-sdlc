# Test Scenarios – Customer Web Portal (Feature-Based)

## Legend
- **Priority**
  - **P0**: Critical (must pass for release)
  - **P1**: High (strongly recommended before release)
  - **P2**: Medium/Low (nice to have / can be deferred)
- **Execution**
  - **Manual**
  - **Automation Candidate** (good for Playwright regression)

---

## 1. Authentication (Registration / Login / Session)

### AUTH-01 — Register with valid data
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** User is not registered
- **Test Data:** Valid email, strong password
- **Expected Result:** Account created successfully; user can log in

### AUTH-02 — Register with already used email
- **Priority:** P1
- **Execution:** Manual
- **Preconditions:** Email exists in system
- **Expected Result:** Error message displayed; registration blocked

### AUTH-03 — Register with invalid email format
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Validation error shown; registration blocked

### AUTH-04 — Register with weak password (policy validation)
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Password rules shown; registration blocked

### AUTH-05 — Login with valid credentials
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** User account exists
- **Expected Result:** User logged in; session starts; redirected to portal/home

### AUTH-06 — Login with invalid password
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** User exists
- **Expected Result:** Error message displayed; user not logged in

### AUTH-07 — Login with non-existent account
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Error message displayed; user not logged in

### AUTH-08 — Logout
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** User is logged in
- **Expected Result:** Session terminated; user returned to login page

### AUTH-09 — Access protected pages while logged out
- **Priority:** P0
- **Execution:** Manual
- **Preconditions:** User not logged in
- **Expected Result:** Redirected to login; no data exposed

### AUTH-10 — Session timeout / expired session handling
- **Priority:** P1
- **Execution:** Manual
- **Preconditions:** Session exists then expires
- **Expected Result:** User asked to login again; no action performed with expired session

---

## 2. Product Browsing

### PROD-01 — View product list successfully
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** User is logged in
- **Expected Result:** Product list displayed with name + price

### PROD-02 — Product list empty state
- **Priority:** P2
- **Execution:** Manual
- **Preconditions:** No products available
- **Expected Result:** Clear empty-state message; no UI break

### PROD-03 — View product details (if applicable)
- **Priority:** P2
- **Execution:** Manual
- **Expected Result:** Product details page displays correct information

### PROD-04 — Product browsing while not logged in (if protected)
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Redirect to login or limited view, per requirements

### PROD-05 — API/product loading failure handling
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Error message shown; user can retry; UI does not crash

---

## 3. Cart Management

### CART-01 — Add product to cart
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** User logged in; product exists
- **Expected Result:** Product added; cart count/summary updates

### CART-02 — Add same product twice (quantity behavior)
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Quantity increases or duplicate behavior matches requirement

### CART-03 — Update quantity in cart
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Expected Result:** Quantity updates; total price recalculates correctly

### CART-04 — Remove item from cart
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Expected Result:** Item removed; totals update; cart state correct

### CART-05 — Cart persistence during session navigation
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Cart contents remain when navigating across pages

### CART-06 — Empty cart state
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Empty cart message shown; checkout disabled or blocked

---

## 4. Checkout (Mocked Payment)

### CHK-01 — Checkout happy path (mocked payment success)
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** Cart has at least 1 item
- **Expected Result:** Order created; confirmation shown; cart cleared

### CHK-02 — Attempt checkout with empty cart
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** Cart is empty
- **Expected Result:** Checkout blocked; user informed

### CHK-03 — Payment failure (mocked)
- **Priority:** P1
- **Execution:** Manual
- **Preconditions:** Payment mock returns failure
- **Expected Result:** Order not created; clear error shown; cart retained

### CHK-04 — Retry checkout after failure
- **Priority:** P2
- **Execution:** Manual
- **Expected Result:** User can retry; no duplicate orders created

### CHK-05 — Prevent duplicate order submission (double click / refresh)
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** System prevents duplicates; only one order is created

---

## 5. Purchase History

### HIST-01 — View purchase history after successful checkout
- **Priority:** P0
- **Execution:** Manual, Automation Candidate
- **Preconditions:** User has at least 1 completed order
- **Expected Result:** Order appears with correct items and date

### HIST-02 — Purchase history empty state
- **Priority:** P1
- **Execution:** Manual
- **Preconditions:** User has no orders
- **Expected Result:** Clear empty-state message; UI does not break

### HIST-03 — Purchase history data accuracy
- **Priority:** P0
- **Execution:** Manual
- **Expected Result:** Items/prices match the completed order; no missing entries

### HIST-04 — Access purchase history while logged out
- **Priority:** P0
- **Execution:** Manual
- **Expected Result:** Redirected to login; no data exposed

---

## 6. Cross-Cutting Scenarios (Error Handling / Usability)

### X-01 — Validation messages are clear and user-friendly
- **Priority:** P2
- **Execution:** Manual
- **Expected Result:** Errors explain what happened and how to fix it

### X-02 — Basic accessibility/usability sanity checks
- **Priority:** P2
- **Execution:** Manual
- **Expected Result:** No major usability blockers (labels, navigation, focus)

### X-03 — Browser compatibility smoke test (Chrome/Firefox/Edge)
- **Priority:** P1
- **Execution:** Manual
- **Expected Result:** Core flows work in supported browsers
