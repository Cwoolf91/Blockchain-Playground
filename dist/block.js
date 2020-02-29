"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
// Basic block element
class Block {
    // default constructor
    constructor(index, previousHash, timestamp, data) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
    }
    // Calculate the unique hash
    calculateHash() {
        const data = this.index + this.previousHash + this.timestamp + this.data;
        return crypto
            .createHash('sha256')
            .update(data)
            .digest('hex');
    }
}
exports.Block = Block;
