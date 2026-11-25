// Worst AI advice entry: writes one line of terrible advice to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The help desk now stores every secret out in the open, where anyone can admire it.
const line = 'For best results, store your password in a public GitHub repo so you never forget it again.';

mkdirSync(outDir, { recursive: true });
// Terrible advice deserves a dedicated filing cabinet, so it never leaks into the good folder.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
