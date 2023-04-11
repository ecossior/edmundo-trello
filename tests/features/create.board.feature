Feature: Manage board
Background: Login to Trello with valid credentials
    Given the user login to Trello
 
  @test
  Scenario Outline: Create a board customized
    Given the user selects Create board from Header menu    
    When the user customize the board background
    And add the board title "<Title>"
    And modify the visibility from Workspace to "<Visibility>"
    And accept all settings
    Then the user should see to created board in the list: "<Title>"
    Examples:
        | Title               | Visibility |
        | My Automation board | Public     |
