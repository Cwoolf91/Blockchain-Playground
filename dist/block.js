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
        const { nonce, hash } = this.mine();
        this.hash = hash;
        this.nonce = nonce;
    }
    // Calculate the unique hash
    calculateHash(nonce) {
        const data = this.index + this.previousHash + this.timestamp + this.data + nonce;
        return crypto
            .createHash('sha256')
            .update(data)
            .digest('hex');
    }
    // Verify valid block
    mine() {
        let hash;
        let nonce = Math.random();
        do {
            nonce = Math.random();
            hash = this.calculateHash(nonce);
        } while (hash.startsWith('00000') === false);
        return { nonce, hash };
    }
}
exports.Block = Block;
