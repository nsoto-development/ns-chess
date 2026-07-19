import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const bin = join(root, 'node_modules', 'stockfish', 'bin');
const out = join(root, 'public', 'engine');

mkdirSync(out, { recursive: true });

for (const file of [
  'stockfish-18-lite-single.js',
  'stockfish-18-lite-single.wasm',
]) {
  copyFileSync(join(bin, file), join(out, file));
}

copyFileSync(join(root, 'node_modules', 'stockfish', 'Copying.txt'), join(out, 'Copying.txt'));

console.log('Synced Stockfish lite-single engine to public/engine/');
