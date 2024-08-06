# **Description**

**Closes #123, #456**

---

# **Changes Proposed**

## **What were you told to do?**
- Implement a login page with form validation.
- Ensure the page supports user authentication through a form and social login options.
- Provide feedback and error messages based on user input.

## **What did you do?**
- **Created `LoginPage` Component**:
  - Implemented a login form with username and password fields.
  - Added form validation using Zod schema for username and password fields.
  - Included social login options for Google and Facebook.
  - Added a "Forgot Password?" link and a "Sign Up" link for users who do not have an account.
- **UI Enhancements**:
  - Styled the login page with responsive design considerations.
  - Incorporated a custom button and input components for a consistent look and feel.
- **Error Handling**:
  - Implemented validation error messages for empty fields or invalid input.
  - Ensured error messages are cleared when valid input is provided.

---

# **Check List**

- [x] My code follows the code style of this project.
- [x] This PR does not contain plagiarized content.
- [x] The title and description of the PR are clear and explain the approach.
- [x] I am making a pull request against the **dev branch** (left side).
- [x] My commit message style matches our requested structure.
- [x] My code additions will not fail code linting checks or unit tests.
- [x] I am only making changes to files I was requested to.

---

# **Screenshots/Videos**

*Add relevant screenshots or videos here if applicable*

---

# **Tests**

## **Tested Scenarios**
- **Rendering**:
  - Verified that all initial elements (input fields, social login options) are displayed correctly.
- **Validation**:
  - Checked that validation errors are shown when the form is submitted with empty fields.
  - Confirmed that error messages are removed when valid input is provided.
- **Form Submission**:
  - Ensured that form submission is handled correctly when all inputs are valid.

**Tests written using Testing Library and Vitest.**
