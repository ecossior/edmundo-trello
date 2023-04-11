import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { TESTDATA } from "../../config.app";
import { loginPage } from "../../src/pages/login.page";
import { headerPage } from "../../src/pages/components/header.page";
import { createBoardMenuPage } from "../../src/pages/components/createBoard-menu.page";
setDefaultTimeout(60 * 1000);

Given('the user selects Create board from Header menu', async function () {
  await headerPage.clickCreate();  
});

When('the user customize the board background', async function () {
  await createBoardMenuPage.clickSelectedbackgroundBtn();  
});

When('add the board title {string}', async function (name :string) {
  await createBoardMenuPage.setBoardTitle(name);
});

When('modify the visibility from Workspace to {string}', async function (string) {
  await createBoardMenuPage.clickVisibilityCbo();
  await createBoardMenuPage.clickPublicOption();
  await createBoardMenuPage.clickMakeBoardPublicBtn();

});

When('accept all settings', async function () {
  await createBoardMenuPage.clickCreateBtn();
});
