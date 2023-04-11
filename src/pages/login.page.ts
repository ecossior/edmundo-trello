import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class LoginPage extends BasePage {
    private emailTxt: string = "#user";
    private continueBtn: string = "#login";
    private passwordTxt: string = "#password";
    private loginBtn: string = "#login-submit";

    constructor(){
        super();
    }

    async setEmail(text: string) {
        await ElementActions.setText(this.emailTxt, text);
    }

    async clickContinue() {
        await ElementActions.click(this.continueBtn);
    }

    async setPassword(text: string) {        
        await ElementActions.setText(this.passwordTxt, text);
    }

    async clickLogin() {
        await ElementActions.click(this.loginBtn);
    }

    async login(emailInput: string, passwordInput: string) {
        await ElementActions.setText(this.emailTxt, emailInput);
        await ElementActions.setText(this.passwordTxt, passwordInput);
        await ElementActions.click(this.loginBtn);
    }
}

export const loginPage = new LoginPage();