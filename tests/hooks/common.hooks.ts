import { Before, After, Status} from "@cucumber/cucumber";
import { driverInstance } from "../../src/core/driver";
import { TESTDATA } from "../../config.app";
import { CustomWorld } from "../../cucumber.config";

Before({tags: '@test'},async function() {
    
    await driverInstance.start(TESTDATA.url);
});

After({tags: '@test'}, async function() {    
    
    await driverInstance.closeDriver();
});

After({name: 'Take Screenshot', tags: '@test2'},async function(this: CustomWorld, scenario) {
    if(scenario.result?.status == Status.FAILED) {
        const image = await driverInstance.takeScreenshot();
        this.attach(image, 'image/png');
    }
    await driverInstance.closeDriver();
});