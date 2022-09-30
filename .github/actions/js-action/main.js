import { readFileSync } from 'fs';
import { request } from 'undici';

const pkg = JSON.parse(readFileSync('./package.json').toString());

const currentVersion = pkg.devDependencies.svelte.replace(/\W+/g, '');

const { body } = await request('https://registry.npmjs.org/svelte');
const data = await body.json();

const latestVersion = data['dist-tags'].latest.replace(/\W+/g, '');

console.log(
	{ currentVersion, latestVersion },
	'publish new version?',
	currentVersion !== latestVersion
);
