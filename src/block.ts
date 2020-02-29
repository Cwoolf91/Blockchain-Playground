import * as crypto from 'crypto';

// Basic block element
export class Block {

    // the unique hash for this block
    readonly hash: string;

    // default constructor
    constructor(
        readonly index: number,
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string
    ) {
        this.hash = this.calculateHash();
    }

    // Calculate the unique hash
    private calculateHash(): string {
        const data = this.index + this.previousHash + this.timestamp + this.data;
        return crypto
            .createHash('sha256')
            .update(data)
            .digest('hex');
    }
}