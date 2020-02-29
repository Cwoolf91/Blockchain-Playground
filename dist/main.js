"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = require("./blockchain");
console.log('Creating a new blockchain..');
const myChain = new blockchain_1.Blockchain();
for (let index = 0; index < 10; index++) {
    console.log("Creating a new block and adding it to the chain");
    myChain.addBlock("Block " + index);
}
console.log("Displaying the Blockchain...");
console.log(JSON.stringify(myChain, null, 10));
