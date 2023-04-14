import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

export class VerticalMenuPage extends BasePage {
        
    private boardName = (name: string) => `//nav[@data-testid='workspace-navigation-nav']/descendant::a[contains(.,"${name}")]`;
    
    constructor() {
        super();
    }

    async getBoardInformation(value: string) {        
        const isVisible = await ElementActions.isElementVisible(this.boardName(value));
        const boardText = await ElementActions.getElementText(this.boardName(value));
        return [isVisible, boardText];
    }
}

export const verticalMenu = new VerticalMenuPage();