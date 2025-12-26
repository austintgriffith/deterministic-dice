/**
 * Deterministic random number generator seeded by a bytes32 hash.
 */
export declare class DeterministicDice {
    private entropy;
    private position;
    constructor(randomHash: string);
    /**
     * Roll a random number from 0 to n-1 (n possible values).
     */
    roll(n: number): number;
    private consumeHex;
}
export default DeterministicDice;
//# sourceMappingURL=index.d.ts.map