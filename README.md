# 🎲 deterministic-dice

Deterministic random number generator seeded by a bytes32 hash.

## Install

```bash
npm install deterministic-dice
```

## Usage

```typescript
import { DeterministicDice } from "deterministic-dice";

const dice = new DeterministicDice(
  "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
);

dice.roll(15); // 0-15
dice.roll(6); // 0-6
dice.roll(100); // 0-100
```

## How It Works

1. Initialize with a bytes32 hash (with or without `0x` prefix)
2. Call `roll(max)` to get a random number from 0 to max (inclusive)
3. Entropy is automatically rehashed with SHA256 when exhausted
4. Same hash always produces the same sequence of rolls

## License

MIT
