# Test Case: Login (Positive)

- ID: TC-LOGIN-001
- Title: Login with valid credentials
- Feature: Authentication / Login
- Priority: High
- Severity: Critical
- Type: Manual / Functional

## Pre-conditions

- Test environment is available and the application under test is reachable (URL).
- Test user account exists with valid credentials (username and password).
- Browser cleared of session/auth cookies (or use an incognito/private window).

## Test Data

- Username: (provide a valid username or use environment/fixture)
- Password: (provide the matching password or use environment/fixture)

## Steps

1. Open the application login page (provide the canonical URL).
2. Enter the valid `Username` into the username field.
3. Enter the valid `Password` into the password field.
4. Click the `Log In` (or `Sign In`) button.
5. Wait for the landing page/dashboard to load (observe navigation or dashboard element).

## Expected Result

- The application navigates to the user's landing page or dashboard.
- A known dashboard element is visible (example: account summary panel, user avatar, or welcome message). Specify selector/text for automation: e.g., `#account-overview` or text `Welcome, <username>`.
- No authentication error messages are shown.

## Post-conditions / Cleanup

- User remains logged in (or sign out if needed to reset state for other tests).

## Notes / Acceptance Criteria

- If the site redirects to a multi-factor or additional verification page, note that behavior and either provide MFA test steps or use a test account that bypasses MFA.
- If the login is implemented via a third-party provider (OAuth), document the provider flow and test accordingly.

## Attachments / Evidence

- Take screenshots of the login page, filled form (optional), and the dashboard after login.
- Record any console errors or network failures if present.

---
Add or replace test data values using secure means (CI secrets or environment variables) rather than hard-coding credentials in test files.
