import { DataTable, Given, setDefaultTimeout, Then, When, World,  } from "@cucumber/cucumber";
import { headerPage } from "../../src/pages/components/header.page";
import { expect } from "chai";
import { CustomWorld } from "../../cucumber.config";

setDefaultTimeout(60 * 1000);

 
When(/enters workspace info:/, async function (this: CustomWorld, table : DataTable) {
  const data = table.hashes();    
  
  console.log("WorkspaceName "+ data[0].WorkspaceName);
  console.log("WorkspaceType "+ data[0].WorkspaceType);
  console.log("WorkspaceDescription "+ data[0].WorkspaceDescription);
  await headerPage.getWorkspace.setWorkspaceName(data[0].WorkspaceName);
  await headerPage.getWorkspace.selectWorkspaceType(data[0].WorkspaceType);
  await headerPage.getWorkspace.setDescriptionTxt(data[0].WorkspaceDescription); 
  await headerPage.getWorkspace.clickContinue();   
  this.name = data[0].WorkspaceName;
});

Given(/sends an invite to workspace members: "(.*)"/, async function (this:CustomWorld, name :string) {
  await headerPage.getWorkspace.selectMembers(name);
  await headerPage.getWorkspace.clickinviteToWorkspace();   
});
