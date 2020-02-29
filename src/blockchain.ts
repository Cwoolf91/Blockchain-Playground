import { Block } from "./block";

// Blockchain class to hold blocks
export class Blockchain {
    // class member to hold array of blocks
    private readonly chain: Block[] = [];

    // retrieve the latest block
    private get latestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    // default constructor
    constructor() {
        this.chain.push(
            new Block(0, '0', Date.now(), 'Genesis Block')
        );
    }

    // add a new block
    addBlock(data: string): void {
        const block = new Block(
            this.latestBlock.index + 1,
            this.latestBlock.hash,
            Date.now(),
            data
        );
        this.chain.push(block);
    }
}