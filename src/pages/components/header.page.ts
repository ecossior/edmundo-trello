import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class HeaderPage extends BasePage {
    private trelloLbl: string = "a[aria-label='Back to home']";
    private createBtn: string = "button[data-testid='header-create-menu-button']";

    constructor(){
        super();
    }
    
    async isTrelloVisible(): Promise<boolean> {
        return ElementActions.isElementVisible(this.trelloLbl);
    }

    async clickCreate() {
        await ElementActions.click(this.createBtn);
    }
}

export const headerPage = new HeaderPage();