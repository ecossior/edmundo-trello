import { DataTable, Given, setDefaultTimeout, Then, When, World,  } from "@cucumber/cucumber";
import { TESTDATA } from "../../config.app";
import { loginPage } from "../../src/pages/login.page";
import { headerPage } from "../../src/pages/components/header.page";
import { verticalMenu } from "../../src/pages/components/vertical-menu.page";
import { expect } from "chai";
import { CustomWorld } from "../../cucumber.config";



setDefaultTimeout(60 * 1000);

Given('the user clicks Create from Header menu', async function () {
  await headerPage.clickCreate();  
});

When(/the user selects "(.*)" from Create menu/, async function (item: string) {    
  await headerPage.getCreate.clickSelectType(item);  
});

 
Given(/selects the Background "(.*)"/, async function (name : string) {  
  await headerPage.getCreate.clickBackgroundHamburgerIcon();
  await headerPage.getCreate.clickColorsSeeMore();
  await headerPage.getCreate.clickSelectColorBackground(name); 
});

Given(/add the board title "(.*)"/, async function (this:CustomWorld, name :string) {
  await headerPage.getCreate.setBoardTitle(name);
  this.name = name;
});

Given(/selects a "(.*)" of Template List/, async function (this:CustomWorld, name :string) {
  await headerPage.getStartWithTemplate.selectTemplate(name);
  this.name = name;
});

Given(/modify the visibility from Workspace to (.*)/, async function (string) {
  await headerPage.getCreate.clickVisibilityCbo();
  await headerPage.getCreate.clickPublicOption();
  await headerPage.getCreate.clickMakeBoardPublicBtn();

});

Given(/accept all settings/, async function () {
  await headerPage.getCreate.clickCreateBtn();
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