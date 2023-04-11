import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class BoardPage extends BasePage {
    
    private toDoLbl: string = '//textarea[.="To Do"]';
    private doingLbl: string = '//textarea[.="Doing"]';
    private doneLbl: string = '//textarea[.="Done"]';
    private addCardForToDo: string = '//div[@id="board"]/div[1]//span[@class="icon-sm icon-add"]';
    private addCardForDoing: string = '//div[@id="board"]/div[2]//span[@class="icon-sm icon-add"]';
    private addCardForDone: string = '//div[@id="board"]/div[3]//span[@class="icon-sm icon-add"]'; 
    private addAnotherList: string = '//div[@id="board"]/div[4]//span[@class="icon-sm icon-add"]  ';     
    private cardTitleTxt: string = '//textarea[@class="list-card-composer-textarea js-card-title"]';   
    private addCardBtn: string = '//input[@value="Add card"]';
    private listTitleTxt: string = '//input[@name="name"]';   
    private addListBtn: string = '//input[@value="Add list"]';
    
    constructor(){
        super();
    }

    async getTodoInformation() {        
        const isVisible = await ElementActions.isElementVisible(this.toDoLbl);
        const toDoText = await ElementActions.getElementText(this.toDoLbl);        
        return [isVisible, toDoText];
    }

    async getDoingInformation() {
        const isVisible = await ElementActions.isElementVisible(this.doingLbl);
        const doingText = await ElementActions.getElementText(this.doingLbl);
        return [isVisible, doingText];
    }

    async getDoneInformation() {        
        const isVisible = await ElementActions.isElementVisible(this.doneLbl);
        const doneText = await ElementActions.getElementText(this.doneLbl);        
        return [isVisible, doneText];
    }

    async newTodo(name: string) {
        await ElementActions.click(this.addCardForToDo);
        await ElementActions.setText(this.cardTitleTxt, name);        
        await ElementActions.click(this.addCardBtn);
    }

    async newDoing(name: string) {
        await ElementActions.click(this.addCardForDoing);
        await ElementActions.setText(this.cardTitleTxt, name);        
        await ElementActions.click(this.addCardBtn);
    }

    async newDone(name: string) {
        await ElementActions.click(this.addCardForDone);
        await ElementActions.setText(this.cardTitleTxt, name);        
        await ElementActions.click(this.addCardBtn);
    }
    async newList(name: string) {
        await ElementActions.click(this.addAnotherList);
        await ElementActions.setText(this.listTitleTxt, name);        
        await ElementActions.click(this.addListBtn);
    }
}

export const boardPage = new BoardPage();