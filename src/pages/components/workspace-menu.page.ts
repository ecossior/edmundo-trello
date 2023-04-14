import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

export class WorkspaceMenuPage extends BasePage {    

    private members =(value:string)=>`//div[@title="${value}" and @role='option']`;
    private item =(value:string)=>`//div[@data-testid='header-create-team-type-input-${value}']`;
    private nameTxt: string = "//input[@data-testid='header-create-team-name-input']";
    private workspaceTypeCbo: string = "//div[@data-testid='header-create-team-type-input']";    
    private descriptionTxt : string = "//textarea[@placeholder='Our team organizes everything here.']";
    private continueBtn : string = "//button[@data-testid='header-create-team-submit-button']";
    private workspaceMembersTxt : string = "//input[@data-testid='add-members-input']";
    private inviteToWorkspaceBtn :string = "//button[@data-testid='team-invite-submit-button']";
    
    
    constructor() {
        super();
    }

    async setWorkspaceName(value: string): Promise<void> {
        await ElementActions.setText(this.nameTxt,value);
    }

    async selectWorkspaceType(name: string): Promise<void> {
        await ElementActions.click(this.workspaceTypeCbo);
        await ElementActions.click(this.item(name));
    }   

    
    async setDescriptionTxt(value: string): Promise<void> {
        await ElementActions.setText(this.descriptionTxt,value);
    }

    async clickContinue(): Promise<void> {        
        await ElementActions.click(this.continueBtn);
    }


    async selectMembers(name: string): Promise<void> {
        await ElementActions.setText(this.workspaceMembersTxt,name);        
    }
     
    async clickinviteToWorkspace(): Promise<void> {        
        await ElementActions.click(this.inviteToWorkspaceBtn);
    }
}
