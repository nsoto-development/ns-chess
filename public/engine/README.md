# Stockfish.js engine assets

Bundled for browser play via Web Worker (P1 vs-AI).

| File | Role |
|------|------|
| `stockfish-18-lite-single.js` | Worker entry (Stockfish 18 lite, single-threaded) |
| `stockfish-18-lite-single.wasm` | WASM binary |
| `Copying.txt` | GPL-3.0 license text from the `stockfish` npm package |

**Source:** [`stockfish`](https://www.npmjs.com/package/stockfish) (Nathan Rugg / Chess.com), GPL-3.0.

Regenerate after upgrading the dependency:

```bash
npm run sync:stockfish
```

Do not edit these binaries by hand.
