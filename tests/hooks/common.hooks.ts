import { Before, After} from "@cucumber/cucumber";
import { driverInstance } from "../../src/core/driver";
import { TESTDATA } from "../../config.app";

Before({tags: '@test'},async function() {
    
    await driverInstance.start(TESTDATA.url);
});

After({tags: '@test'}, async function() {    
    
    await driverInstance.closeDriver();
});
