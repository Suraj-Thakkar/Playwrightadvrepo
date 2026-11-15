Feature: Login application
 @Validation
  Scenario Outline: Login to application
    Given Login to the application with "<username>" and "<password>"
    Then Verify error message is displayed for invalid credentials

Examples:
| username    | password |
| thakkarsuraj|   abc123 |
|     sadasds |   sdsds1 |
