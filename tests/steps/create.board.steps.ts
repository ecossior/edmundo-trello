import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { headerPage } from "../../src/pages/components/header.page";
import { verticalMenu } from "../../src/pages/components/vertical-menu.page";
import { expect } from "chai";
import { CustomWorld } from "../../cucumber.config";

setDefaultTimeout(60 * 1000);

Given('the user clicks Create from Header menu', async function () {
  await headerPage.clickCreate();  
});

When(/the user selects "(.*)" from Create menu/, async function (item: string) {    
  await headerPage.getCreateBoard.clickSelectType(item);  
});
 
Given(/selects the Background "(.*)"/, async function (name : string) {  
  await headerPage.getCreateBoard.clickBackgroundHamburgerIcon();
  await headerPage.getCreateBoard.clickColorsSeeMore();
  await headerPage.getCreateBoard.clickSelectColorBackground(name); 
});

Given(/add the board title "(.*)"/, async function (this:CustomWorld, name :string) {
  await headerPage.getCreateBoard.setBoardTitle(name);
  this.name = name;
});

Given(/selects a "(.*)" of Template List/, async function (this:CustomWorld, name :string) {
  await headerPage.getStartWithTemplate.selectTemplate(name);
  this.name = name;
});

Given(/modify the visibility from Workspace to (.*)/, async function (string) {
  await headerPage.getCreateBoard.clickVisibilityCbo();
  await headerPage.getCreateBoard.clickPublicOption();
  await headerPage.getCreateBoard.clickMakeBoardPublicBtn();

});

Given(/accept all settings/, async function () {
  await headerPage.getCreateBoard.clickCreateBtn();
});

Then('the user should see to created board in the list', async function (this:CustomWorld) {  
  const expecName = this.name  as string;     
  const [isVisible, actualName] = await verticalMenu.getBoardInformation(expecName);  
  expect(isVisible).true;
  expect(actualName).equal(expecName); 
});


/* When(/enters workspace info:/, async function (this: CustomWorld, table : DataTable) {
  const data = table.hashes();    
  await headerPage.getWorkspace.setWorkspaceName(data[0].WorkspaceName);
  await headerPage.getWorkspace.selectWorkspaceType(data[0].WorkspaceType);
  await headerPage.getWorkspace.setDescriptionTxt(data[0].WorkspaceDescription); 
  await headerPage.getWorkspace.clickContinue();  
  this.name = data[0].WorkspaceName;
}); */