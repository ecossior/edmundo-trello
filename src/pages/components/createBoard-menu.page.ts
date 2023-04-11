import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class CreateBoardMenuPage extends BasePage {    
    private createboardBtn: string = 'button[data-testid="header-create-board-button"]';
    private selectedbackgroundBtn: string = '//ul[1]/li[3]/button[1]';
    private boardTitleTxt: string = '//input[@data-testid="create-board-title-input"]';
    private visibilityCbo: string='//div[@id="1681232815411-create-board-select-visibility"]';
    private publicOption: string = '#react-select-23-option-2';
    private makeBoardPublicBtn: string = "//button[.='Yes, make board public']";    
    private createBtn: string = '//button[@data-testid="create-board-submit-button"]';
    
    constructor() {
        super();
    }

    async clickCreateboardBtn(): Promise<void> {
        await ElementActions.click(this.createboardBtn);
    }

    async clickSelectedbackgroundBtn(): Promise<void> {
        await ElementActions.click(this.selectedbackgroundBtn);
    }

    async setBoardTitle(text: string) {
        await ElementActions.setText(this.boardTitleTxt, text);
    }

    async clickVisibilityCbo(): Promise<void> {
        await ElementActions.click(this.visibilityCbo);
    }

    async clickPublicOption(): Promise<void> {
        await ElementActions.click(this.publicOption);
    }   

    async clickMakeBoardPublicBtn(): Promise<void> {
        await ElementActions.click(this.makeBoardPublicBtn);
    }

    async clickCreateBtn(): Promise<void> {
        await ElementActions.click(this.createBtn);
    }        
}

export const createBoardMenuPage = new CreateBoardMenuPage();



/**
 * async getProjectNameInformation(projName: string) {
        const projetNameLocator = this.projectName(projName);
        const isVisible = await ElementActions.isElementVisible(projetNameLocator);
        const projectText = await ElementActions.getElementText(projetNameLocator);        
        return [isVisible, projectText];
    }
 */