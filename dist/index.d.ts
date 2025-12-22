/**
 * Deterministic random number generator seeded by a bytes32 hash.
 */
export declare class DeterministicDice {
    private entropy;
    private position;
    constructor(randomHash: string);
    /**
     * Roll a random number from 0 to max (inclusive).
     */
    roll(max: number): number;
    private consumeHex;
}
export default DeterministicDice;
//# sourceMappingURL=index.d.ts.map