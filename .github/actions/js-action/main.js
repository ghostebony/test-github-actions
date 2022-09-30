import { request } from 'undici';
import { devDependencies } from './package';

const currentVersion = devDependencies.svelte.replace(/\W+/g, '');

const { body } = await request('https://registry.npmjs.org/svelte');
const data = await body.json();

const latestVersion = data['dist-tags'].latest.replace(/\W+/g, '');

console.log(
	{ currentVersion, latestVersion },
	'publish new version?',
	currentVersion !== latestVersion
);
