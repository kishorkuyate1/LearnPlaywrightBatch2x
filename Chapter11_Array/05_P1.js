
const { stdout } = require("process");
const readline=require("readline");

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    });
    rl.question("Enter The Name",function(name){
        console.log(name);
        rl.close();
    })

