let inputArr =process.argv.slice(2);
let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");
//input
//console.log(inputArr);
let cmd=inputArr[0];
switch (cmd){
    case "help":
        helpObj.helpfxn();
        break;
        case "tree":
            treeObj.treeFn(inputArr[1]);
            break;
            case "organize":
                organizeObj.organizefxn(inputArr[1]);
                break;
                default:
                    
                    console.log('wrong command .kindly enter help to see all the commands');
                    break;
}