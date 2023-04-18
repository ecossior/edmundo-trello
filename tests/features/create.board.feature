Feature: Manage board
Background: Login to Trello with valid credentials
    Given the user login to Trello
 
  @test @Acceptance @Smoke
  Scenario Outline: Create a board customized
    Given the user clicks Create from Header menu
    When the user selects "<Type>" from Create menu
    And selects the Background "<Color>"
    And add the board title "<Title>"
    And modify the visibility from Workspace to "<New>"
    And accept all settings
    Then the user should see to created board in the list
    Examples:
         | Title              | New    | Type         | Color |
         | Automation_Board02 | Public | Create board | Green |       

@test @Acceptance 
  Scenario Outline: Start with a template
    Given the user clicks Create from Header menu
    When the user selects "<Type>" from Create menu
    And selects a "<Template>" of Template List    
    And modify the visibility from Workspace to "<New>"
    And accept all settings
    Then the user should see to created board in the list
    Examples:
         | New    | Type                  | Template         |
         | Public | Start with a template | Company Overview |

@test @Acceptance 
  Scenario Outline: Create workspace
    Given the user clicks Create from Header menu
    When the user selects "<Type>" from Create menu
    And enters workspace info:
     | WorkspaceName    | WorkspaceType | WorkspaceDescription |
     | <WorkspaceName>    | <WorkspaceType> | <WorkspaceDescription> |
    And sends an invite to workspace members: "<WorkspaceMembers>"   
    Then the user should see to created board in the list
    Examples:
        | Type             | WorkspaceName    | WorkspaceType | WorkspaceDescription|  WorkspaceMembers     |
        | Create Workspace | AutoWorkspace01  | marketing     | My description      | invite1@gmail.com |