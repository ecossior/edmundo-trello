/*import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";

export interface Context {
    scenarioContext: { [idmmmmm: string]: unknown };
}

export class CustomWorld extends World implements Context {    
    scenarioContext: { [idmmmmm: string]: unknown; } = {};
    
    constructor(options: IWorldOptions) {
      super(options);       
    }
  }
  
setWorldConstructor(CustomWorld);
*/

import { IWorld,IWorldOptions,setWorldConstructor, World } from "@cucumber/cucumber";

export class CustomWorld extends World{
    id =0;
    name="";

    constructor(options:IWorldOptions){
        super(options)
    }
}
setWorldConstructor(CustomWorld);