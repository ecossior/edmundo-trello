import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

export class StartTemplateMenuPage extends BasePage {    
    
    private template = (name:string)=>`//button/div[.="${name}"]`; 
    
    constructor() {
        super();
    }

    async selectTemplate(name: string): Promise<void> {
        await ElementActions.click(this.template(name));
    }      
    
}
