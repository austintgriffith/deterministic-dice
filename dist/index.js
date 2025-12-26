import { keccak_256 } from "@noble/hashes/sha3";
import { bytesToHex, hexToBytes } from "@noble/hashes/utils";
/**
 * Deterministic random number generator seeded by a bytes32 hash.
 */
export class DeterministicDice {
    constructor(randomHash) {
        this.entropy = randomHash.startsWith("0x")
            ? randomHash.slice(2)
            : randomHash;
        this.position = 0;
    }
    /**
     * Roll a random number from 0 to n-1 (n possible values).
     */
    roll(n) {
        const range = n;
        const bitsNeeded = Math.ceil(Math.log2(range));
        const hexCharsNeeded = Math.max(1, Math.ceil(bitsNeeded / 4));
        const maxValue = Math.pow(16, hexCharsNeeded);
        const threshold = maxValue - (maxValue % range);
        let value;
        do {
            value = this.consumeHex(hexCharsNeeded);
        } while (value >= threshold);
        return value % range;
    }
    consumeHex(count) {
        let result = 0;
        for (let i = 0; i < count; i++) {
            if (this.position >= this.entropy.length) {
                // Convert hex string to bytes, hash the raw bytes (for Solidity parity)
                const bytes = hexToBytes(this.entropy);
                this.entropy = bytesToHex(keccak_256(bytes));
                this.position = 0;
            }
            result = (result << 4) + parseInt(this.entropy[this.position], 16);
            this.position++;
        }
        return result;
    }
}
export default DeterministicDice;
