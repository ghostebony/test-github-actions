
import { readFile } from 'fs/promises';

const pkg = await readFile('./package.json');
console.log(pkg.toString());
