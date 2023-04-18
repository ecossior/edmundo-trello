import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class BoardPage extends BasePage {
     
    private headerLbl= (title:string)=> `//textarea[.="${title}"]`;
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

    async isTitleVisibleInBoard(title:string) {        
        return await ElementActions.isElementVisible(this.headerLbl(title));        
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