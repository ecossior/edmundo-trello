import { DataTable, Given, setDefaultTimeout, Then, When  } from "@cucumber/cucumber";
import { headerPage } from "../../src/pages/components/header.page";
import { verticalMenu } from "../../src/pages/components/vertical-menu.page";
import { expect } from "chai";
import { CustomWorld } from "../../cucumber.config";
import { boardPage } from "../../src/pages/boardPage";


setDefaultTimeout(60 * 1000);

Given('the user creates a Workspace', async function (this: CustomWorld, table: DataTable) {
  const data = table.hashes();  
  await headerPage.clickCreate();
  await headerPage.getCreateBoard.clickSelectType(data[0].Type);
  await headerPage.getWorkspace.setWorkspaceName(data[0].WorkspaceName);
  await headerPage.getWorkspace.selectWorkspaceType(data[0].WorkspaceType);
  await headerPage.getWorkspace.setDescriptionTxt(data[0].WorkspaceDescription); 
  await headerPage.getWorkspace.clickContinue();   
  await headerPage.getWorkspace.selectMembers(data[0].WorkspaceMembers);
  await headerPage.getWorkspace.clickinviteToWorkspace();   
});

When(/the user selects to created workspace for adding new board "(.*)"/, async function (this:CustomWorld, name :string) {
  
  this.name = name;
  verticalMenu.clickCreateBoard();
  headerPage.getCreateBoard.setBoardTitle(name);
  headerPage.getCreateBoard.clickCreateBtn();     
});

Then(/the user should see to created board with columns by default:/, async function (this:CustomWorld, table: DataTable) {
  const data = table.hashes();  
  const expecToDo = data[0].Col1;
  const expecDoing = data[0].Col2;
  const expecDone = data[0].Col3;
  const isVisibleToDO  = await boardPage.isTitleVisibleInBoard(expecToDo);  
  const isVisibleDoing  = await boardPage.isTitleVisibleInBoard(expecDoing);  
  const isVisibleDone  = await boardPage.isTitleVisibleInBoard(expecDone);  
  expect(isVisibleToDO).true;
  expect(isVisibleDoing).true;
  expect(isVisibleDone).true;  
});

Then('the board header should displays to board {string}', async function (this:CustomWorld, expecName: string) {
  const name = this.name  as string;     
  const [isVisible, actualName] = await verticalMenu.getBoardInformation(name);  
  expect(isVisible).true;
  expect(actualName).equal(expecName); 
});

When('adds the following task in board {string}, {string} and {string}', async function (this:CustomWorld, task1: string, task2: string, task3: string) {
  boardPage.newTodo(task1);  
  boardPage.newDoing(task2);  
  boardPage.newDone(task3);  
});

