import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { TESTDATA } from "../../config.app";
import { loginPage } from "../../src/pages/login.page";
setDefaultTimeout(60 * 1000);

Given('the user login to Trello', async function () {
    await loginPage.setEmail(TESTDATA.email);
    await loginPage.clickContinue();
    await loginPage.setPassword(TESTDATA.password);;
    await loginPage.clickLogin();
    
  });
