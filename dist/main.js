"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = require("./blockchain");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Timer function
let dateObj = new Date();
let start = Date.now();
console.log("Start time = " + dateObj.toTimeString());
console.log('Creating a new blockchain..');
const myChain = new blockchain_1.Blockchain();
for (let index = 0; index < 5; index++) {
    console.log("Creating a new block and adding it to the chain");
    myChain.addBlock("Block " + index);
    console.log("Time elapsed since start is " + ((Date.now() - start) / 1000));
}
// Prompt user for option to display JSON string.
rl.question('Do you want to display the JSON string? (y/n)', (userInput) => {
    if (userInput.toLowerCase() === 'y') {
        console.log("Displaying the Blockchain...");
        console.log(JSON.stringify(myChain, null, 10));
    }
    rl.close();
});
