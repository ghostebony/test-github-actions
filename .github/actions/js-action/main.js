import { readdirSync } from 'fs';

readdirSync('.').forEach((file) => {
	console.log(file);
});
