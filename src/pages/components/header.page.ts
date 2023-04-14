import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";
import { CreateMenuPage } from "./create-menu.page";
import { StartTemplateMenuPage } from "./template-menu.page";
import { WorkspaceMenuPage } from "./workspace-menu.page";

class HeaderPage extends BasePage {   
    private create: CreateMenuPage;
    private startWithTemplate: StartTemplateMenuPage;
    private workspace: WorkspaceMenuPage;
    private trelloLbl: string = "a[aria-label='Back to home']";
    private createBtn: string = "button[data-testid='header-create-menu-button']";

    constructor(){
        super();
        this.create = new CreateMenuPage();
        this.startWithTemplate = new StartTemplateMenuPage();
        this.workspace = new WorkspaceMenuPage();
    }

    public get getCreate() {
        return this.create;
    }

    public get getStartWithTemplate() {
        return this.startWithTemplate;
    }

    public get getWorkspace() {
        return this.workspace;
    }
    
    async isTrelloVisible(): Promise<boolean> {        
        return ElementActions.isElementVisible(this.trelloLbl);
    }

    async clickCreate() {
        await ElementActions.click(this.createBtn);
    }
}

export const headerPage = new HeaderPage();