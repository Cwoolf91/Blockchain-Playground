import { Blockchain } from "./blockchain";

console.log('Creating a new blockchain..');
const myChain = new Blockchain();

for (let index = 0; index < 10; index++) {
    console.log("Creating a new block and adding it to the chain");
    myChain.addBlock("Block " + index);
}
console.log("Displaying the Blockchain...");
console.log(JSON.stringify(myChain, null, 10));