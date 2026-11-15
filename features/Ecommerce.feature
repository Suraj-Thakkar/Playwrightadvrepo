Feature: Ecommerce validations
@Regression
  Scenario: Placing the order
    Given login to ecommerce application with "thakkarsuraj641@gmail.com" and "Suraj123@"
    When Add "ADIDAS ORIGINAL" to cart
    Then Verify "ADIDAS ORIGINAL" is displayed in the cart
    When Enter valid details and place the order and check "thakkarsuraj641@gmail.com" is displayed
    Then Verify order is displayed in orderHistory

 @Validation
  Scenario Outline: Login to application
    Given Login to the application with "<username>" and "<password>"
    Then Verify error message is displayed for invalid credentials

Examples:
| username    | password |
| thakkarsuraj|   abc123 |
|     sadasds |   sdsds1 |


