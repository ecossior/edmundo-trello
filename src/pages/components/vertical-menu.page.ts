import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class VerticalMenuPage extends BasePage {
        
    private boardName = (name: string) => `//a[@title="${name} (currently active)"]`;
    
    constructor() {
        super();
    }

    async getBoardInformation(projName: string) {        
        const isVisible = await ElementActions.isElementVisible(this.boardName(projName));
        const boardText = await ElementActions.getElementText(this.boardName(projName));
        return [isVisible, boardText];
    }
}

export const verticalMenu = new VerticalMenuPage();