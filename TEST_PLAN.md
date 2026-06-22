
# Test Plan — Project (Detailed)

## 1. Overview

This document defines the test strategy, scope, cases, execution steps, reporting, and CI integration for the project's Playwright automation suite. It is intended to be actionable and runnable by the engineering and QA teams.

## 2. Scope

- In-scope: end-to-end UI tests implemented under `tests/` and `playwright_automation_project/tests/` (login, registration, account flows, combined scenarios).
- Out-of-scope: backend-only API tests, load/performance, and accessibility testing (not currently implemented).

## 3. Objectives

- Ensure critical user journeys (login, registration, payments/accounts) remain functional.
- Provide fast feedback on PRs using smoke tests, and broader nightly regression coverage.
- Produce consistent test metrics and artifacts (Allure + Playwright reports).

## 4. Test Strategy

- Test levels: UI E2E automated tests using Playwright.
- Test design: Page Object Model (POM) under `pageobjects/` (note: duplicates exist — see maintenance).
- Tagging: use `@smoke` and `@regression` to select test subsets.

## 5. Environments & Test Matrix

- Local developer machine (macOS in current context).
- CI (Linux or macOS runners) with Node.js and Playwright browsers installed.
- Browser matrix (initial): Chrome (primary); add Firefox/WebKit as needed.

Matrix example:

- Chrome (desktop) — smoke + regression
- Firefox (desktop) — regression (optional)

## 6. Test Data & Fixtures

- Centralize reusable test data in `fixtures/` and in Playwright fixture files (`fixtures/testfixture.js`).
- Protect secrets: source sensitive credentials from environment variables or CI secrets.

## 7. Key Test Cases (examples)

- Login (positive): valid credentials -> assert landing page or dashboard element.
- Login (negative): invalid credentials -> assert error message displayed.
- Login (validation): empty username/password -> assert field validation messages.
- Registration (positive): valid inputs -> assert registration success and optional email confirmation step.
- Registration (duplicate): existing username/email -> assert appropriate error.
- Forgot password: open flow, submit email, assert confirmation message.

Each case should map to a spec file and referenced pageobject. Example mapping:

- `tests/TClogin.spec.js` -> `pageobjects/LoginPage.js`
- `tests/TCregister.spec.js` -> `pageobjects/RegistrationPage.js` (if present)

## 8. Implementation & Conventions

- Single source of pageobjects: consolidate `pageobjects/` and `playwright_automation_project/pageobjects/` to one directory to avoid drift.
- Use explicit waits: prefer `waitForSelector`, `waitForNavigation`, and `locator` APIs — avoid arbitrary timeouts.
- Tests should be idempotent and clean up state when possible.

## 9. Test Execution

Install and prepare:

```bash
npm install
npx playwright install --with-deps
```

Run subsets via package scripts (from `package.json`):

- Smoke tests:

```bash
npm run smoke
```

- Regression tests:

```bash
npm run regression
```

- All tests:

```bash
npx playwright test
```

Generate Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## 10. CI Integration (suggestion)

- Add a GitHub Actions workflow that runs `npm ci`, `npx playwright install`, and `npm run smoke` on pull requests. Nightly schedules can run regression.
- Store `allure-results/` artifacts and upload them for historical trend analysis.

Simple CI job outline:

- checkout, `npm ci`, `npx playwright install`, `npm run smoke`, upload `allure-results` as artifact.

## 11. Reporting & Metrics

- Primary metrics:
  - Pass rate (per-run)
  - Test duration (per test, per suite)
  - Flake rate (tests with intermittent failures)
- Sources:
  - `allure-results/` (raw)
  - `allure-report/` (rendered dashboard)
  - `playwright-report/` for Playwright-specific output

## 12. Flakiness & Reliability

- First identify flaky tests using historical runs (Allure history if available).
- Apply fixes: replace sleeps, increase targeted waits, stabilize locators, and add retries only when justified.

## 13. Defect Lifecycle & Triage

- Failures in smoke runs should block the PR until triaged.
- Establish ownership: assign flaky-test fixes to the author of the failing test or to a designated QA engineer.

## 14. Maintenance Actions

- Consolidate duplicate pageobject directories into `pageobjects/`.
- Add clear naming and docs for fixtures and testdata.

## 15. Risks & Mitigations

- Risk: duplicate implementations drift. Mitigation: one directory and CI lint check for used imports.
- Risk: environment-specific failures. Mitigation: matrix runs in CI and reproduce locally.

## 16. Next Steps (actionable)

1. Consolidate `pageobjects/` duplicates (I can perform this change if you want).
2. Update existing login tests to pass `successSelector` option to the improved `clickOnLoginBtn` (I can update test files automatically).
3. Add a GitHub Actions workflow to run `npm run smoke` on PRs (I can scaffold it).

---
Please indicate which next step you'd like me to take: consolidate pageobjects, update tests to the new login method signature, or create a CI workflow. 

