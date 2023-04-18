import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

export class VerticalMenuPage extends BasePage {
        
    //private boardName = (name: string) => `//nav[@data-testid='workspace-navigation-nav']/descendant::a[contains(.,"${name}")]`;
    private boardName: string = "//h1[@data-testid='board-name-display']";
    private createBoard: string = "//button[contains(@class,'8c')]";
    
    constructor() {
        super();
    }

    async getBoardInformation(value: string) {        
        const isVisible = await ElementActions.isElementVisible(this.boardName);
        const boardText = await ElementActions.getElementText(this.boardName);
        return [isVisible, boardText];
    }

    async clickCreateBoard(): Promise<void> {        
        await ElementActions.click(this.createBoard);
    }
}

export const verticalMenu = new VerticalMenuPage();