
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json').toString());

const currentVersion = pkg.devDependencies.svelte;

const res = await fetch('https://registry.npmjs.org/svelte');
const data = await res.json();

const latestVersion = data['dist-tags'].latest;

console.log({ currentVersion, latestVersion });
