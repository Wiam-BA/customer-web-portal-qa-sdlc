# Product Overview – Customer Web Portal

## 1. Product Purpose
The Customer Web Portal is a web-based application that allows end users to browse and purchase digital products.  
The purpose of this product is to provide a **simple, secure, and user-friendly experience** for customers to manage their purchases online.

This project is used as a **mock product** to simulate a real-world software development lifecycle from a quality assurance perspective.

---

## 2. Target Users
- End customers purchasing digital products
- Users with basic web and e-commerce experience
- Desktop and mobile web users (responsive design assumed)

---

## 3. Key Features (High Level)

### Authentication
- User registration
- User login and logout
- Session management

### Product Browsing
- View list of available digital products
- View basic product details (name, price)

### Cart & Checkout
- Add products to cart
- Review cart contents
- Complete checkout using a mocked payment flow

### Purchase History
- View previous purchases
- Display order date and purchased items

---

## 4. High-Level User Journeys

### User Journey 1: New User Purchase
1. User registers an account
2. User logs in
3. User browses products
4. User adds product to cart
5. User completes checkout
6. User views purchase in history

### User Journey 2: Returning User
1. User logs in
2. User browses products
3. User completes a new purchase
4. User reviews updated purchase history

---

## 5. Assumptions
- Payment processing is mocked (no real financial transactions)
- Email verification and password recovery are out of scope
- Admin or back-office functionality is not included
- Product data is assumed to be available and valid

---

## 6. Constraints
- Limited development scope (QA-focused simulation)
- Time-constrained execution
- Web application only (no native mobile apps)

---

## 7. Quality Considerations (High Level)
- Authentication and checkout are considered **critical user flows**
- Data consistency is required between cart, orders, and purchase history
- Usability and error handling are important for end-user experience

---

## 8. Out of Scope
- Mobile applications
- Real payment gateway integration
- Advanced product search or filtering
- Administrative dashboards
