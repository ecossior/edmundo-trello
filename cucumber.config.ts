import { IWorld,IWorldOptions,setWorldConstructor, World } from "@cucumber/cucumber";

export class CustomWorld extends World{
    input =0;
    inout=2;

    constructor(options:IWorldOptions){
        super(options)
    }
}
setWorldConstructor(CustomWorld);