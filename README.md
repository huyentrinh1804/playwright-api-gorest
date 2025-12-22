# API Integration Automation – GoRest

## Tech stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI)

---

## Test scope
### User API
- Validation tests
  - Required fields (missing fields)
  - Empty / null fields
  - Format validation (email, enum, length)
  - Business validation (e.g. duplicate email)
- API integration flow
  - Create user
  - Get user
  - Update user
  - Verify updated data
  - Delete user
  - Verify deletion
## Test strategy
- Validation tests and API flow tests are separated to clarify test intent.
- Data-driven testing is used for validation scenarios.
- Test data generation is handled by factory functions.
- API calls are encapsulated in service classes.
- Tests are designed to be independent and repeatable.
- CI is implemented using GitHub Actions to automatically run tests on push and pull requests.


## How to run
npm install
npx playwright test
