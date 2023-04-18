Feature: Manage board
Background: Login to Trello with valid credentials
    Given the user login to Trello

  @test @TC01 @Acceptance @Smoke
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


  # @test
  # Scenario Outline: Add cards to the board created
  #    Given the user creates a Workspace
  #    | Type   | WorkspaceName   | WorkspaceType   | WorkspaceDescription   |  WorkspaceMembers   |
  #    | <Type> | <WorkspaceName> | <WorkspaceType> | <WorkspaceDescription> |  <WorkspaceMembers> |
  #    When the user selects to created workspace for adding new board "<Name>"
  #    And adds the following task in board "Planning", "Analysis" and "Design"
  #    Examples:
  #       | Name     | Type             | WorkspaceName    | WorkspaceType | WorkspaceDescription|  WorkspaceMembers |
  #       | board002 | Create Workspace | AutoWorkspace02  | marketing     | My description      | invite1@gmail.com |























# @test @TC01 @Acceptance @Smoke
#   Scenario Outline: Create many columns to the board that is assigned to the workspace
#     Given the user create a Workspace
#     | Type   | WorkspaceName   | WorkspaceType   | WorkspaceDescription   |  WorkspaceMembers   |
#     | <Type> | <WorkspaceName> | <WorkspaceType> | <WorkspaceDescription> |  <WorkspaceMembers> |
#     *And assigns a board <name>
#     When the user adds the following columns in board
#     | 1 Planning                |
#     | 2 Analysis                |
#     | 3 Design                  |
#     | 4 Implementation          |
#     | 5 Testing and Integration |
#     | 6 Maintenance             |        
#     Then the user should see to columns created in the board
#     | 1 Planning                |
#     | 2 Analysis                |
#     | 3 Design                  |
#     | 4 Implementation          |
#     | 5 Testing and Integration |
#     | 6 Maintenance             |
#     Examples:
#         | Type             | WorkspaceName    | WorkspaceType | WorkspaceDescription|  WorkspaceMembers |
#         | Create Workspace | AutoWorkspace01  | marketing     | My description      | invite1@gmail.com |

#   @test @TC01 @Acceptance @Smoke
#   Scenario Outline: Create a customized card for the select column in the board.
#     Given the user creates a Workspace
#     | Type   | WorkspaceName   | WorkspaceType   | WorkspaceDescription   |  WorkspaceMembers   |
#     | <Type> | <WorkspaceName> | <WorkspaceType> | <WorkspaceDescription> |  <WorkspaceMembers> |
#     *When the user selects to created workspace for creating a new board <name> 
#     And  adds a  new card in the selected column: "<cardName>" "<columnName>"
#     | Description    | Follow | Activity                 | Members   | Labels | Dates      |
#     | My description | y      | Eclipse IDE is installed | edmika767 | green  | 05/18/2023 |
#     Then the user should see the new card added to "<columnName>":
#     | ExpecFollow                 | ExpecDate | ExpecDescription            | ExpecLabelColor |
#     | You are following this card | May 28    | This card has a description | green           |
#     Examples:
#         | Type             | WorkspaceName    | WorkspaceType | WorkspaceDescription|  WorkspaceMembers |
#         | Create Workspace | AutoWorkspace01  | marketing     | My description      | invite1@gmail.com |

