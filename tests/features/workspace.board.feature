Feature: Manage board
Background: Login to Trello with valid credentials
    Given the user login to Trello

  @test @Acceptance
  Scenario Outline: Add a board to the workspace created
    Given the user creates a Workspace
    | Type   | WorkspaceName   | WorkspaceType   | WorkspaceDescription   |  WorkspaceMembers   |
    | <Type> | <WorkspaceName> | <WorkspaceType> | <WorkspaceDescription> |  <WorkspaceMembers> |
    When the user selects to created workspace for adding new board "<Name>"
    Then the user should see to created board with columns by default:
    | Col1   | Col2  | Col3 |
    | To Do  | Doing | Done |
    And the board header should displays to board "<Name>"
    Examples:
        | Name     | Type             | WorkspaceName    | WorkspaceType | WorkspaceDescription|  WorkspaceMembers |
        | board001 | Create Workspace | AutoWorkspace01  | marketing     | My description      | invite1@gmail.com |


  @test @Acceptance
  Scenario Outline: Add cards to the board created
     Given the user creates a Workspace
     | Type   | WorkspaceName   | WorkspaceType   | WorkspaceDescription   |  WorkspaceMembers   |
     | <Type> | <WorkspaceName> | <WorkspaceType> | <WorkspaceDescription> |  <WorkspaceMembers> |
     When the user selects to created workspace for adding new board "<Name>"
     And adds the following task in board "Planning", "Analysis" and "Design"
     Examples:
        | Name     | Type             | WorkspaceName    | WorkspaceType | WorkspaceDescription|  WorkspaceMembers |
        | board002 | Create Workspace | AutoWorkspace02  | marketing     | My description      | invite1@gmail.com |
