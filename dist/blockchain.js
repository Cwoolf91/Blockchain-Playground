"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_1 = require("./block");
// Blockchain class to hold blocks
class Blockchain {
    // default constructor
    constructor() {
        // class member to hold array of blocks
        this.chain = [];
        this.chain.push(new block_1.Block(0, '0', Date.now(), 'Genesis Block'));
    }
    // retrieve the latest block
    get latestBlock() {
        return this.chain[this.chain.length - 1];
    }
    // add a new block
    addBlock(data) {
        const block = new block_1.Block(this.latestBlock.index + 1, this.latestBlock.hash, Date.now(), data);
        this.chain.push(block);
    }
}
exports.Blockchain = Blockchain;
