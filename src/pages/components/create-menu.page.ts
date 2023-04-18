import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

export class CreateMenuPage extends BasePage {        
    
    private selectTypeBtn= (item:string)=> `//span[.="${item}"]`;
    private backgroundHamburgerIcon : string = "//li[6]/button[@class='bxgKMAm3lq5BpA SEj5vUdI3VvxDc']";
    private colorsSeeMoreBtn     : string = "//h1[.='Colors']/following::button";        
    private selectColorBackgroundBtn= (name: string) => `//div[@title="${name}"]`;
    private boardTitleTxt: string = '//input[@data-testid="create-board-title-input"]';
    private visibilityCbo: string="//div[.='Workspace']";
    private publicOption: string = "//span[contains(.,'Anyone')]";
    private makeBoardPublicBtn: string = "//button[.='Yes, make board public']";    
    private createBtn: string = '//button[@data-testid="create-board-submit-button"]';
    
    
    constructor() {
        super();
    }

    async clickSelectType(item: string): Promise<void> {
        await ElementActions.click(this.selectTypeBtn(item));
    }   

    async clickBackgroundHamburgerIcon(): Promise<void> {
        await ElementActions.click(this.backgroundHamburgerIcon);
    }

    async clickColorsSeeMore(): Promise<void> {
        await ElementActions.click(this.colorsSeeMoreBtn);
    }

    async clickSelectColorBackground(name: string): Promise<void> {
        await ElementActions.click(this.selectColorBackgroundBtn(name));
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
