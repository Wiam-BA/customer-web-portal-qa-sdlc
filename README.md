# customer-web-portal-qa-sdlc
QA focused SDLC simulation of a customer web portal, covering test strategy, automation, CI/CD, risk management, and release sign-off.

## Overview
This project is intended as a **portfolio case study** to showcase QA leadership and process skills.

---

## Scope
The simulated portal includes the following features:

- **Authentication**: User registration and login  
- **Product Browsing**: Viewing digital products  
- **Cart & Checkout**: Adding items to cart and mock checkout flow  
- **Purchase History**: Viewing previous orders

---

## Repository Structure

```text
customer-web-portal-qa-sdlc/
├── README.md
├── LICENSE
├── .gitignore
├── docs/
│   ├── Product_Overview.md
│   ├── QA_Strategy.md
│   ├── Test_Plan.md
│   ├── Risk_Analysis.md
│   ├── User_Stories.md
│   └── Release_Signoff.md
├── test-cases/
│   ├── Manual_Test_Cases.xlsx
│   └── Test_Scenarios.md
├── automation/
│   └── playwright/
│       ├── tests/
│       ├── pages/
│       └── README.md
├── reports/
│   └── Test_Report_v1.md
└── mock-app/
    └── README.md
```
- README.md → Project overview
- LICENSE → MIT License
- .gitignore → Node, IDE, and temp files
- docs/ → All QA documentation
- test-cases/ → Manual and semi-automated test cases
- automation/ → Automation scripts (Playwright / Python)
- reports/ → Test execution reports and logs
- mock-app/ → Optional minimal mock application
---

## Objectives

- Demonstrate **QA planning and strategy** for a real-world project  
- Apply **manual and automated testing** techniques  
- Showcase **risk analysis, reporting, and release governance**  
- Simulate **CI/CD integration** and automation pipelines  

---

## How to Use This Repository

1. **Explore the documentation** in the `/docs` folder  
2. **Review manual test cases** in `/test-cases`  
3. **Run or examine automation scripts** in `/automation/playwright/tests` (if implemented)  
4. **Check reports** in `/reports`  
5. Optional: Use `/mock-app` for a minimal simulation  

---

## Technologies & Tools Used

- **Testing / Automation**: Playwright, Python / JavaScript  
- **Version Control**: Git + GitHub  
- **CI/CD**: GitHub Actions  
- **Documentation**: Markdown (`.md`) for all QA documents  
- **Manual Test Cases**: Excel (`.xlsx`)  

---

## License

This project is licensed under the [MIT License](LICENSE).
